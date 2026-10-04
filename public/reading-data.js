import manifest from './audio-manifest.js';
import {LEVELS,plain} from './data.js';
// Pecahan visual membantu latihan. Audio menyebut perkataan penuh, bukan nama huruf.
export const VOCABULARY=[
 ['ba|kul','da|un','bu|nga'],
 ['pe|li|ta','kris|tal','te|ro|wong'],
 ['ja|ring','sam|pah','pe|nyu'],
 ['a|ra|han','bin|tang','ke|ju|jur|an']
];
export const READING_UI={
 garage:'Selamat datang ke garaj suku kata. Dengar perkataan. Lihat suku katanya. Tekan kad mengikut urutan untuk membina perkataan yang sama. Kamu boleh melihat contoh dan mencuba lagi.',
 ready:'Perkataan sudah lengkap. Dengar sekali lagi, kemudian baca bersama rakan atau guru. Apabila bersedia, cuba perkataan seterusnya.',
 retry:'Lihat contoh perkataan. Bandingkan suku kata satu demi satu. Kamu boleh membetulkan pilihan tanpa kehilangan markah.',
 focus:'Baca satu ayat dahulu. Tekan perkataan untuk mendengarnya. Kamu boleh mengulang ayat, membuka seluruh petikan atau pergi ke ayat seterusnya apabila bersedia.',
 rest:'Mari singgah sebentar. Kamu boleh duduk dengan selesa atau meregangkan jari perlahan-lahan jika selesa. Teruskan apabila kamu bersedia. Kamu juga boleh meminta bantuan guru.',
 cards:'Bincang dahulu. Pilih ruang jawapan, kemudian tekan kad untuk menambah perkataan atau permulaan ayat. Lengkapkan idea dengan kata-kata kamu. Pencatat boleh menaip jawapan lisan rakan.'
};
export const WRITING_CARDS={
 b1:{words:['rajin membantu','Ravi','mengutip daun','bakul','di dalam kelas'],meaning:['Peribahasa ini bermaksud'],evidence:['Perbuatan Ravi yang sesuai ialah'],example:['Di sekolah, kami membantu']},
 b3:{words:['berkongsi tugas','Aina dan Ravi','membersihkan saluran air','bersama-sama','tugas kelas'],meaning:['Peribahasa ini mengajar kami supaya'],evidence:['Mereka berkongsi tugas dengan'],example:['Semasa bertugas di kelas, kami']},
 b5:{words:['bersedia lebih awal','Aina','membawa pelita','sebelum masuk','beg sekolah'],meaning:['Kami perlu bersedia sebelum'],evidence:['Aina bersedia dengan'],example:['Sebelum pergi ke sekolah, saya']},
 b2:{words:['saling membantu','Aina','Ravi','jaring','memegang bakul'],meaning:['Peribahasa ini menunjukkan'],evidence:['Aina dan Ravi saling membantu apabila'],example:['Saya dan rakan saling membantu ketika']},
 b4:{words:['berbincang','bersetuju','arahan','berkongsi tugas','keputusan bersama'],meaning:['Kami mencapai persetujuan dengan'],evidence:['Selepas berbincang, Aina dan Ravi'],example:['Apabila membuat kerja kumpulan, kami']}
};
// Sentence endings include a closing quotation mark. Joining restores the full text.
export function sentences(text){return String(text).match(/[^.!?]+[.!?]+[”’"']*|[^.!?]+$/gu)?.map(s=>s.trim()).filter(Boolean)||[];}
export function wordParts(text){return String(text).split(/([\p{L}|]+(?:-[\p{L}|]+)*)/u).filter(Boolean);}
export function audioWord(word){return plain(word).toLocaleLowerCase('ms-MY');}
export function supportTexts(){const set=new Set(Object.values(READING_UI));for(const level of LEVELS)for(const panel of level.panels){sentences(panel).forEach(s=>set.add(plain(s)));wordParts(panel).filter(w=>/^[\p{L}|]/u.test(w)).forEach(w=>set.add(audioWord(w)));}VOCABULARY.flat().forEach(w=>set.add(plain(w)));for(const bank of Object.values(WRITING_CARDS))Object.values(bank).flat().forEach(t=>set.add(t));return [...set];}

// Reuse supplied recordings locally. Never substitute an English or device voice.
const keyForm=t=>plain(t).toLocaleLowerCase('ms-MY').replace(/[“”‘’".!?,]/g,'').replace(/\s+/g,' ').trim();
const recordedKeys=new Map(Object.keys(manifest).map(k=>[keyForm(k),k]));
export function recordedKey(text){return recordedKeys.get(keyForm(text))||'';}
export function wordRecording(word){const key=recordedKey(word);if(key)return {text:key,whole:true};const contexts={bakul:'Ravi mengutip daun. Aina memegang bakul.',bunga:'Bunga layu',pelita:'Aina memegang pelita. Ravi menyusun kristal sebagai penanda laluan. Mereka mengikutnya perlahan-lahan.',terowong:'Di Terowong Kristal',jaring:'Dengan jaring dari atas Budi',sampah:'Aina mengangkat sampah',penyu:'Seekor penyu kecil hendak ke laut. Namun, botol dan plastik menutup laluan di bawah jeti.',arahan:'Aina membaca arahan',bintang:'Di Stesen Bintang'};if(manifest[contexts[plain(word)]])return {text:contexts[plain(word)],whole:false};const pattern=new RegExp('(^|[^\\p{L}])'+plain(word)+'([^\\p{L}]|$)','iu'),text=Object.keys(manifest).filter(t=>pattern.test(t)).sort((a,b)=>a.length-b.length)[0];return {text:text||'',whole:false};}
