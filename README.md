# Misi Budi 3.0.3 — Dunia BaCaNi

Permainan pengembaraan sisi Bahasa Melayu Tahun 3: **Ba — Baca cerita; Ca — Cari perbuatan watak; Ni — Nilai murni.** Watak memandu kereta mini dalam dunia fantasi asli. Murid membaca, mendengar, memilih bukti melalui kereta dan membuka laluan dengan pemahaman. Tiada perlumbaan, had masa, nyawa atau penalti kemahiran motor.

## Cuba permainan

1. Ekstrak ZIP sepenuhnya.
2. Buka `PANDUAN.html`, kemudian tekan **Cuba pengembaraan**. Atau buka `public/PRATONTON.html` dalam Chrome atau Edge.
3. Isi nama panggilan. Kosongkan kod kelas untuk latihan individu.
4. Pilih Lembah Cerita. Gunakan anak panah kiri/kanan, butang sentuh, atau **Bantu ke petunjuk**.

Fail `Misi-Budi-Dunia-BaCaNi.html` yang diberikan berasingan ialah versi satu fail: gambar, fon dan rakaman sudah terbina di dalamnya. Muat turun dan buka terus tanpa mengekstrak folder. Ia untuk latihan individu, bukan muat naik ke GitHub. Kedua-dua pratonton menyekat mod kelas dengan penerangan yang jelas. Mod kelas berfungsi pada laman Netlify yang diterbitkan.

`public/PRATONTON.html` dalam ZIP menggunakan aset di folder bersebelahan: jangan memindahkannya keluar daripada `public`. Laman produksi menggunakan `public/index.html`.

## Kawalan dan pembelajaran

| Kawalan | Tindakan |
| --- | --- |
| Anak panah kiri / kanan, A / D | Gerakkan kereta |
| Ruang / anak panah atas / W | Lompat; pilihan sahaja, tidak wajib untuk lulus |
| E / butang Pilih | Pilih petunjuk berhampiran kereta |
| Kad jawapan | Pilihan alternatif yang setara dengan memandu |
| Bantu ke petunjuk | Pandu automatik ke hentian |
| Terus ke hentian | Sampai tanpa perlu mengawal kereta |
| Dengar / Henti suara | Main semula / hentikan bacaan |

Untuk menggunakan papan kekunci dalam misi jawapan, klik kawasan permainan dahulu atau gunakan Tab untuk memfokuskannya. Fokus tidak dirampas semasa murid membaca kad atau menggunakan menu.

Empat dunia mengandungi lima misi setiap satu:

- **Lembah Cerita:** kenali watak, tempat, benda yang mengotorkan taman dan tujuan gotong-royong. Selepas bukti sampah dikenal pasti, hiasan taman berubah kepada bunga.
- **Lorong Bekalan:** cari perbuatan Ravi, pilih plastik sampah untuk Aina, fahami perasaan watak dan susun peristiwa. Bekalan ditunjukkan bersama kereta selepas pilihan yang tepat.
- **Jambatan Muafakat:** kaitkan kerjasama dengan perbuatan dan alasan; kemajuan misi menambah bahagian jambatan.
- **Karnival Budi:** padankan nilai dengan bukti, susun penutup dan pilih amalan kebersihan. Lampu karnival menyala mengikut kemajuan.

Pilihan A/B/C wujud sebagai petunjuk di dalam dunia. Ketika kereta menghampiri pilihan, teks penuh dan butang bacaan muncul di bawahnya. Pilihan yang sama tersedia sebagai kad besar. Pergerakan sahaja tidak memberikan mata; misi hanya selesai apabila jawapan sepadan dengan cerita. Maklum balas menerangkan sebab dan menunjukkan bukti. Pagar dunia seterusnya kekal terkunci sehingga lima misi selesai.

Selepas setiap dunia, **Pasport Budi** merumuskan cerita, perbuatan dan nilai. Lima kad peribahasa, empat refleksi dan dua latihan susulan melengkapkan pembelajaran.

## Ciri inklusif dan suara

- Fon **Andika 7.000** dengan huruf **a** dan **g** satu tingkat disertakan setempat. Seluruh antara muka menggunakannya.
- **287 petikan audio Bahasa Melayu Malaysia**, suara sintetik Microsoft Yasmin (`ms-MY-YasminNeural`). Rakaman merangkumi cerita, soalan, pilihan, maklum balas, misi, panduan dan rumusan. Rakaman bukan suara manusia.
- Hanya rakaman `ms-MY-YasminNeural` yang disediakan digunakan. Tiada pertukaran kepada suara peranti, termasuk apabila rakaman gagal. Paparan meminta murid mencuba semula atau membaca teks bersama guru. Bacaan tidak dimainkan secara automatik.
- Saiz bacaan 24, 28 atau 32 px; jarak baris; latar bacaan krim/biru/putih; suku kata dua warna; kelajuan suara; henti/ulang; pengurangan animasi.
- Kereta berhenti di hentian cerita. Misi jawapan tidak bergerak sendiri. Tiada tugasan yang memerlukan lompatan, refleks pantas, seretan tepat, atau pendengaran sahaja.
- Guru boleh menyesuaikan bantuan mengikut murid. Fon dan reka bentuk ini tidak dengan sendirinya menjamin peningkatan bacaan semua murid disleksia.

## GitHub dan Netlify

Buka **PANDUAN.html** untuk arahan berperingkat. Untuk laman berasingan, gunakan repository baharu. Untuk mengekalkan pautan sedia ada, kemas kini repository yang disambungkan kepada laman itu.

Muat naik **kandungan folder projek**, bukan ZIP atau folder pembungkus, ke akar repository. Struktur yang betul ialah `public/app.js`, `netlify/functions/classroom.mjs`, `package.json` dan `netlify.toml` pada aras yang disediakan.

- Build command: `npm run build`
- Publish directory: `public`
- Functions: `netlify/functions`
- Node: 22

Setiap fail dalam pakej GitHub di bawah 25 MiB dan jumlah fail kurang daripada 100. Fail satu klik berasingan tidak perlu dimasukkan ke repository. Jika repository sudah bersambung dan auto publishing aktif, commit pada cabang produksi mencetuskan deploy. Tunggu status Published, kemudian muat semula laman.

## Mod kelas versi baharu

Versi ini menggunakan simpanan berasingan: `lambobudi-dunia-v3`. **Cipta sesi kelas baharu; kod sesi versi lama tidak digunakan di sini.** Rekod lama tidak dipadam. Kemajuan individu versi ini juga disimpan berasingan daripada versi lama.

Tetapkan `KUNCI_GURU` di Netlify, sekurang-kurangnya 12 aksara, untuk Functions. Jika menggunakan laman sedia ada, kunci yang telah ditetapkan boleh dikekalkan. Jangan masukkan kunci sebenar dalam kod atau GitHub. Deploy semula selepas menukar pemboleh ubah persekitaran.

Guru boleh mencipta sesi, melihat skor/kemahiran/refleksi, menutup atau membuka sesi dan mengeksport CSV. Murid memerlukan kod kelas sahaja. Skor utama: tepat pada cubaan pertama = 5, tepat selepas bimbingan = 3, jumlah /100. Penggunaan audio dan bantuan tidak mengurangkan skor. Peserta seri berkongsi kedudukan. Skor bukan diagnosis atau penetapan automatik Tahap Penguasaan PBD.

## Pembangunan

```sh
npm install
npm run dev
npm test
npm run build
node scripts/build-preview.mjs
node scripts/build-single.mjs
```

Pelayan setempat menggunakan `http://127.0.0.1:4173`. Kelas setempat ialah simulasi dalam memori, dengan kunci ujian `guru-ujian-tempatan`. Data simulasi hilang apabila pelayan ditutup. Ini tidak menetapkan kunci Netlify sebenar.

Ujian pembangunan meliputi 20 misi lengkap, cubaan semula, bonus, refleksi, pengukuhan, dua peserta kelas, skor pelayan, pergerakan/lompatan, pemilihan jawapan menggunakan kereta, pandu automatik, halangan kemajuan, simpan/sambung, saiz fon besar pada 320–1440 px, audio rakaman, henti suara dan penolakan semua suara gantian peranti. Versi satu fail turut diuji tanpa memuatkan aset rangkaian. Sesi Netlify sebenar perlu diuji selepas deploy oleh pemilik laman.

## Sumber dan aset

- Andika, SIL Global: https://software.sil.org/andika/design/ dan https://software.sil.org/andika/download/ . Lesen SIL Open Font License: `public/assets/fonts/OFL.txt`.
- Bahasa suara Microsoft: https://learn.microsoft.com/azure/ai-services/speech-service/language-support . Petikan dijana menggunakan `ms-MY-YasminNeural`, kadar -10%, melalui edge-tts. Audio siap disertakan; tiada kunci API diperlukan untuk memainkannya.
- Panduan paparan: https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide
- DSKP BM Tahun 3, SK 2.3 / SP 2.3.1(iii), cerita: https://bukuteksdigital.my/wp-content/uploads/2020/06/DSKP-KSSR-SEMAKAN-2017-BAHASA-MELAYU-TAHUN-3.pdf
- Buku teks rujukan: https://online.fliphtml5.com/bhyii/nixx/#p=1
- Lima pautan PRPM khusus tersedia pada kad peribahasa dan `public/data.js`.
- GitHub: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Netlify: https://docs.netlify.com/build/git-workflows/overview/

Latar fantasi dan watak berkereta dijana khusus untuk versi ini. Ilustrasi cerita Aina/Ravi dikekalkan daripada projek asal. Platform, jambatan, pagar, watak penduduk, kawalan, ikon dan perubahan dunia dibina dengan Canvas/SVG. Watak dan aset permainan ini asli; imej rujukan Mario digunakan sebagai rujukan arah pengembaraan sisi, bukan disalin sebagai aset permainan.

## Semakan sebelum penerbitan — versi 3.0.2

- Arahan, mesej kejayaan dan rakaman untuk misi `l4q4` diselaraskan dengan tindakan bertanya secara sopan.
- Jeda tidak boleh dibatalkan secara tidak sengaja dengan menekan anak panah. Menutup menu mengekalkan keadaan jeda sebelumnya. Butang Sambung turut tersedia dalam misi jawapan.
- Mendengar bacaan menjeda kereta; tekan Sambung untuk memandu semula.
- Memilih peristiwa melalui kereta mengekalkan fokus papan kekunci dan kedudukan halaman. Tiga bahagian jambatan hanya ditandai betul selepas urutan disahkan.
- Maklum balas dibawa ke paparan dan mempunyai bacaan bukti. Menutup tetapan dengan Escape turut menerapkan pilihan suku kata.
- Kod kelas yang disembunyikan tidak menghalang latihan individu. Kad ganjaran mengekalkan warna kereta yang dipilih.
- Binaan menyemak liputan rakaman dan sintaks JavaScript; kebergantungan terkunci serta titik masuk fungsi Netlify disemak secara setempat.

Gunakan fail versi 3.0.3 ini untuk menggantikan folder yang diekstrak daripada pakej terdahulu. Akaun GitHub dan Netlify boleh berbeza daripada akaun ChatGPT. Tiada kunci, token atau identiti akaun pembangun diperlukan dalam kod ini. KUNCI_GURU ditetapkan sendiri dalam akaun Netlify pemilik laman.

## Bantuan suara — versi 3.0.2

- Panduan bermain dipecahkan kepada sembilan arahan pendek. Setiap panduan mempunyai teks dan butang Dengar sendiri.
- Suara Melayu Malaysia yang sama digunakan pada semua peranti. Semua teks audio semasa disemak dalam binaan.
- Bacaan boleh diulang atau dihentikan. Tiga pilihan kelajuan mengekalkan nada suara.
- Kereta dijeda ketika mendengar. Murid memilih Sambung apabila bersedia.
- Suara ialah sintetik; guru boleh mencuba contoh bacaan sebelum aktiviti bersama murid.

## Semakan akhir — versi 3.0.3

- Nama permainan, tajuk halaman dan sambutan suara: Misi Budi.
- Cara bermain kekal kelihatan pada telefon. Butang Henti suara dan Tutup tersedia di bahagian atas setiap dialog.
- Pandu automatik berfungsi sebaik tetapan diaktifkan semasa perjalanan dan selepas Sambung. Jeda manual dikekalkan.
- Pilihan berdekatan boleh dipilih selepas mendengar, ketika kereta masih dijeda. Pergerakan kekal berhenti sehingga murid memilih Sambung.
- Saiz fon dan jarak baris turut digunakan pada maklum balas, bukti, refleksi dan catatan pasport. Pemisahan suku kata “membiarkan” diselaraskan.
- Ujian setempat meliputi semua 20 misi, lima bonus, empat refleksi, dua latihan susulan, simpan/sambung, papan kekunci, sentuhan, mod individu luar talian dan simulasi kelas dua peranti.
- Pemeriksaan automatik akses pada halaman mula, tetapan, cerita, soalan, maklum balas, dialog cerita, bantuan dan ruang guru tidak menemukan pelanggaran bagi peraturan yang diperiksa. Ini bukan pengesahan keseluruhan WCAG atau penilaian oleh murid sebenar.
- Audio: 287 petikan tetap ms-MY, tiga kelajuan, ulang/henti, hujung petikan, henti apabila tab disembunyikan serta pemulihan selepas ralat diuji. Pengujian teknikal tidak menggantikan semakan sebutan oleh guru.
- Penerbitan dan sambungan kelas pada akaun Netlify pemilik perlu disemak selepas deploy. Tiada penerbitan dilakukan dalam semakan ini.

Rujukan reka bentuk: [W3C — cognitive accessibility](https://www.w3.org/WAI/people-use-web/abilities-barriers/cognitive/), [W3C — clear controls](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p05-clear-controls/), [SIL — reka bentuk Andika](https://software.sil.org/andika/design/).
