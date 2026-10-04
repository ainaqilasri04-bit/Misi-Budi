import {QUESTIONS} from './data.js';
import {same,completed,grade,skillStats} from './scoring.js';
import {ADAPTIVE_BANKS} from './adaptive-data.js';
export function learningProfile(attempts={}){const done=completed(attempts),first=QUESTIONS.filter(q=>grade(q,attempts[q.id])===5).length,skills=skillStats(attempts);const weakest=Object.keys(skills).sort((a,b)=>skills[a].first/skills[a].total-skills[b].first/skills[b].total);return {ready:done===QUESTIONS.length,done,first,percent:Math.round(first/QUESTIONS.length*100),route:first<10?'pemulihan':first<16?'pengukuhan':'pengayaan',weakest,skills};}
export function selectedExercises(profile){return [...ADAPTIVE_BANKS[profile.route]].sort((a,b)=>profile.weakest.indexOf(a.skill)-profile.weakest.indexOf(b.skill)).slice(0,3);}
export function newAdaptive(attempts){const profile=learningProfile(attempts);if(!profile.ready)return null;return {version:1,route:profile.route,ids:selectedExercises(profile).map(q=>q.id),tries:{},hints:[],draft:{mode:'tulis',situation:'',action:'',proverb:'',reason:''},submitted:false};}
export function adaptiveSummary(record,attempts){const p=learningProfile(attempts);if(!p.ready)return {route:null,first:p.first,percent:p.percent,solved:0,firstPractice:0,status:'Belum selesai 20 misi'};const qs=selectedExercises(p),r=record||{},solved=qs.filter(q=>(r.tries?.[q.id]||[]).includes(q.answer)).length,firstPractice=qs.filter(q=>r.tries?.[q.id]?.[0]===q.answer).length;return {route:p.route,first:p.first,percent:p.percent,solved,firstPractice,status:solved<3?(solved?'Sedang berlatih':'Belum mula'):p.route==='pengayaan'?(r.submitted?'Idea dihantar · perlu semakan guru':'Jawapan selesai · bina contoh sendiri'):'Selesai latihan',complete:solved===3&&(p.route!=='pengayaan'||r.submitted===true)};}
// Used by the server as well as the client: route, item IDs and completion are derived, never trusted.
export function validateAdaptive(input,attempts,previous=null){
 if(input===undefined)return previous;if(input===null&&previous)return previous;if(input===null)return null;
 const out=newAdaptive(attempts);if(!out)throw Error('Selesaikan 20 misi sebelum menghantar latihan susulan.');
 if(!input||typeof input!=='object'||Array.isArray(input)||input.version!==1||input.route!==out.route||!same(input.ids,out.ids)||!input.tries||typeof input.tries!=='object'||Array.isArray(input.tries))throw Error('Rekod latihan susulan tidak sah.');
 const qs=selectedExercises(learningProfile(attempts));for(const [id,tries]of Object.entries(input.tries)){const q=qs.find(q=>q.id===id);if(!q||!Array.isArray(tries)||tries.length>12||tries.some(v=>!Number.isInteger(v)||v<0||v>=q.options.length))throw Error('Pilihan latihan susulan tidak sah.');const at=tries.indexOf(q.answer);if(at>=0&&at!==tries.length-1)throw Error('Jawapan selepas latihan selesai tidak diterima.');out.tries[id]=[...tries];}
 for(const [id,old]of Object.entries(previous?.tries||{})){if(!old.every((v,i)=>out.tries[id]?.[i]===v))throw Error('Sejarah latihan yang disimpan tidak boleh dipadam.');}
 if(input.hints!==undefined&&(!Array.isArray(input.hints)||input.hints.some(id=>!out.ids.includes(id))))throw Error('Petunjuk latihan tidak sah.');out.hints=[...new Set([...(previous?.hints||[]),...(input.hints||[])])];
 const d=input.draft||{};out.draft={mode:d.mode==='lisan'?'lisan':'tulis',...Object.fromEntries(['situation','action','proverb','reason'].map(k=>[k,String(d[k]||'').trim().slice(0,600)]))};
 out.submitted=out.route==='pengayaan'&&input.submitted===true;if(out.submitted&&(!['situation','action','proverb','reason'].every(k=>out.draft[k])||!qs.every(q=>(out.tries[q.id]||[]).includes(q.answer))))throw Error('Lengkapkan latihan dan contoh peribahasa dahulu.');
 if(previous?.submitted&&!out.submitted)throw Error('Contoh yang dihantar tidak boleh ditandakan belum dihantar.');
 return out;
}
