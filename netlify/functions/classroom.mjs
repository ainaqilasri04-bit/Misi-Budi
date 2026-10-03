import {getStore} from '@netlify/blobs';
import {createService} from '../lib/service.js';
export default async function handler(req){
 const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'};
 if(req.method!=='POST')return new Response(JSON.stringify({error:'Gunakan aplikasi untuk mengakses sesi.'}),{status:405,headers});
 const origin=req.headers.get('origin');if(origin&&origin!==new URL(req.url).origin)return new Response(JSON.stringify({error:'Asal permintaan tidak dibenarkan.'}),{status:403,headers});
 try{const raw=await req.text();if(raw.length>24000)return new Response(JSON.stringify({error:'Permintaan terlalu besar.'}),{status:413,headers});const body=JSON.parse(raw);const store=getStore({name:'lambobudi-dunia-v3',consistency:'strong'});const result=await createService(store,{teacherKey:process.env.KUNCI_GURU||''})(body);return new Response(JSON.stringify(result),{headers});}
 catch(e){const status=e.status||(e instanceof SyntaxError?400:500);return new Response(JSON.stringify({error:status===500?'Simpanan kelas belum dapat dihubungi. Cuba lagi sebentar.':e.message}),{status,headers});}
}
