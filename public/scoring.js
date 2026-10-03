import {QUESTIONS,PROVERBS} from './data.js';
export const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
export function validChoice(q,a){return q.type==='sequence'?Array.isArray(a)&&a.length===q.options.length&&new Set(a).size===a.length&&a.every(x=>Number.isInteger(x)&&x>=0&&x<q.options.length):Number.isInteger(a)&&a>=0&&a<q.options.length;}
export function grade(q,tries=[]){const index=tries.findIndex(a=>same(a,q.answer));return index<0?0:index===0?5:3;}
export function total(attempts={}){return QUESTIONS.reduce((s,q)=>s+grade(q,attempts[q.id]),0);}
export function completed(attempts={}){return QUESTIONS.filter(q=>grade(q,attempts[q.id])>0).length;}
export function badges(attempts={}){return PROVERBS.filter(q=>(attempts[q.id]||[]).some(a=>same(a,q.answer))).length;}
export function skillStats(attempts={}){const out={};for(const q of QUESTIONS){out[q.skill]??={first:0,solved:0,total:0};const s=out[q.skill];s.total++;if(grade(q,attempts[q.id])===5)s.first++;if(grade(q,attempts[q.id])>0)s.solved++;}return out;}
export function rankRows(rows){const complete=rows.filter(r=>r.done).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,'ms'));let prev=null,rank=0;return [...complete.map((r,i)=>{if(r.score!==prev)rank=i+1;prev=r.score;return {...r,rank};}),...rows.filter(r=>!r.done).map(r=>({...r,rank:null}))];}
