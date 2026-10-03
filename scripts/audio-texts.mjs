import {LEVELS,PROVERBS,PRACTICE,REFLECTIONS,plain} from '../public/data.js';
import {CLUES,PASSPORT,TRANSFORMS,WORLD_UI,HELP_STEPS} from '../public/journey-data.js';
import {writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const set=new Set();const add=s=>set.add(plain(s).replace(/\s+/g,' ').trim());
for(const l of LEVELS){l.panels.forEach(add);add(l.panels.join(' '));}
for(const q of [...LEVELS.flatMap(l=>l.questions),...PRACTICE,...PROVERBS]){add(q.text);q.options.forEach(o=>{add(o.text);if(o.why)add(o.why);});if(q.evidence)add(q.evidence);if(q.type==='sequence'){add('Ya! Urutan kamu mengikut peristiwa dalam cerita.');for(let mismatch=0;mismatch<3;mismatch++){for(let choice=0;choice<3;choice++){if(choice!==q.answer[mismatch])add(`Pada tempat ${mismatch+1}, kamu memilih “${plain(q.options[choice].text)}”. Pada tempat itu, peristiwa yang sepadan ialah “${plain(q.options[q.answer[mismatch]].text)}”. Baca semula urutan cerita.`);}}}}
for(const p of PROVERBS)add(`${plain(p.text)}. Maksudnya, ${p.meaning}. ${p.context}`);
for(const r of REFLECTIONS){add(r.title);add(r.items.map(([,t])=>t).join('. '));}
for(const p of PASSPORT)add(`${p.baca} ${p.cari} ${p.nilai}`);
Object.values(WORLD_UI).forEach(add);HELP_STEPS.forEach(step=>add(step.text));CLUES.flat().forEach(add);TRANSFORMS.flat().forEach(add);
['Singgah dan baca cerita.','Selamat datang ke Misi Budi. Baca cerita, cari perbuatan watak, dan kenal pasti nilai murni.','Mari kita baca cerita bersama-sama.','Isi nama dan pilih kereta. Pandu ke hentian. Baca cerita. Cari perbuatan watak. Nyatakan nilai dan bukti. Kamu boleh mendengar dan mencuba semula.'].forEach(add);
export const audioTexts=[...set].filter(Boolean);
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){writeFileSync(process.argv[2]||'/tmp/misi-budi-audio-texts.json',JSON.stringify(audioTexts,null,2));console.log(audioTexts.length+' petikan audio');}
