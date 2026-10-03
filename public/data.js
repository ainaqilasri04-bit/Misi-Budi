// Kandungan asli, disusun berdasarkan BM SK Tahun 3, SK 2.3 / SP 2.3.1(iii).
// Tanda | ialah sempadan suku kata untuk paparan pilihan. Teks biasa/audio membuang tanda ini.
export const plain = s => String(s ?? '').replaceAll('|', '');
const o = (text, why, icon='') => ({text, why, icon});
const q = (id, text, options, answer, evidence, skill, type='choice') => ({id,text,options,answer,evidence,skill,type});
export const LEVELS = [
  { id:1, title:'Taman Ceria', tag:'Ba · Baca cerita', place:'Taman Ceria', color:'#ea603c', goal:'Kenali watak, tempat dan keadaan taman.', image:0,
    panels:[
      'Pa|da pa|gi Sab|tu, ke|lu|ar|ga Ai|na dan Ra|vi mem|ber|sih|kan ta|man.',
      'Me|re|ka mem|bu|at per|se|di|a|an un|tuk Kar|ni|val Ban|dar Si|hat.',
      'Ai|na ter|nam|pak bo|tol ko|song dan pem|bung|kus ma|ka|nan di a|tas rum|put.',
      '“Ma|ri ki|ta ber|sih|kan ta|man i|ni,” ka|ta i|bu.'
    ],
    questions:[
      q('l1q1','Si|a|pa|kah wa|tak ka|nak-ka|nak da|lam ce|ri|ta?',[
        o('Ai|na dan Ra|vi','Betul! Nama Aina dan Ravi disebut pada awal cerita.','friends'),
        o('I|bu dan ne|nek','Ibu ialah orang dewasa. Nenek tidak disebut dalam cerita. Cari nama dua kanak-kanak.','family'),
        o('Dok|tor dan ju|ru|ra|wat','Doktor dan jururawat tidak muncul dalam cerita. Lihat ayat pertama.','clinic')],0,'Keluarga Aina dan Ravi membersihkan taman.','baca'),
      q('l1q2','Di ma|na|kah me|re|ka mem|ber|sih|kan ka|wa|san?',[
        o('Di da|pur','Cerita tidak berlaku di dapur. Perhatikan perkataan selepas “membersihkan”.','home'),
        o('Di ta|man','Ya! Keluarga mereka membersihkan taman.','park'),
        o('Di bi|lik ti|dur','Bilik tidur tidak disebut. Mereka berada di kawasan luar yang berumput.','bed')],1,'Keluarga Aina dan Ravi membersihkan taman.','baca'),
      q('l1q3','A|pa|kah yang Ai|na li|hat di a|tas rum|put?',[
        o('Bu|ku dan pen|sel','Buku dan pensel tidak disebut. Cari benda yang mengotorkan taman.','book'),
        o('Bu|ah da|lam pi|ring','Buah belum muncul dalam bahagian cerita ini. Lihat ayat ketiga.','fruit'),
        o('Bo|tol ko|song dan pem|bung|kus ma|ka|nan','Betul! Dua benda ini dinyatakan dalam cerita.','litter')],2,'Aina ternampak botol kosong dan pembungkus makanan di atas rumput.','baca'),
      q('l1q4','Pa|dan|kan a|yat de|ngan gam|bar: “Ta|man i|tu ko|tor.”',[
        o('Sam|pah di a|tas rum|put','Ya! Sampah di atas rumput menunjukkan taman yang kotor.','litter'),
        o('Ta|man yang ber|sih','Gambar ini menunjukkan keadaan bersih. Cari gambar yang masih mempunyai sampah.','park')],0,'Botol kosong dan pembungkus makanan berada di atas rumput.','baca','picture'),
      q('l1q5','Me|nga|pa|kah me|re|ka mem|ber|sih|kan ta|man?',[
        o('Un|tuk ber|se|dia meng|ha|da|pi u|ji|an','Ujian tidak disebut dalam cerita. Cari nama acara dalam ayat kedua.','book'),
        o('Un|tuk per|se|di|a|an kar|ni|val','Betul! Mereka membuat persediaan untuk Karnival Bandar Sihat.','flag'),
        o('Un|tuk mem|be|li ke|re|ta','Membeli kereta tidak disebut dalam cerita. Kereta ialah kenderaan permainan kita.','car')],1,'Mereka membuat persediaan untuk Karnival Bandar Sihat.','baca')
    ]
  },
  { id:2, title:'Jejak Perbuatan', tag:'Ca · Cari perbuatan', place:'Jambatan Hijau', color:'#168d8b', goal:'Cari tindakan watak dan susunan peristiwa.', image:1,
    panels:[
      'Ra|vi mu|la me|nya|pu da|un. Ai|na per|gi meng|am|bil plas|tik sam|pah.',
      'Ra|vi ti|dak ta|hu ke ma|na Ai|na per|gi. Di|a be|ra|sa ke|ce|wa.',
      '“Me|nga|pa sa|ya mem|bu|at ker|ja se|o|rang di|ri?” ka|ta|nya.'
    ],
    questions:[
      q('l2q1','A|pa|kah yang di|la|ku|kan o|leh Ra|vi?',[
        o('Me|nya|pu da|un','Betul! Ravi mula menyapu daun.','sweep'),
        o('Me|lu|kis ke|re|ta','Ravi tidak melukis dalam cerita. Cari perbuatannya pada ayat pertama.','car'),
        o('Mem|ba|ca bu|ku','Buku tidak disebut dalam bahagian ini. Ravi sedang membersihkan taman.','book')],0,'Ravi mula menyapu daun.','perbuatan'),
      q('l2q2','A|pa|kah yang hen|dak di|am|bil o|leh Ai|na?',[
        o('Bo|la','Bola tidak disebut. Aina mengambil sesuatu untuk mengumpulkan sampah.','ball'),
        o('Plas|tik sam|pah','Ya! Aina pergi mengambil plastik sampah.','bag'),
        o('Pa|yung','Payung tidak disebut. Baca semula ayat tentang Aina.','umbrella')],1,'Aina pergi mengambil plastik sampah.','perbuatan'),
      q('l2q3','Pi|lih fra|sa yang me|nun|juk|kan per|bu|a|tan Ra|vi.',[
        o('Pa|gi Sab|tu','Pagi Sabtu memberitahu masa, bukan tindakan Ravi.','sun'),
        o('Ta|man Ce|ria','Taman Ceria ialah nama tempat. Cari perkara yang Ravi lakukan.','park'),
        o('Me|nya|pu da|un','Betul! “Menyapu” menerangkan tindakan Ravi.','sweep')],2,'Ravi mula menyapu daun.','perbuatan'),
      q('l2q4','Me|nga|pa|kah Ra|vi be|ra|sa ke|ce|wa?',[
        o('Di|a me|nyang|ka di|ri|nya be|ker|ja se|o|rang','Ya. Ravi belum tahu Aina pergi mengambil plastik sampah.','think'),
        o('Di|a ke|hi|la|ngan bu|ku','Kehilangan buku tidak berlaku dalam cerita. Baca kata-kata Ravi.','book'),
        o('Di|a hen|dak ti|dur','Cerita tidak menyatakan Ravi mengantuk. Dia mempersoalkan sebab bekerja seorang diri.','bed')],0,'“Mengapa saya membuat kerja seorang diri?” katanya.','alasan'),
      q('l2q5','Su|sun pe|ris|ti|wa me|ngi|kut ce|ri|ta.',[
        o('Ra|vi be|ra|sa ke|ce|wa.'),o('Ai|na per|gi meng|am|bil plas|tik sam|pah.'),o('Ra|vi mu|la me|nya|pu da|un.')],[2,1,0],'Ravi menyapu dahulu. Aina pergi mengambil plastik. Kemudian Ravi berasa kecewa.','perbuatan','sequence')
    ]
  },
  { id:3, title:'Bandar Nilai', tag:'Ni · Nilai murni', place:'Dataran Muafakat', color:'#6470ca', goal:'Padankan nilai dengan bukti perbuatan.', image:2,
    panels:[
      'Ai|na kem|ba|li mem|ba|wa plas|tik sam|pah.',
      '“Sa|ya meng|am|bil plas|tik un|tuk ki|ta,” je|las Ai|na.',
      'Ra|vi pun me|ma|ha|mi ke|a|da|an i|tu. “Ma|af, Ai|na. Sa|ya sang|ka ka|mu ti|dak ma|hu mem|ban|tu,” ka|ta|nya.',
      'Me|re|ka ber|se|tu|ju un|tuk mem|ba|ha|gi|kan tu|gas.'
    ],
    questions:[
      q('l3q1','Tu|gas di|ba|ha|gi un|tuk di|si|ap|kan ber|sa|ma. A|pa|kah ni|lai|nya?',[
        o('Ke|be|ra|ni|an','Cerita tidak menekankan tindakan menghadapi rasa takut. Perhatikan tujuan membahagikan tugas.','shield'),
        o('Ker|ja|sa|ma','Ya! Mereka membahagikan tugas untuk menyelesaikan kerja bersama-sama.','friends'),
        o('Ke|ju|ju|ran','Kejujuran berkaitan berkata benar. Bukti dalam soalan ini ialah pembahagian kerja bersama.','heart')],1,'Mereka bersetuju untuk membahagikan tugas.','nilai'),
      q('l3q2','A|pa|kah buk|ti ker|ja|sa|ma da|lam ba|ha|gi|an i|ni?',[
        o('Me|re|ka ber|se|tu|ju mem|ba|ha|gi|kan tu|gas.','Betul! Pembahagian tugas membantu mereka bekerja bersama-sama.','friends'),
        o('Ra|vi me|nyang|ka di|ri|nya be|ker|ja se|o|rang.','Ini menunjukkan salah faham sebelum mereka berbincang. Cari tindakan selepas salah faham diselesaikan.','think'),
        o('Ai|na me|li|hat rum|put.','Melihat rumput sahaja belum menunjukkan kerja bersama. Cari keputusan kedua-dua watak.','park')],0,'Mereka bersetuju untuk membahagikan tugas.','alasan'),
      q('l3q3','A|pa|kah yang Ra|vi la|ku|kan se|le|pas me|ma|ha|mi ke|a|da|an?',[
        o('Me|ning|gal|kan ta|man','Ravi tidak meninggalkan taman. Perhatikan kata-katanya kepada Aina.','park'),
        o('Me|nyem|bu|nyi|kan pe|nya|pu','Menyembunyikan penyapu tidak dinyatakan dalam cerita.','sweep'),
        o('Me|min|ta ma|af ke|pa|da Ai|na','Ya! Ravi mengakui sangkaannya melalui permintaan maaf.','heart')],2,'“Maaf, Aina. Saya sangka kamu tidak mahu membantu.”','perbuatan'),
      q('l3q4','Pi|lih a|yat san|tun un|tuk me|nga|jak ra|kan be|ker|ja ber|sa|ma.',[
        o('Ka|mu mes|ti bu|at se|mu|a!','Ayat ini memaksa rakan melakukan semua kerja. Pilih ajakan yang melibatkan kedua-duanya.','stop'),
        o('Ma|ri ki|ta ba|ha|gi|kan tu|gas.','Betul! Perkataan “mari” mengajak, dan “kita” melibatkan kedua-dua pihak.','friends'),
        o('Sa|ya ti|dak ma|hu de|ngar!','Ayat ini menutup peluang berbincang. Pilih ayat yang mengajak rakan bekerjasama.','think')],1,'Mereka bersetuju untuk membahagikan tugas.','alasan'),
      q('l3q5','Leng|kap|kan: “Me|re|ka be|ker|ja|sa|ma ke|ra|na _____.”',[
        o('me|re|ka mem|ba|ha|gi|kan tu|gas','Ya! Alasan ini menyebut perbuatan yang menjadi bukti kerjasama.','friends'),
        o('na|ma|nya Ai|na dan Ra|vi','Nama watak tidak menerangkan nilai. Cari tindakan mereka.','family'),
        o('ha|ri i|tu ha|ri Sab|tu','Hari Sabtu ialah maklumat masa. Alasan nilai perlu menerangkan perbuatan.','sun')],0,'Mereka bersetuju untuk membahagikan tugas.','alasan')
    ]
  },
  { id:4, title:'Karnival Budi', tag:'Ba + Ca + Ni', place:'Karnival Bandar Sihat', color:'#d19a24', goal:'Terangkan nilai dengan bukti dan amalkan dalam kehidupan.', image:3,
    panels:[
      'Ra|vi me|nya|pu da|un, ma|na|ka|la Ai|na me|ngu|tip pem|bung|kus ma|ka|nan.',
      'Me|re|ka me|ma|suk|kan sam|pah ke da|lam tong dan me|nu|tup|nya. Ta|man ki|ni ber|sih.',
      'Se|be|lum ma|kan bu|ah yang di|se|di|a|kan i|bu, me|re|ka mem|ba|suh ta|ngan de|ngan sa|bun.',
      'I|bu me|mu|ji u|sa|ha me|re|ka.'
    ],
    questions:[
      q('l4q1','Ba|gai|ma|na|kah ke|a|da|an ta|man se|le|pas me|re|ka be|ker|ja?',[
        o('Se|ma|kin ko|tor','Mereka sudah mengumpulkan sampah. Lihat ayat yang bermula dengan “Taman kini”.','litter'),
        o('Ber|sih','Betul! Kerja bersama menjadikan taman bersih.','park'),
        o('Di|pe|nu|hi bu|ku','Buku tidak disebut dalam cerita ini. Cari perubahan pada taman.','book')],1,'Taman kini bersih.','baca'),
      q('l4q2','Pi|lih ni|lai dan buk|ti yang se|pa|dan.',[
        o('Ker|ja|sa|ma — me|re|ka mem|ber|sih|kan ta|man ber|sa|ma','Ya! Nilai dan bukti perbuatannya sepadan.','friends'),
        o('Ke|ju|ju|ran — me|re|ka ma|kan bu|ah','Makan buah tidak menunjukkan perbuatan berkata benar. Padankan nilai dengan tindakan yang membuktikannya.','fruit'),
        o('Ke|be|ra|ni|an — me|re|ka mem|ba|suh ta|ngan','Membasuh tangan ialah amalan kebersihan. Cerita tidak mengaitkannya dengan menghadapi rasa takut.','hands')],0,'Ravi menyapu daun, manakala Aina mengutip pembungkus makanan.','nilai'),
      q('l4q3','Su|sun pe|ris|ti|wa pe|nu|tup ce|ri|ta.',[
        o('Ta|man men|ja|di ber|sih.'),o('Me|re|ka mem|ba|suh ta|ngan se|be|lum ma|kan.'),o('Me|re|ka me|ma|suk|kan sam|pah ke da|lam tong.')],[2,0,1],'Sampah dimasukkan ke dalam tong. Taman menjadi bersih. Mereka membasuh tangan sebelum makan.','perbuatan','sequence'),
      q('l4q4','Ra|kan ka|mu be|lum kem|ba|li. A|pa|kah tin|da|kan yang se|su|ai?',[
        o('Te|rus me|nu|duh|nya ma|las','Ravi tersalah sangka sebelum mendengar penjelasan Aina. Beri peluang kepada rakan untuk menjelaskan.','stop'),
        o('Ta|nya de|ngan so|pan dan de|ngar pen|je|las|an|nya','Betul! Bertanya dan mendengar membantu kita memahami keadaan sebenar.','friends'),
        o('Eng|gan ber|ca|kap de|ngan|nya','Enggan bercakap menyukarkan kita memahami keadaan rakan. Cuba berbincang dengan sopan.','think')],1,'Ravi memahami keadaan selepas Aina menjelaskan tindakannya.','alasan'),
      q('l4q5','Leng|kap|kan: “Sa|ya men|ja|ga ke|ber|si|han di|ri de|ngan _____.”',[
        o('mem|ba|suh ta|ngan de|ngan sa|bun se|be|lum ma|kan','Ya! Ini amalan kebersihan diri yang dilakukan oleh Aina dan Ravi.','hands'),
        o('mem|bi|ar|kan sam|pah di a|tas rum|put','Membiarkan sampah mengotorkan kawasan. Cari amalan yang membersihkan diri.','litter'),
        o('me|le|tak|kan bu|ku di a|tas me|ja','Menyusun buku baik untuk kekemasan, tetapi soalan meminta amalan kebersihan diri daripada cerita.','book')],0,'Mereka membasuh tangan dengan sabun sebelum makan.','alasan')
    ]
  }
];
export const PROVERBS = [
 {id:'b1',text:'Ri|ngan tu|lang',type:'Simpulan bahasa',meaning:'Rajin bekerja.',context:'Ibu memuji Aina dan Ravi yang segera membantu membersihkan taman.',value:'Kerajinan',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=ringan%20tulang',options:[o('Ra|jin mem|ban|tu','Ya! Ringan tulang merujuk kepada sikap rajin bekerja.','sweep'),o('Tu|lang yang ti|dak be|rat','Dalam simpulan bahasa ini, “ringan tulang” bukan ukuran berat tulang. Maksudnya rajin bekerja.','think')],answer:0},
 {id:'b2',text:'Ba|gai aur de|ngan te|bing',type:'Perumpamaan',meaning:'Saling membantu antara satu sama lain.',context:'Aina dan Ravi saling membantu menyiapkan kerja di taman.',value:'Kerjasama',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=bagai%20aur%20dengan%20tebing',options:[o('Be|ker|ja sen|di|ri sa|ha|ja','Perumpamaan ini menekankan bantuan antara satu sama lain. Lihat tindakan kedua-dua watak.','think'),o('Sa|ling mem|ban|tu','Betul! Tindakan mereka saling membantu sesuai dengan perumpamaan ini.','friends')],answer:1},
 {id:'b3',text:'Be|rat sa|ma di|pi|kul, ri|ngan sa|ma di|jin|jing',type:'Pepatah',meaning:'Bersama-sama menanggung susah dan senang.',context:'Kedua-dua keluarga berkongsi tugas supaya beban kerja tidak ditanggung oleh seorang sahaja.',value:'Kerjasama',source:'https://prpm.dbp.gov.my/Cari1?d=226380&keyword=berat',options:[o('Ber|kong|si be|ban tu|gas','Ya! Dalam situasi ini, mereka menanggung beban kerja bersama-sama.','friends'),o('Mem|bi|ar|kan Ra|vi be|ker|ja se|o|rang','Tindakan ini membebankan Ravi sahaja. Pepatah ini mengajak kita berkongsi beban.','think')],answer:0},
 {id:'b4',text:'Bu|lat air ke|ra|na pem|be|tung, bu|lat ka|ta ke|ra|na mu|a|fa|kat',type:'Pepatah',meaning:'Persetujuan dicapai melalui perbincangan.',context:'Aina dan Ravi berbincang dan bersetuju untuk membahagikan tugas.',value:'Semangat bermuafakat',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=bermuafakat',options:[o('Ber|bin|cang se|be|lum mem|bu|at ke|pu|tu|san','Betul! Mereka berbincang untuk mencapai persetujuan.','friends'),o('Me|mak|sa ra|kan me|ngi|kut a|ra|han','Paksaan tidak menunjukkan persetujuan bersama. Muafakat dicapai melalui perbincangan.','stop')],answer:0},
 {id:'b5',text:'Se|di|a|kan pa|yung se|be|lum hu|jan',type:'Bidalan',meaning:'Bersiap sedia sebelum sesuatu yang tidak baik berlaku.',context:'Sebelum gotong-royong seterusnya, keluarga mereka merancang tugas agar salah faham tidak berulang.',value:'Sikap bersedia',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=sediakan%20payung%20sebelum%20hujan',options:[o('Me|nung|gu ma|sa|lah ber|u|lang','Bidalan ini mengajak kita bersedia lebih awal. Merancang tugas boleh membantu mengelakkan salah faham.','think'),o('Me|ran|cang tu|gas le|bih a|wal','Ya! Merancang lebih awal ialah persediaan untuk mengelakkan masalah.','flag')],answer:1}
];
export const QUESTIONS=LEVELS.flatMap(l=>l.questions);
export const SKILLS={baca:'Memahami cerita',perbuatan:'Mencari perbuatan',nilai:'Mengenal pasti nilai',alasan:'Memberikan alasan'};
export const REFLECTIONS=[
 {id:'strength',title:'Apakah yang saya sudah boleh buat?',items:Object.entries(SKILLS)},
 {id:'difficulty',title:'Bahagian manakah yang saya mahu latih lagi?',items:Object.entries(SKILLS)},
 {id:'strategy',title:'Apakah cara yang akan saya cuba?',items:[['read','Baca semula cerita'],['listen','Dengar bacaan'],['action','Cari perbuatan watak'],['evidence','Padankan nilai dengan bukti']]},
 {id:'habit',title:'Apakah amalan baik saya selepas ini?',items:[['hands','Basuh tangan sebelum makan'],['clean','Buang sampah ke dalam tong'],['help','Bantu keluarga membersihkan rumah'],['polite','Bertanya dengan sopan']]}
];
export const PRACTICE=[
 q('p1','Mira mengelap meja. Danial menyusun kerusi. Mereka membersihkan kelas bersama-sama. Apakah nilai yang ditunjukkan?', [o('Kerjasama','Ya! Kedua-duanya membantu membersihkan kelas.'),o('Keberanian','Cerita menekankan kerja bersama, bukan menghadapi rasa takut.')],0,'Mereka membersihkan kelas bersama-sama.','nilai'),
 q('p2','Irfan membasuh tangan dengan sabun sebelum makan. Pilih alasan yang menunjukkan kebersihan diri.', [o('Irfan mempunyai sebuah buku.','Buku tidak menerangkan kebersihan diri. Cari tindakan Irfan.'),o('Irfan membersihkan tangan sebelum makan.','Betul! Alasan ini menyebut tindakan menjaga kebersihan diri.')],1,'Irfan membasuh tangan dengan sabun sebelum makan.','alasan'),
 q('p3','Siti pergi ke taman pada waktu petang. Di manakah Siti berada?', [o('Di taman','Ya! Tempat ini disebut dalam ayat.'),o('Di dapur','Dapur tidak disebut. Baca perkataan selepas “ke”.')],0,'Siti pergi ke taman.','baca'),
 q('p4','Adam menyapu daun di halaman. Apakah perbuatan Adam?', [o('Menyapu daun','Ya! “Menyapu” ialah tindakan Adam.'),o('Waktu petang','Waktu memberitahu masa. Cari perkara yang Adam lakukan.')],0,'Adam menyapu daun.','perbuatan')
];
