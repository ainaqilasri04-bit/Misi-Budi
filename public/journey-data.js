import {icon} from './icons.js';
export const PLACES=[
  {
    "name": "Lembah Pelangi",
    "theme": "forest",
    "focus": "Kerjasama",
    "goal": "Pulihkan aliran air. Cari bukti dua sahabat bekerjasama.",
    "celebrate": "Bunga mekar. Helaian pertama ditemukan!",
    "tint": "#258468",
    "subtitle": "Saluran tersumbat. Bolehkah dua sahabat menghidupkan lembah?",
    "mode": "Kereta darat",
    "souvenir": "Daun pelangi"
  },
  {
    "name": "Terowong Kristal",
    "theme": "cave",
    "focus": "Keprihatinan",
    "goal": "Nyalakan kristal. Fahami perasaan dan tindakan sahabat.",
    "celebrate": "Terowong bercahaya. Helaian kedua ditemukan!",
    "tint": "#8663a8",
    "subtitle": "Sebuah suara kecil kedengaran dalam gelap. Berhenti dan dengar.",
    "mode": "Kereta berlampu",
    "souvenir": "Kristal cahaya"
  },
  {
    "name": "Teluk Penyu",
    "theme": "water",
    "focus": "Tanggungjawab",
    "goal": "Buka laluan penyu. Hubungkan kebersihan dengan tanggungjawab.",
    "celebrate": "Penyu kembali ke laut. Helaian ketiga ditemukan!",
    "tint": "#187b9b",
    "subtitle": "Pelampung dibuka. Mari membantu dari kereta terapung kita.",
    "mode": "Kereta terapung",
    "souvenir": "Cangkerang biru"
  },
  {
    "name": "Orbit Bintang",
    "theme": "space",
    "focus": "Kejujuran",
    "goal": "Pulihkan panduan stesen. Terangkan mengapa berkata benar membantu.",
    "celebrate": "Buku Budi lengkap. Nilai dibawa pulang!",
    "tint": "#5258a4",
    "subtitle": "Lompatan lebih ringan di angkasa. Apakah yang berlaku kepada lampu?",
    "mode": "Kereta angkasa",
    "souvenir": "Bintang orbit"
  }
];
PLACES.forEach((p,i)=>p.symbol=icon(['park','sun','hands','flag'][i]));
export const CLUES=[
  [
    "Kenali dua sahabat.",
    "Cari punca bunga layu.",
    "Cari perbuatan Ravi.",
    "Kenal pasti nilai kerjasama.",
    "Pilih bukti kerja bersama."
  ],
  [
    "Fahami masalah terowong.",
    "Lihat tindakan Aina.",
    "Kenal pasti keprihatinan.",
    "Fahami perasaan Ravi.",
    "Susun peristiwa terowong."
  ],
  [
    "Cari penghalang laluan penyu.",
    "Cari cara Aina membantu.",
    "Kenal pasti tanggungjawab.",
    "Pilih bukti menjaga teluk.",
    "Cari amalan sebelum makan."
  ],
  [
    "Kenali tempat Nuri.",
    "Padankan kejujuran dengan bukti.",
    "Susun peristiwa di stesen.",
    "Pilih tindakan yang jujur.",
    "Jelaskan sebab kejujuran membantu."
  ]
];
export const TRANSFORMS=[
  [
    "Aliran air 1 dipulihkan. Bunga di laluan mula mekar.",
    "Aliran air 2 dipulihkan. Bunga di laluan mula mekar.",
    "Aliran air 3 dipulihkan. Bunga di laluan mula mekar.",
    "Aliran air 4 dipulihkan. Bunga di laluan mula mekar.",
    "Aliran air 5 dipulihkan. Bunga di laluan mula mekar."
  ],
  [
    "Kristal 1 bercahaya. Laluan terowong semakin jelas.",
    "Kristal 2 bercahaya. Laluan terowong semakin jelas.",
    "Kristal 3 bercahaya. Laluan terowong semakin jelas.",
    "Kristal 4 bercahaya. Laluan terowong semakin jelas.",
    "Kristal 5 bercahaya. Laluan terowong semakin jelas."
  ],
  [
    "Laluan air 1 dibersihkan. Penyu semakin dekat dengan laut.",
    "Laluan air 2 dibersihkan. Penyu semakin dekat dengan laut.",
    "Laluan air 3 dibersihkan. Penyu semakin dekat dengan laut.",
    "Laluan air 4 dibersihkan. Penyu semakin dekat dengan laut.",
    "Laluan air 5 dibersihkan. Penyu semakin dekat dengan laut."
  ],
  [
    "Lampu orbit 1 menyala. Panduan stesen kembali pulih.",
    "Lampu orbit 2 menyala. Panduan stesen kembali pulih.",
    "Lampu orbit 3 menyala. Panduan stesen kembali pulih.",
    "Lampu orbit 4 menyala. Panduan stesen kembali pulih.",
    "Lampu orbit 5 menyala. Panduan stesen kembali pulih."
  ]
];
export const PASSPORT=[
  {
    "baca": "Daun kering menyumbat saluran air dan bunga menjadi layu.",
    "cari": "Ravi mengutip daun. Aina memegang bakul.",
    "nilai": "Mereka menunjukkan kerjasama kerana berkongsi tugas untuk memulihkan aliran air."
  },
  {
    "baca": "Ravi berasa takut di dalam terowong yang gelap.",
    "cari": "Aina berhenti, mendengar dan menemani Ravi.",
    "nilai": "Aina menunjukkan keprihatinan kerana mengambil berat tentang perasaan sahabat."
  },
  {
    "baca": "Botol dan plastik menghalang laluan penyu di teluk.",
    "cari": "Aina dan Ravi mengutip sampah serta membawanya ke pusat kitar semula.",
    "nilai": "Mereka menunjukkan tanggungjawab kerana menjaga kebersihan tempat bersama."
  },
  {
    "baca": "Ravi tertekan suis dan lampu panduan padam.",
    "cari": "Ravi mengaku kepada Nuri. Mereka mengikuti panduan untuk memulihkan lampu.",
    "nilai": "Ravi menunjukkan kejujuran kerana berkata benar tentang kesalahannya."
  }
];
export const WORLD_UI={intro:'Gerakkan kereta ke kanan. Singgah di buku untuk membaca cerita.',drive:'Tekan anak panah kiri atau kanan untuk bergerak. Tekan butang Lompat jika mahu melompat. Melompat tidak wajib.',collect:'Pandu ke pilihan kamu. Tekan butang Pilih. Kamu juga boleh menekan kad jawapan di bawah.',sequence:'Pilih peristiwa satu demi satu mengikut cerita untuk membina laluan.',welcome:'Selamat datang ke Misi Budi. Jelajah dunia cerita. Baca cerita, cari perbuatan watak, dan kenal pasti nilai murni.'};

export const HELP_STEPS=[
 {title:'Mulakan pengembaraan',text:'Isi nama panggilan kamu. Pilih sebuah kereta. Tekan Mulakan pengembaraan.'},
 {title:'Pandu ke hentian cerita',text:WORLD_UI.drive},
 {title:'Gunakan bantuan',text:'Tekan Bantu ke petunjuk untuk bantuan memandu. Tekan Terus ke hentian jika mahu terus membaca.'},
 {title:'Baca dan cari bukti',text:'Baca cerita. Cari perbuatan watak. Kenal pasti nilai murni. Pilih bukti daripada cerita.'},
 {title:'Pilih jawapan',text:WORLD_UI.collect},
 {title:'Dengar mengikut keselesaan',text:'Tekan Dengar untuk mendengar bacaan. Tekan sekali lagi untuk mengulang. Kamu boleh memilih kelajuan dalam Bantuan bacaan.'},
 {title:'Berhenti dan sambung',text:'Kereta berhenti semasa bacaan dimainkan. Tekan Henti suara untuk menghentikan bacaan. Tekan Sambung apabila kamu sedia bergerak.'},
 {title:'Cuba semula',text:'Jika jawapan belum tepat, dengar penerangannya. Baca semula cerita. Cuba lagi apabila kamu sudah bersedia. Tiada had masa.'},
 {title:'Bantuan sentiasa tersedia',text:'Kamu boleh menggunakan bantuan dan mengulang bacaan. Bantuan tidak mengurangkan mata.'}
];

export const TEACHER_HELP={login:'Ruang guru membantu cikgu mengurus kelas dan melihat kemajuan murid. Masukkan kata laluan guru untuk bermula.',create:'Langkah satu. Tulis nama kelas, kemudian tekan Cipta kelas. Sistem akan memberikan kod kelas.',share:'Langkah dua. Murid membuka pautan permainan, mengisi nama panggilan dan memasukkan kod kelas. Kata laluan guru tidak diberikan kepada murid.',watch:'Langkah tiga. Tekan Kemas kini untuk melihat kemajuan. Bantu murid berdasarkan kemahiran yang masih perlu dilatih.'};
