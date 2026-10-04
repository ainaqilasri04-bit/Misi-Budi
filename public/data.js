// Cerita fantasi asli. Empat bab, dua puluh misi BaCaNi.
export const plain=s=>String(s??'').replaceAll('|','');
const o=(text,why,icon='')=>({text,why,icon});
const q=(id,text,options,answer,evidence,skill,type='choice')=>({id,text,options,answer,evidence,skill,type});
export const LEVELS=[
  {
    "id": 1,
    "title": "Helaian di sebalik bunga",
    "tag": "Ba · Ca · Ni",
    "place": "Lembah Pelangi",
    "color": "#258468",
    "image": 0,
    "goal": "Baca cerita, cari perbuatan dan jelaskan nilai dengan bukti.",
    "panels": [
      "Pa|da pa|gi i|tu, Ai|na dan Ra|vi me|ne|mu|kan Bu|ku Bu|di. Ti|ba-ti|ba, em|pat he|lai|an|nya ter|bang di|ti|up a|ngin a|ja|ib!",
      "“Ki|ta mes|ti men|ca|ri|nya,” ka|ta Ai|na. Bu|di, ke|re|ta a|ja|ib me|re|ka, mem|bu|ka pe|ta em|pat du|nia.",
      "Di Lem|bah Pe|la|ngi, bu|nga-bu|nga la|yu. Sa|lu|ran air ter|sum|bat o|leh da|un ke|ring.",
      "Ra|vi me|ngu|tip da|un. Ai|na me|me|gang ba|kul su|pa|ya da|un ti|dak ja|tuh se|mu|la. “Ka|mu me|mang ri|ngan tu|lang,” ka|ta Ai|na ke|pa|da Ra|vi.",
      "Air kem|ba|li me|nga|lir. Bu|nga ter|be|sar pun me|kar dan me|nun|juk|kan he|lai|an per|ta|ma!",
      "“Be|rat sa|ma di|pi|kul, ri|ngan sa|ma di|jin|jing,” ka|ta Bu|di. “Ki|ta ber|kong|si tu|gas,” ja|wab Ra|vi. Pa|da he|lai|an i|tu ter|lu|kis se|bu|ah te|ro|wong ge|lap. A|pa|kah yang me|nan|ti di sa|na?"
    ],
    "captions": [
      "Buku yang kehilangan helaian",
      "Peta empat dunia",
      "Mengapa bunga layu?",
      "Dua sahabat, satu usaha",
      "Air mengalir, bunga mekar",
      "Petunjuk ke terowong"
    ],
    "questions": [
      {
        "id": "l1q1",
        "text": "Si|a|pa|kah du|a sa|ha|bat yang men|ca|ri he|lai|an bu|ku?",
        "options": [
          {
            "text": "Ai|na dan Ra|vi",
            "why": "Betul! Aina dan Ravi mahu mencari empat helaian Buku Budi.",
            "icon": "friends"
          },
          {
            "text": "I|bu dan ne|nek",
            "why": "Ibu dan nenek tidak menyertai kisah ini. Baca permulaan cerita.",
            "icon": "family"
          },
          {
            "text": "Nu|ri dan pe|nyu",
            "why": "Nuri dan penyu belum muncul. Cari nama dua sahabat.",
            "icon": "think"
          }
        ],
        "answer": 0,
        "evidence": "Aina dan Ravi menemukan Buku Budi.",
        "skill": "baca",
        "type": "choice"
      },
      {
        "id": "l1q2",
        "text": "Me|nga|pa|kah bu|nga di lem|bah la|yu?",
        "options": [
          {
            "text": "Ti|a|da bu|ku",
            "why": "Buku yang hilang tidak menyebabkan saluran tersumbat.",
            "icon": "book"
          },
          {
            "text": "Sa|lu|ran air ter|sum|bat",
            "why": "Ya! Daun kering menghalang air daripada mengalir.",
            "icon": "litter"
          },
          {
            "text": "Ke|re|ta ter|la|lu ke|cil",
            "why": "Saiz kereta tidak disebut sebagai punca. Baca halaman ketiga.",
            "icon": "car"
          }
        ],
        "answer": 1,
        "evidence": "Saluran air tersumbat oleh daun kering.",
        "skill": "baca",
        "type": "choice"
      },
      {
        "id": "l1q3",
        "text": "A|pa|kah per|bu|a|tan Ra|vi?",
        "options": [
          {
            "text": "Me|me|gang bu|ku",
            "why": "Ravi sedang membantu membuka saluran air. Cari tindakannya.",
            "icon": "book"
          },
          {
            "text": "Me|lu|kis bu|nga",
            "why": "Melukis bunga tidak dinyatakan dalam cerita.",
            "icon": "park"
          },
          {
            "text": "Me|ngu|tip da|un",
            "why": "Betul! Ravi mengutip daun yang menyumbat saluran air.",
            "icon": "sweep"
          }
        ],
        "answer": 2,
        "evidence": "Ravi mengutip daun.",
        "skill": "perbuatan",
        "type": "choice"
      },
      {
        "id": "l1q4",
        "text": "Pi|lih ni|lai yang di|tun|juk|kan me|la|lu|i tu|gas me|re|ka.",
        "options": [
          {
            "text": "Ker|ja|sa|ma",
            "why": "Ya! Ravi mengutip daun dan Aina memegang bakul. Mereka berkongsi tugas.",
            "icon": "friends"
          },
          {
            "text": "Ke|ju|ju|ran",
            "why": "Bukti ini tentang berkongsi tugas. Kejujuran pula berkaitan berkata benar.",
            "icon": "heart"
          }
        ],
        "answer": 0,
        "evidence": "Ravi mengutip daun. Aina memegang bakul.",
        "skill": "nilai",
        "type": "picture"
      },
      {
        "id": "l1q5",
        "text": "A|pa|kah buk|ti me|re|ka be|ker|ja|sa|ma?",
        "options": [
          {
            "text": "Me|re|ka me|li|hat pe|ta",
            "why": "Melihat peta sahaja belum menunjukkan tugas yang dikongsi.",
            "icon": "book"
          },
          {
            "text": "Ra|vi me|ngu|tip da|un dan Ai|na me|me|gang ba|kul",
            "why": "Tepat! Kedua-duanya melakukan tugas untuk menyelesaikan masalah yang sama.",
            "icon": "friends"
          },
          {
            "text": "Bu|nga ber|war|na-war|ni",
            "why": "Warna bunga tidak menerangkan perbuatan watak.",
            "icon": "park"
          }
        ],
        "answer": 1,
        "evidence": "Ravi mengutip daun. Aina memegang bakul supaya daun tidak jatuh semula.",
        "skill": "alasan",
        "type": "choice"
      }
    ]
  },
  {
    "id": 2,
    "title": "Suara kecil dalam terowong",
    "tag": "Ba · Ca · Ni",
    "place": "Terowong Kristal",
    "color": "#8663a8",
    "image": 1,
    "goal": "Baca cerita, cari perbuatan dan jelaskan nilai dengan bukti.",
    "panels": [
      "Se|be|lum ma|suk ke Te|ro|wong Kris|tal, Ai|na me|nye|dia|kan pe|li|ta. “Se|di|a|kan pa|yung se|be|lum hu|jan,” pe|san Bu|di. Lam|pu te|ro|wong ru|pa|nya pa|dam. Ha|nya bu|nyi ti|ti|san air ke|de|nga|ran.",
      "“Tung|gu, sa|ya ta|kut,” bi|sik Ra|vi. Ai|na ber|hen|ti dan men|de|ngar ka|ta-ka|ta|nya.",
      "“Ki|ta ber|ge|rak ber|sa|ma,” ka|ta Ai|na. Bu|di me|nya|la|kan lam|pu ke|re|ta. Ra|vi be|ra|sa le|bih te|nang.",
      "Ai|na me|me|gang pe|li|ta. Ra|vi me|nyu|sun kris|tal se|ba|gai pe|nan|da la|lu|an. Me|re|ka me|ngi|kut|nya per|la|han-la|han.",
      "Di hu|jung te|ro|wong, me|re|ka me|ne|kan suis ca|ha|ya ber|sa|ma. Lam|pu me|nya|la dan he|lai|an ke|du|a mun|cul di ba|lik kris|tal.",
      "“Te|ri|ma ka|sih ke|ra|na me|nung|gu sa|ya,” ka|ta Ra|vi. Gam|bar om|bak tim|bul pa|da he|lai|an i|tu. Bu|di pun me|nu|ju ke te|luk."
    ],
    "captions": [
      "Terowong tanpa cahaya",
      "Dengarkan suara sahabat",
      "Kita bergerak bersama",
      "Jejak kristal",
      "Suis cahaya",
      "Di sebalik bunyi ombak"
    ],
    "questions": [
      {
        "id": "l2q1",
        "text": "A|pa|kah ma|sa|lah di Te|ro|wong Kris|tal?",
        "options": [
          {
            "text": "Lam|pu pa|dam",
            "why": "Ya! Lampu terowong padam dan suasananya gelap.",
            "icon": "sun"
          },
          {
            "text": "Bu|nga la|yu",
            "why": "Bunga layu ialah masalah di lembah, bukan terowong.",
            "icon": "park"
          },
          {
            "text": "Ba|kul pe|nuh",
            "why": "Bakul penuh tidak dinyatakan dalam bab ini.",
            "icon": "bag"
          }
        ],
        "answer": 0,
        "evidence": "Lampu di dalamnya padam.",
        "skill": "baca",
        "type": "choice"
      },
      {
        "id": "l2q2",
        "text": "A|pa|kah tin|da|kan Ai|na a|pa|bi|la Ra|vi ta|kut?",
        "options": [
          {
            "text": "Te|rus me|ning|gal|kan|nya",
            "why": "Aina tidak meninggalkan Ravi. Cari tindakan selepas Ravi meminta tunggu.",
            "icon": "stop"
          },
          {
            "text": "Ber|hen|ti dan men|de|ngar",
            "why": "Betul! Aina berhenti dan mendengar kata-kata Ravi.",
            "icon": "friends"
          },
          {
            "text": "Me|nu|tup bu|ku",
            "why": "Menutup buku tidak membantu Ravi dan tidak disebut dalam cerita.",
            "icon": "book"
          }
        ],
        "answer": 1,
        "evidence": "Aina berhenti dan mendengar kata-katanya.",
        "skill": "perbuatan",
        "type": "choice"
      },
      {
        "id": "l2q3",
        "text": "A|pa|kah ni|lai Ai|na a|pa|bi|la di|a me|nung|gu Ra|vi?",
        "options": [
          {
            "text": "Ke|ju|ju|ran",
            "why": "Bukti ini tentang mengambil berat perasaan sahabat, bukan mengakui kesalahan.",
            "icon": "heart"
          },
          {
            "text": "Ke|ra|ji|nan",
            "why": "Menunggu Ravi di sini menunjukkan perhatian terhadap perasaannya.",
            "icon": "sweep"
          },
          {
            "text": "Ke|pri|ha|ti|nan",
            "why": "Tepat! Aina mengambil berat tentang Ravi yang berasa takut.",
            "icon": "friends"
          }
        ],
        "answer": 2,
        "evidence": "Aina berhenti dan mendengar kata-kata Ravi.",
        "skill": "nilai",
        "type": "choice"
      },
      {
        "id": "l2q4",
        "text": "Me|nga|pa|kah Ra|vi be|ra|sa le|bih te|nang?",
        "options": [
          {
            "text": "Ai|na me|ne|ma|ni|nya dan lam|pu Bu|di me|nya|la",
            "why": "Ya! Ravi mendapat teman dan cahaya untuk meneruskan perjalanan.",
            "icon": "sun"
          },
          {
            "text": "Di|a me|ning|gal|kan Ai|na",
            "why": "Mereka bergerak bersama-sama, bukan berpisah.",
            "icon": "stop"
          },
          {
            "text": "Di|a men|da|pat ma|ka|nan",
            "why": "Makanan tidak disebut dalam bab ini.",
            "icon": "fruit"
          }
        ],
        "answer": 0,
        "evidence": "“Kita bergerak bersama,” kata Aina. Budi menyalakan lampu kereta.",
        "skill": "alasan",
        "type": "choice"
      },
      {
        "id": "l2q5",
        "text": "Su|sun pe|ris|ti|wa da|lam te|ro|wong.",
        "options": [
          {
            "text": "Lam|pu te|ro|wong me|nya|la.",
            "why": "Ini berlaku selepas mereka menekan suis.",
            "icon": "sun"
          },
          {
            "text": "Ai|na ber|hen|ti dan men|de|ngar.",
            "why": "Ini berlaku selepas Ravi menyatakan perasaannya.",
            "icon": "friends"
          },
          {
            "text": "Ra|vi mem|be|ri|ta|hu ba|ha|wa di|a ta|kut.",
            "why": "Ravi bersuara sebelum Aina berhenti.",
            "icon": "think"
          }
        ],
        "answer": [
          2,
          1,
          0
        ],
        "evidence": "Ravi memberitahu bahawa dia takut. Aina berhenti dan mendengar. Akhirnya, lampu terowong menyala.",
        "skill": "perbuatan",
        "type": "sequence"
      }
    ]
  },
  {
    "id": 3,
    "title": "Penyu di Teluk Biru",
    "tag": "Ba · Ca · Ni",
    "place": "Teluk Penyu",
    "color": "#187b9b",
    "image": 2,
    "goal": "Baca cerita, cari perbuatan dan jelaskan nilai dengan bukti.",
    "panels": [
      "Di Te|luk Pe|nyu, Bu|di mem|bu|ka pe|lam|pung|nya. Ke|re|ta i|tu te|ra|pung di a|tas air bi|ru. Ai|na dan Ra|vi ke|kal di da|lam|nya.",
      "Se|e|kor pe|nyu ke|cil hen|dak ke laut. Na|mun, bo|tol dan plas|tik me|nu|tup la|lu|an di ba|wah je|ti.",
      "“Ma|ri ki|ta ban|tu,” ka|ta Ai|na. Da|ri a|tas Bu|di, Ai|na me|ngang|kat sam|pah de|ngan ja|ring. Ra|vi me|me|gang ba|kul. “Ka|mu ber|du|a ba|gai aur de|ngan te|bing,” ka|ta Bu|di.",
      "Me|re|ka mem|ba|wa sam|pah ke pu|sat ki|tar se|mu|la. “Sam|pah i|ni bu|kan mi|lik ki|ta, te|ta|pi te|luk i|ni tem|pat ki|ta ber|sa|ma,” ka|ta Ra|vi.",
      "La|lu|an ki|ni ber|sih. Pe|nyu be|re|nang ke laut. Di ba|wah cang|ke|rang di je|ti, ter|se|lit he|lai|an ke|ti|ga!",
      "Ai|na dan Ra|vi mem|ba|suh ta|ngan se|be|lum ma|kan. He|lai|an i|tu me|nun|juk|kan bin|tang. “Ki|ta ke ang|ka|sa!” se|ru Ai|na."
    ],
    "captions": [
      "Kereta menjadi terapung",
      "Laluan penyu terhalang",
      "Jaring dan bakul",
      "Teluk milik bersama",
      "Penyu kembali ke laut",
      "Petunjuk dari bintang"
    ],
    "questions": [
      {
        "id": "l3q1",
        "text": "A|pa|kah yang me|ngha|lang pe|nyu ke laut?",
        "options": [
          {
            "text": "Kris|tal",
            "why": "Kristal ditemukan di terowong. Cari benda di bawah jeti.",
            "icon": "sun"
          },
          {
            "text": "Bo|tol dan plas|tik",
            "why": "Ya! Sampah menutup laluan penyu di bawah jeti.",
            "icon": "litter"
          },
          {
            "text": "Bu|ku dan pen|sel",
            "why": "Buku dan pensel tidak menghalang penyu dalam cerita.",
            "icon": "book"
          }
        ],
        "answer": 1,
        "evidence": "Botol dan plastik menutup laluan di bawah jeti.",
        "skill": "baca",
        "type": "choice"
      },
      {
        "id": "l3q2",
        "text": "Ba|gai|ma|na|kah Ai|na me|ngang|kat sam|pah?",
        "options": [
          {
            "text": "De|ngan ja|ring da|ri a|tas Bu|di",
            "why": "Betul! Aina menggunakan jaring dan kekal di atas kereta terapung.",
            "icon": "bag"
          },
          {
            "text": "De|ngan me|lom|pat ke da|lam air",
            "why": "Aina tidak masuk ke dalam air. Baca halaman ketiga.",
            "icon": "stop"
          },
          {
            "text": "De|ngan me|lu|kis pe|ta",
            "why": "Melukis peta tidak mengalihkan sampah.",
            "icon": "book"
          }
        ],
        "answer": 0,
        "evidence": "Dari atas Budi, Aina mengangkat sampah dengan jaring.",
        "skill": "perbuatan",
        "type": "choice"
      },
      {
        "id": "l3q3",
        "text": "Me|re|ka men|ja|ga te|luk wa|lau|pun sam|pah i|tu bu|kan mi|lik me|re|ka. A|pa|kah ni|lai|nya?",
        "options": [
          {
            "text": "Ke|be|ra|ni|an",
            "why": "Bukti ini menekankan menjaga kawasan bersama.",
            "icon": "shield"
          },
          {
            "text": "Ke|ju|ju|ran",
            "why": "Menceritakan perkara sebenar tidak menjadi tumpuan bukti ini.",
            "icon": "heart"
          },
          {
            "text": "Tang|gung|ja|wab",
            "why": "Ya! Mereka menjaga kebersihan tempat yang digunakan bersama.",
            "icon": "park"
          }
        ],
        "answer": 2,
        "evidence": "“Sampah ini bukan milik kita, tetapi teluk ini tempat kita bersama,” kata Ravi.",
        "skill": "nilai",
        "type": "choice"
      },
      {
        "id": "l3q4",
        "text": "A|pa|kah buk|ti me|re|ka ber|tang|gung|ja|wab?",
        "options": [
          {
            "text": "Mem|bi|ar|kan sam|pah di je|ti",
            "why": "Membiarkan sampah tidak menyelesaikan masalah penyu.",
            "icon": "litter"
          },
          {
            "text": "Mem|ba|wa sam|pah ke pu|sat ki|tar se|mu|la",
            "why": "Tepat! Mereka mengurus sampah dengan baik selepas mengutipnya.",
            "icon": "bag"
          },
          {
            "text": "Me|li|hat air bi|ru",
            "why": "Melihat air sahaja tidak menunjukkan usaha menjaga teluk.",
            "icon": "think"
          }
        ],
        "answer": 1,
        "evidence": "Mereka membawa sampah ke pusat kitar semula.",
        "skill": "alasan",
        "type": "choice"
      },
      {
        "id": "l3q5",
        "text": "A|pa|kah a|ma|lan me|re|ka se|be|lum ma|kan?",
        "options": [
          {
            "text": "Mem|ba|suh ta|ngan",
            "why": "Ya! Aina dan Ravi membasuh tangan sebelum makan.",
            "icon": "hands"
          },
          {
            "text": "Me|ngu|tip kris|tal",
            "why": "Kristal berada dalam bab terowong. Cari amalan kebersihan diri.",
            "icon": "sun"
          },
          {
            "text": "Mem|bu|ka pe|ta",
            "why": "Peta tidak membersihkan tangan.",
            "icon": "book"
          }
        ],
        "answer": 0,
        "evidence": "Aina dan Ravi membasuh tangan sebelum makan.",
        "skill": "perbuatan",
        "type": "choice"
      }
    ]
  },
  {
    "id": 4,
    "title": "Bintang yang hilang arah",
    "tag": "Ba · Ca · Ni",
    "place": "Orbit Bintang",
    "color": "#5258a4",
    "image": 3,
    "goal": "Baca cerita, cari perbuatan dan jelaskan nilai dengan bukti.",
    "panels": [
      "Bu|di ber|u|bah men|ja|di ke|re|ta ang|ka|sa. Me|re|ka ti|ba di Ste|sen Bin|tang, se|bu|ah ta|man da|lam ku|bah ka|ca.",
      "Ra|vi ter|te|kan suis me|rah. Lam|pu pan|du|an pa|dam. “Sa|ya yang ter|te|kan suis i|tu,” a|ku Ra|vi ke|pa|da ro|bot Nu|ri.",
      "“Te|ri|ma ka|sih ke|ra|na ber|ka|ta be|nar,” ka|ta Nu|ri. Nu|ri me|nun|juk|kan ca|ra me|mu|lih|kan lam|pu de|ngan se|la|mat.",
      "Me|re|ka ber|bin|cang dan ber|se|tu|ju mem|ba|ha|gi tu|gas. “Bu|lat air ke|ra|na pem|be|tung, bu|lat ka|ta ke|ra|na mu|a|fa|kat,” ka|ta Nu|ri. Ai|na mem|ba|ca a|ra|han. Ra|vi me|ne|kan suis yang di|tun|juk|kan o|leh Nu|ri.",
      "Lam|pu pan|du|an me|nya|la se|mu|la. Nu|ri me|nye|rah|kan he|lai|an ter|a|khir. Em|pat he|lai|an ki|ni kem|ba|li ke Bu|ku Bu|di.",
      "“Bu|ku i|ni me|nyim|pan per|bu|a|tan baik ki|ta,” ka|ta Ai|na. Me|re|ka pu|lang mem|ba|wa ker|ja|sa|ma, ke|pri|ha|ti|nan, tang|gung|ja|wab dan ke|ju|ju|ran."
    ],
    "captions": [
      "Taman di angkasa",
      "Ravi memilih untuk jujur",
      "Nuri membantu",
      "Baca arahan dahulu",
      "Helaian terakhir",
      "Budi dibawa pulang"
    ],
    "questions": [
      {
        "id": "l4q1",
        "text": "Di ma|na|kah me|re|ka ber|te|mu Nu|ri?",
        "options": [
          {
            "text": "Di Te|luk Pe|nyu",
            "why": "Penyu berada di teluk. Nuri berada dalam bab angkasa.",
            "icon": "park"
          },
          {
            "text": "Di Ste|sen Bin|tang",
            "why": "Ya! Mereka bertemu robot Nuri di Stesen Bintang.",
            "icon": "flag"
          },
          {
            "text": "Di Te|ro|wong Kris|tal",
            "why": "Nuri tidak muncul di terowong.",
            "icon": "sun"
          }
        ],
        "answer": 1,
        "evidence": "Mereka tiba di Stesen Bintang. Ravi mengaku kepada robot Nuri.",
        "skill": "baca",
        "type": "choice"
      },
      {
        "id": "l4q2",
        "text": "Pi|lih ni|lai dan buk|ti yang se|pa|dan.",
        "options": [
          {
            "text": "Ke|ju|ju|ran — Ra|vi me|nga|ku ter|te|kan suis",
            "why": "Tepat! Ravi berkata benar tentang kesalahannya.",
            "icon": "heart"
          },
          {
            "text": "Ker|ja|sa|ma — Bu|di ber|war|na me|rah",
            "why": "Warna kereta bukan bukti kerja bersama.",
            "icon": "car"
          },
          {
            "text": "Tang|gung|ja|wab — Nu|ri i|a|lah ro|bot",
            "why": "Menjadi robot bukan perbuatan yang membuktikan nilai.",
            "icon": "think"
          }
        ],
        "answer": 0,
        "evidence": "“Saya yang tertekan suis itu,” aku Ravi.",
        "skill": "nilai",
        "type": "choice"
      },
      {
        "id": "l4q3",
        "text": "Su|sun pe|ris|ti|wa di Ste|sen Bin|tang.",
        "options": [
          {
            "text": "Nu|ri mem|be|ri pan|du|an.",
            "why": "Nuri membantu selepas Ravi mengaku.",
            "icon": "friends"
          },
          {
            "text": "Lam|pu pan|du|an me|nya|la se|mu|la.",
            "why": "Lampu menyala selepas arahan diikuti.",
            "icon": "sun"
          },
          {
            "text": "Ra|vi me|nga|ku ter|te|kan suis.",
            "why": "Ravi mengaku dahulu.",
            "icon": "heart"
          }
        ],
        "answer": [
          2,
          0,
          1
        ],
        "evidence": "Ravi mengaku. Nuri memberi panduan. Akhirnya, lampu panduan menyala semula.",
        "skill": "perbuatan",
        "type": "sequence"
      },
      {
        "id": "l4q4",
        "text": "Ka|mu ti|dak se|nga|ja me|ro|sak|kan ba|rang ke|las. A|pa|kah tin|da|kan yang se|su|ai?",
        "options": [
          {
            "text": "Me|nya|lah|kan ra|kan",
            "why": "Menyalahkan orang lain tidak menunjukkan kejujuran.",
            "icon": "stop"
          },
          {
            "text": "Ber|ka|ta be|nar dan me|min|ta ban|tu|an gu|ru",
            "why": "Ya! Seperti Ravi, kita mengaku dan meminta bantuan untuk membetulkan keadaan.",
            "icon": "friends"
          },
          {
            "text": "Me|nyem|bu|nyi|kan ba|rang",
            "why": "Menyembunyikan barang tidak menyelesaikan masalah.",
            "icon": "bag"
          }
        ],
        "answer": 1,
        "evidence": "Ravi berkata benar kepada Nuri dan mengikuti panduannya.",
        "skill": "alasan",
        "type": "choice"
      },
      {
        "id": "l4q5",
        "text": "Me|nga|pa|kah ke|ju|ju|ran Ra|vi mem|ban|tu me|nye|le|sai|kan ma|sa|lah?",
        "options": [
          {
            "text": "Nu|ri ta|hu a|pa yang ber|la|ku dan da|pat mem|ban|tu",
            "why": "Tepat! Penjelasan yang benar membantu Nuri memberikan panduan yang sesuai.",
            "icon": "friends"
          },
          {
            "text": "Ra|vi men|da|pat ke|re|ta ba|ha|ru",
            "why": "Ravi tidak menerima kereta baharu dalam cerita.",
            "icon": "car"
          },
          {
            "text": "Bin|tang ber|tu|kar war|na",
            "why": "Warna bintang tidak menerangkan cara masalah diselesaikan.",
            "icon": "sun"
          }
        ],
        "answer": 0,
        "evidence": "Ravi mengaku tertekan suis. Nuri menunjukkan cara memulihkan lampu.",
        "skill": "alasan",
        "type": "choice"
      }
    ]
  }
];
export const PROVERBS = [
 {id:'b1',text:'Ri|ngan tu|lang',type:'Simpulan bahasa',meaning:'Rajin bekerja.',context:'Aina dan Ravi segera mengutip daun yang menyumbat saluran air.',value:'Kerajinan',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=ringan%20tulang',options:[o('Ra|jin mem|ban|tu','Ya! Ringan tulang merujuk kepada sikap rajin bekerja.','sweep'),o('Tu|lang yang ti|dak be|rat','Dalam simpulan bahasa ini, “ringan tulang” bukan ukuran berat tulang. Maksudnya rajin bekerja.','think')],answer:0},
 {id:'b2',text:'Ba|gai aur de|ngan te|bing',type:'Perumpamaan',meaning:'Saling membantu antara satu sama lain.',context:'Aina mengangkat sampah dengan jaring, manakala Ravi memegang bakul.',value:'Kerjasama',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=bagai%20aur%20dengan%20tebing',options:[o('Be|ker|ja sen|di|ri sa|ha|ja','Perumpamaan ini menekankan bantuan antara satu sama lain. Lihat tindakan kedua-dua watak.','think'),o('Sa|ling mem|ban|tu','Betul! Tindakan mereka saling membantu sesuai dengan perumpamaan ini.','friends')],answer:1},
 {id:'b3',text:'Be|rat sa|ma di|pi|kul, ri|ngan sa|ma di|jin|jing',type:'Pepatah',meaning:'Bersama-sama menanggung susah dan senang.',context:'Aina dan Ravi berkongsi tugas ketika membuka saluran air di lembah.',value:'Kerjasama',source:'https://prpm.dbp.gov.my/Cari1?d=226380&keyword=berat',options:[o('Ber|kong|si be|ban tu|gas','Ya! Dalam situasi ini, mereka menanggung beban kerja bersama-sama.','friends'),o('Mem|bi|ar|kan Ra|vi be|ker|ja se|o|rang','Tindakan ini membebankan Ravi sahaja. Pepatah ini mengajak kita berkongsi beban.','think')],answer:0},
 {id:'b4',text:'Bu|lat air ke|ra|na pem|be|tung, bu|lat ka|ta ke|ra|na mu|a|fa|kat',type:'Pepatah',meaning:'Persetujuan dicapai melalui perbincangan.',context:'Aina, Ravi dan Nuri berbincang serta bersetuju membahagikan tugas untuk memulihkan lampu stesen.',value:'Semangat bermuafakat',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=bermuafakat',options:[o('Ber|bin|cang se|be|lum mem|bu|at ke|pu|tu|san','Betul! Mereka berbincang untuk mencapai persetujuan.','friends'),o('Me|mak|sa ra|kan me|ngi|kut a|ra|han','Paksaan tidak menunjukkan persetujuan bersama. Muafakat dicapai melalui perbincangan.','stop')],answer:0},
 {id:'b5',text:'Se|di|a|kan pa|yung se|be|lum hu|jan',type:'Bidalan',meaning:'Bersiap sedia sebelum sesuatu yang tidak baik berlaku.',context:'Aina menyediakan pelita sebelum masuk ke terowong yang gelap.',value:'Sikap bersedia',source:'https://prpm.dbp.gov.my/Cari1?d=175768&keyword=sediakan%20payung%20sebelum%20hujan',options:[o('Me|nung|gu ma|sa|lah ber|u|lang','Bidalan ini mengajak kita bersedia lebih awal. Lampu dapat membantu apabila laluan gelap.','think'),o('Me|nye|dia|kan lam|pu le|bih a|wal','Ya! Menyediakan lampu lebih awal ialah persediaan untuk menghadapi laluan gelap.','flag')],answer:1}
];
export const QUESTIONS=LEVELS.flatMap(l=>l.questions);
export const SKILLS={baca:'Memahami cerita',perbuatan:'Mencari perbuatan',nilai:'Mengenal pasti nilai',alasan:'Memberikan alasan'};
export const REFLECTIONS=[
 {id:'strength',title:'Apakah yang saya sudah boleh buat?',items:Object.entries(SKILLS)},
 {id:'difficulty',title:'Bahagian manakah yang saya mahu latih lagi?',items:Object.entries(SKILLS)},
 {id:'strategy',title:'Apakah cara yang akan saya cuba?',items:[['read','Baca semula cerita'],['listen','Dengar bacaan'],['action','Cari perbuatan watak'],['evidence','Padankan nilai dengan bukti']]},
 {id:'habit',title:'Apakah amalan baik saya selepas ini?',items:[['hands','Basuh tangan sebelum makan'],['clean','Jaga kebersihan tempat bersama'],['help','Dengar apabila rakan memerlukan bantuan'],['polite','Berkata benar dan meminta bantuan']]}
];
export const PRACTICE=[
 q('p1','Mira mengelap meja. Danial menyusun kerusi. Mereka membersihkan kelas bersama-sama. Apakah nilai yang ditunjukkan?', [o('Kerjasama','Ya! Kedua-duanya membantu membersihkan kelas.'),o('Keberanian','Cerita menekankan kerja bersama, bukan menghadapi rasa takut.')],0,'Mereka membersihkan kelas bersama-sama.','nilai'),
 q('p2','Irfan membasuh tangan dengan sabun sebelum makan. Pilih alasan yang menunjukkan kebersihan diri.', [o('Irfan mempunyai sebuah buku.','Buku tidak menerangkan kebersihan diri. Cari tindakan Irfan.'),o('Irfan membersihkan tangan sebelum makan.','Betul! Alasan ini menyebut tindakan menjaga kebersihan diri.')],1,'Irfan membasuh tangan dengan sabun sebelum makan.','alasan'),
 q('p3','Siti pergi ke taman pada waktu petang. Di manakah Siti berada?', [o('Di taman','Ya! Tempat ini disebut dalam ayat.'),o('Di dapur','Dapur tidak disebut. Baca perkataan selepas “ke”.')],0,'Siti pergi ke taman.','baca'),
 q('p4','Adam menyapu daun di halaman. Apakah perbuatan Adam?', [o('Menyapu daun','Ya! “Menyapu” ialah tindakan Adam.'),o('Waktu petang','Waktu memberitahu masa. Cari perkara yang Adam lakukan.')],0,'Adam menyapu daun.','perbuatan')
];
