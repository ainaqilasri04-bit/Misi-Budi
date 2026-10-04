import {validateAdaptive,adaptiveSummary} from '../../public/adaptive-core.js';
import {randomBytes,randomUUID,createHash,timingSafeEqual} from 'node:crypto';
import {QUESTIONS,PROVERBS,REFLECTIONS} from '../../public/data.js';
import {same,validChoice,total,completed,badges,rankRows,skillStats} from '../../public/scoring.js';
const hash=s=>createHash('sha256').update(String(s)).digest('hex');
const equal=(a,b)=>timingSafeEqual(Buffer.from(hash(a)),Buffer.from(hash(b)));
const fail=(message,status=400)=>{const e=new Error(message);e.status=status;throw e;};
const codeOK=c=>typeof c==='string'&&/^[A-Z2-9]{8}$/.test(c);
const tokenOK=t=>typeof t==='string'&&/^[a-f0-9]{48}$/.test(t);
const idOK=id=>typeof id==='string'&&/^[a-f0-9-]{36}$/.test(id);
const carOK=c=>['red','teal','gold'].includes(c);
export function validateAttempts(input,previous={}){
 if(!input||typeof input!=='object'||Array.isArray(input))fail('Rekod jawapan tidak sah.');
 const allowed=new Map([...QUESTIONS,...PROVERBS].map(q=>[q.id,q]));const clean={};
 for(const [id,tries] of Object.entries(input)){
  const q=allowed.get(id);if(!q||!Array.isArray(tries)||tries.length>12)fail('Rekod jawapan tidak sah.');
  if(!tries.every(a=>validChoice(q,a)))fail('Pilihan jawapan tidak sah.');
  const solved=tries.findIndex(a=>same(a,q.answer));if(solved>=0&&solved!==tries.length-1)fail('Jawapan selepas item selesai tidak diterima.');
  clean[id]=tries;
 }
 for(const [id,old] of Object.entries(previous))if(!clean[id]||!old.every((a,i)=>same(a,clean[id][i])))fail('Rekod lama tidak boleh diubah. Muat semula kemajuan asal.',409);
 return clean;
}
export function validateReflections(input={}){if(!input||typeof input!=='object'||Array.isArray(input))fail('Refleksi tidak sah.');const out={};for(const r of REFLECTIONS){if(input[r.id]!==undefined){if(!r.items.some(([id])=>id===input[r.id]))fail('Pilihan refleksi tidak sah.');out[r.id]=input[r.id];}}return out;}
export function createService(store,{teacherKey='',now=()=>Date.now()}={}){
 async function room(code){if(!codeOK(code))fail('Kod kelas mestilah lapan huruf atau nombor.');const r=await store.get(`rooms/${code}`,{type:'json'});if(!r)fail('Kod kelas tidak ditemui. Semak dengan guru.',404);return r;}
 function admin(key){if(teacherKey.length<12)fail('Ruang guru belum diaktifkan. Tetapkan KUNCI_GURU dalam tetapan Netlify.',503);if(typeof key!=='string'||!equal(key,teacherKey))fail('Kata laluan guru tidak tepat.',401);}
 async function rows(code){const {blobs}=await store.list({prefix:`players/${code}/`});return (await Promise.all(blobs.map(b=>store.get(b.key,{type:'json'})))).filter(Boolean);}
 const publicRow=p=>({id:p.id,name:p.name,car:p.car,score:total(p.attempts),done:completed(p.attempts)===20,level:Math.floor(completed(p.attempts)/5),badges:badges(p.attempts)});
 return async function dispatch(b){
  if(!b||typeof b!=='object'||Array.isArray(b))fail('Permintaan tidak sah.');
  if(b.action==='health')return {ok:true,teacherReady:teacherKey.length>=12};
  if(b.action==='verify'){admin(b.teacherKey);return {ok:true};}
  if(b.action==='create'){
   admin(b.teacherKey);const name=String(b.name||'Kelas BaCaNi').trim().slice(0,60);if(!name)fail('Masukkan nama sesi.');
   const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let code;
   for(let i=0;i<5;i++){code=Array.from(randomBytes(8),v=>alphabet[v%alphabet.length]).join('');const created=await store.setJSON(`rooms/${code}`,{code,name,closed:false,createdAt:now()},{onlyIfNew:true});if(created.modified)return {code,name,closed:false};}fail('Sesi belum dapat dicipta. Cuba lagi.',503);
  }
  if(b.action==='join'){
   const r=await room(b.code);if(r.closed)fail('Sesi ini telah ditutup oleh guru.',409);
   const name=String(b.name||'').trim().replace(/[\u0000-\u001f\u007f]/g,'').slice(0,30);if(!name)fail('Isi nama pengembara dahulu.');if(!carOK(b.car))fail('Pilih kereta.');
   const roster=await rows(b.code);if(roster.length>=100)fail('Sesi ini sudah mempunyai 100 peserta. Minta guru membuka sesi baharu.');
   const id=randomUUID(),token=randomBytes(24).toString('hex');await store.setJSON(`players/${b.code}/${id}`,{id,name,car:b.car,tokenHash:hash(token),attempts:{},reflections:{},joinedAt:now(),updatedAt:now()},{onlyIfNew:true});return {id,token,room:r.name};
  }
  if(b.action==='progress'){
   const r=await room(b.code);if(!idOK(b.id)||!tokenOK(b.token))fail('Sila masuk semula ke sesi kelas.',401);
   const key=`players/${b.code}/${b.id}`;const entry=await store.getWithMetadata(key,{type:'json'});if(!entry||!equal(hash(b.token),entry.data.tokenHash))fail('Sila masuk semula ke sesi kelas.',401);
   if(b.car!==undefined&&!carOK(b.car))fail('Pilihan kereta tidak sah.');
   const attempts=validateAttempts(b.attempts,entry.data.attempts);const reflections=validateReflections(b.reflections);let adaptive;try{adaptive=validateAdaptive(b.adaptive,attempts,entry.data.adaptive||null);}catch(e){fail(e.message);}
   if(r.closed&&(!same(attempts,entry.data.attempts)||!same(adaptive,entry.data.adaptive||null)))fail('Sesi ditutup. Jawapan disimpan pada peranti ini; minta guru membuka semula sesi untuk menghantar.',409);
   const p={...entry.data,car:b.car||entry.data.car,attempts,reflections,adaptive,updatedAt:now()};const write=await store.setJSON(key,p,{onlyIfMatch:entry.etag});if(!write.modified)fail('Kemajuan sedang dikemas kini. Cuba hantar semula.',409);return {ok:true,...publicRow(p)};
  }
  if(b.action==='leaderboard'){
   const r=await room(b.code);return {name:r.name,closed:r.closed,rows:rankRows((await rows(b.code)).map(publicRow))};
  }
  if(['teacher','close','open','delete'].includes(b.action)){
   admin(b.teacherKey);const r=await room(b.code);
   if(b.action==='delete'){const list=await store.list({prefix:`players/${b.code}/`});for(const item of list.blobs)await store.delete(item.key);await store.delete(`rooms/${b.code}`);return {ok:true};}
   if(b.action==='close'||b.action==='open'){r.closed=b.action==='close';await store.setJSON(`rooms/${b.code}`,r);}
   return {...r,rows:rankRows((await rows(b.code)).map(p=>({...publicRow(p),attempts:p.attempts,reflections:p.reflections,skills:skillStats(p.attempts),adaptive:p.adaptive||null,adaptiveSummary:adaptiveSummary(p.adaptive,p.attempts),updatedAt:p.updatedAt})))};
  }
  fail('Tindakan tidak dikenali.');
 };
}
