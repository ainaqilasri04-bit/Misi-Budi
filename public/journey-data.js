import {icon} from './icons.js';
export const PLACES=[
 {name:'Lembah Cerita',symbol:icon('book'),focus:'Ba · Baca cerita',goal:'Kenali watak, tempat dan masalah dalam cerita.',celebrate:'Lembah Cerita terbuka!',tint:'#138d83',subtitle:'Sebuah cerita menanti di sebalik lembah.'},
 {name:'Lorong Bekalan',symbol:icon('bag'),focus:'Ca · Cari perbuatan watak',goal:'Bawa bekalan yang betul. Jejaki perbuatan Aina dan Ravi.',celebrate:'Bekalan sampai, jejak difahami!',tint:'#239378',subtitle:'Setiap tindakan menyimpan sebuah petunjuk.'},
 {name:'Jambatan Muafakat',symbol:icon('friends'),focus:'Ni · Nilai murni',goal:'Hubungkan kerjasama dengan bukti untuk membuka jambatan.',celebrate:'Jambatan Muafakat bersambung!',tint:'#65578f',subtitle:'Bukti yang tepat menyambungkan persahabatan.'},
 {name:'Karnival Budi',symbol:icon('fruit'),focus:'Ba + Ca + Ni',goal:'Jelaskan nilai dan pilih amalan yang boleh dilakukan sendiri.',celebrate:'Karnival Budi kembali berseri!',tint:'#ad7347',subtitle:'Bawa pulang nilai daripada pengembaraanmu.'}
];
export const CLUES=[['Kenali dua sahabat.','Cari tempat cerita.','Kumpulkan benda yang mengotorkan taman.','Padankan gambar dengan cerita.','Fahami tujuan gotong-royong.'],['Cari perbuatan Ravi.','Bawa barang yang Aina perlukan.','Cari frasa perbuatan.','Fahami perasaan Ravi.','Bina laluan mengikut urutan cerita.'],['Pilih nilai untuk jambatan.','Cari bukti kerjasama.','Kenali cara meminta maaf.','Pilih ajakan yang santun.','Lengkapkan alasan dengan bukti.'],['Lihat perubahan taman.','Padankan nilai dan perbuatan.','Susun peristiwa penutup.','Pilih cara bertanya dengan sopan.','Bawa amalan baik pulang.']];
export const TRANSFORMS=[['Nama watak difahami. Pintu pertama terbuka.','Tempat cerita dikenal pasti. Jejak kedua dibuka.','Benda yang mengotorkan taman dikenal pasti. Bukti disimpan.','Gambar dipadankan dengan ayat. Jejak seterusnya dibuka.','Tujuan gotong-royong difahami. Cap Lembah Cerita diperoleh.'],['Perbuatan Ravi dikenal pasti. Bukti pertama disimpan.','Plastik sampah dipilih. Bekalan dimuatkan ke dalam kereta.','Frasa perbuatan ditemukan. Pintu seterusnya terbuka.','Perasaan Ravi difahami. Kita boleh melihat sebabnya.','Peristiwa disusun. Laluan ke Jambatan Muafakat terbuka.'],['Nilai kerjasama ditemukan. Jambatan mula bersambung.','Bukti perbuatan dikenal pasti. Bahagian jambatan ditambah.','Permintaan maaf difahami. Bahagian jambatan ditambah.','Ajakan santun dipilih. Bahagian jambatan ditambah.','Nilai disertai alasan yang tepat. Jambatan lengkap!'],['Keadaan taman difahami. Hiasan pertama dinyalakan.','Nilai dan bukti sepadan. Hiasan kedua dinyalakan.','Urutan akhir disusun. Laluan karnival dibuka.','Cara bertanya dengan sopan dikenal pasti. Hiasan keempat dinyalakan.','Amalan baik dipilih. Pengembaraan BaCaNi selesai!']];
export const PASSPORT=[
 {baca:'Keluarga Aina dan Ravi membersihkan taman untuk Karnival Bandar Sihat.',cari:'Aina melihat botol kosong dan pembungkus makanan di atas rumput.',nilai:'Kita perlu memahami cerita sebelum menentukan nilai berdasarkan perbuatan watak.'},
 {baca:'Ravi menyangka dia bekerja seorang diri. Aina sebenarnya mengambil plastik sampah.',cari:'Ravi menyapu daun. Aina mengambil plastik sampah.',nilai:'Kita perlu memahami sebab sesuatu tindakan dan bertanya apabila keadaan belum jelas.'},
 {baca:'Aina menerangkan keadaan. Ravi meminta maaf. Mereka membahagikan tugas.',cari:'Mereka berbincang dan bersetuju membahagikan tugas.',nilai:'Kerjasama ditunjukkan melalui pembahagian tugas untuk menyiapkan kerja bersama-sama.'},
 {baca:'Taman kini bersih. Aina dan Ravi membasuh tangan sebelum makan.',cari:'Mereka mengumpulkan sampah dan membasuh tangan dengan sabun.',nilai:'Kerja bersama menunjukkan kerjasama. Membasuh tangan ialah amalan kebersihan diri.'}
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
