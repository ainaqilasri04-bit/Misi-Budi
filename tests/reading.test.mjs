import test from 'node:test';
import assert from 'node:assert/strict';
import {LEVELS,plain} from '../public/data.js';
import {sentences,wordParts,VOCABULARY,wordRecording,recordedKey,supportTexts} from '../public/reading-data.js';
import manifest from '../public/audio-manifest.js';
import {observationsCSV} from '../public/observations.js';
test('Bacaan berfokus mengekalkan semua perkataan dan tanda baca 24 halaman',()=>{for(const l of LEVELS)for(const p of l.panels){assert.equal(sentences(p).join(' '),p);assert.equal(wordParts(p).join(''),p);assert(sentences(p).length>=2);}});
test('12 perkataan latihan mempunyai rakaman perkataan tersendiri',()=>{assert.equal(VOCABULARY.flat().length,12);for(const w of VOCABULARY.flat()){const clip=wordRecording(w);assert(manifest[clip.text]);assert.equal(clip.whole,true);assert(clip.text.toLowerCase().includes(plain(w)));if(clip.whole)assert.equal(recordedKey(w),clip.text);}});
test('CSV mengekalkan bukti, petikan dan baris baharu serta melindungi input formula',()=>{const csv=observationsCSV([{date:'2026-10-04',name:' =HYPERLINK("x")',place:'Kumpulan',reading:'Dengan bimbingan',understanding:'Boleh menerangkan',proverb:'Belum diperhatikan',help:['Audio Melayu'],evidence:'Menyebut "bakul".\nMenunjuk gambar.',next:'Ulang dua ayat.'}]);assert(csv.startsWith('\uFEFF'));assert(csv.includes("\"'=HYPERLINK(\"\"x\"\")\""));assert(csv.includes('Menyebut ""bakul"".\nMenunjuk gambar.'));});

test('Semua ayat, perkataan, kad idea dan arahan bantuan mempunyai rakaman Melayu',()=>{for(const text of supportTexts())assert(recordedKey(text),text);});
