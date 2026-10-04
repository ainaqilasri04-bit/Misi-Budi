import {access} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {LEVELS,PROVERBS} from '../public/data.js';
import {grade,validChoice} from '../public/scoring.js';
import {PLACES,CLUES,TRANSFORMS,PASSPORT} from '../public/journey-data.js';
import manifest,{AUDIO_VOICE} from '../public/audio-manifest.js';
import {supportTexts,recordedKey,VOCABULARY,wordRecording} from '../public/reading-data.js';
import {audioTexts} from './audio-texts.mjs';
const source=['adaptive-data','adaptive-core','adaptive-lab','app','group-data','group-store','reading-data','reading-support','observations','group-lab','play-data','world-art','adventure','audio','data','journey-data','scoring','icons','audio-manifest'];
for(const p of ['public/adaptive.css','public/assets/audio/bacaan-latihan.mp3','public/index.html','public/style.css','public/assets/audio/bacaan-bantuan.mp3','public/reading.css','public/group.css','public/adventure.css','public/assets/audio/bacaan-melayu.mp3','public/assets/fonts/Andika-Regular.woff2','public/assets/fonts/Andika-Bold.woff2','public/assets/story.png','public/assets/dunia-fantasi.png','public/assets/kart-sprites.png','netlify/functions/classroom.mjs'])await access(p);
for(const name of source){const result=spawnSync(process.execPath,['--check',`public/${name}.js`],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);}
if(LEVELS.length!==4||LEVELS.some(l=>l.questions.length!==5))throw new Error('Empat dunia dengan lima misi diperlukan.');
if([PLACES,CLUES,TRANSFORMS,PASSPORT].some(a=>a.length!==4)||[CLUES,TRANSFORMS].some(a=>a.some(b=>b.length!==5)))throw new Error('Arahan dunia tidak lengkap.');
const questions=LEVELS.flatMap(l=>l.questions);
if(new Set(questions.map(q=>q.id)).size!==20)throw new Error('ID misi berulang.');
for(const q of [...questions,...PROVERBS]){if(!validChoice(q,q.answer))throw new Error('Jawapan tidak sah: '+q.id);if(q.type!=='sequence'&&q.options.some(o=>!o.why))throw new Error('Maklum balas tiada: '+q.id);}
if(questions.some(q=>grade(q,[q.answer])!==5)||PROVERBS.length!==5)throw new Error('Semak skor dan bonus.');
if(AUDIO_VOICE!=='ms-MY-YasminNeural')throw new Error('Rakaman mesti menggunakan suara Melayu Malaysia yang ditetapkan.');
const missing=audioTexts.filter(t=>!manifest[t]||!Number.isFinite(manifest[t].start)||!(manifest[t].duration>0));
if(missing.length)throw new Error('Rakaman belum tersedia: '+missing.join(' | '));
if(supportTexts().some(t=>!recordedKey(t))||VOCABULARY.flat().some(w=>!wordRecording(w).whole))throw new Error('Audio bantuan bacaan belum lengkap.');
if(Object.values(manifest).some(c=>c.asset&&!['support','main','adaptive'].includes(c.asset)))throw new Error('Sumber audio tidak dikenali.');
console.log(`Binaan 4.4.0 sedia: empat dunia, 20 misi, lima peribahasa, ${audioTexts.length} petikan Melayu dan fon Andika.`);
