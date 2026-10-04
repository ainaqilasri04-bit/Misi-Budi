// Aktiviti pilihan untuk mengulang bacaan tanpa mengubah markah utama.
export const PLAY_UI={
 album:'Ini album kamu. Selesaikan lima misi dalam sesuatu dunia untuk mendapat pelekat. Kamu juga boleh mencuba bengkel ayat.',
 workshop:'Dengar ayat. Tekan kad mengikut susunan yang betul. Tekan Semak ayat apabila sudah bersedia. Kamu boleh menggunakan petunjuk dan mencuba semula.',
 correct:'Tahniah! Ayat kamu sudah lengkap. Pelekat bengkel ditambah ke dalam album kamu.',
 retry:'Susunan ini belum sepadan. Dengar ayat sekali lagi. Tekan Undur atau Mula semula untuk mengubah pilihan.',
 hint:'Lihat ayat contoh. Pilih kad mengikut urutan dari kiri ke kanan.',
 garage:'Pilih warna kereta kamu. Selesaikan dunia untuk membuka bendera baharu. Pilihan ini tidak mengubah markah pembelajaran.',
 explore:'Dunia ini telah dipulihkan. Kamu boleh memandu dan membaca semula enam halaman cerita. Gunakan butang Pilih hentian jika kamu mahu bantuan.'
};
export const WORKSHOPS=[
 {parts:['Ra|vi','me|ngu|tip','da|un.'],order:[2,0,1],sentence:'Ravi mengutip daun.',icon:'leaf',title:'Sahabat lembah'},
 {parts:['Ai|na','ber|hen|ti dan men|de|ngar','ka|ta-ka|ta|nya.'],order:[1,2,0],sentence:'Aina berhenti dan mendengar kata-katanya.',icon:'crystal',title:'Sahabat terowong'},
 {parts:['Ai|na dan Ra|vi','mem|ba|suh ta|ngan','se|be|lum ma|kan.'],order:[2,1,0],sentence:'Aina dan Ravi membasuh tangan sebelum makan.',icon:'wave',title:'Sahabat teluk'},
 {parts:['Ra|vi','me|nga|ku','ter|te|kan suis.'],order:[1,0,2],sentence:'Ravi mengaku tertekan suis.',icon:'star',title:'Sahabat angkasa'}
];
export const FLAGS=[{id:'none',name:'Tanpa bendera',world:-1},{id:'leaf',name:'Daun pelangi',world:0},{id:'crystal',name:'Kristal cahaya',world:1},{id:'wave',name:'Ombak biru',world:2},{id:'star',name:'Bintang orbit',world:3}];
export function stickerArt(kind,locked=false){const color=locked?'#c4ccbd':({leaf:'#88bd76',crystal:'#a793ce',wave:'#78c8d1',star:'#f0c56f'})[kind]||'#88bd76';const shapes={leaf:'<path d="M35 104Q-6 32 111 22Q116 115 35 104Z" fill="#78b886"/><path d="M27 118 92 45M42 96 43 65M60 78 83 80" stroke="#f5f8d8" stroke-width="6" fill="none" stroke-linecap="round"/>',crystal:'<path d="m34 105-7-52 36-38 43 36-4 53-36 22Z" fill="#bdaced"/><path d="m63 15 4 111 39-75M27 53l40 24 39-26" fill="none" stroke="#f0eafa" stroke-width="5"/>',wave:'<path d="M19 86Q21 32 71 30Q114 30 117 70Q93 40 79 66Q73 81 88 91Q106 103 123 83Q125 120 76 122Q24 122 19 86Z" fill="#6ac4cc"/><path d="M29 82Q40 53 64 50" fill="none" stroke="#eefaf0" stroke-width="7" stroke-linecap="round"/>',star:'<path d="m70 14 17 34 38 6-28 27 7 39-34-18-35 18 7-39-28-27 38-6Z" fill="#f0c56f" stroke="#fff0bb" stroke-width="5"/>'};return `<svg class="sticker-art ${locked?'sticker-locked':''}" viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="69" fill="#fffcf0" stroke="${color}" stroke-width="6" stroke-dasharray="3 5"/><g transform="translate(5 4)">${shapes[kind]||shapes.star}</g>${locked?'<circle cx="75" cy="79" r="28" fill="#e9ecdf"/><path d="M62 71V62a13 13 0 0 1 26 0v9M59 71h32v27H59Z" fill="#8b9b8b"/>':''}</svg>`;}
