// Menghasilkan satu fail latihan individu, lengkap dengan aset dan rakaman.
import {readFileSync,writeFileSync,mkdirSync,readdirSync,statSync} from 'node:fs';
import {join,extname,resolve} from 'node:path';
import './build-preview.mjs';
const root=resolve('public'),assets={};
function scan(dir){for(const name of readdirSync(dir)){const path=join(dir,name);if(statSync(path).isDirectory())scan(path);else{const mime={'.png':'image/png','.svg':'image/svg+xml','.mp3':'audio/mpeg','.woff2':'font/woff2'}[extname(path)];if(mime)assets[path.slice(root.length+1)]='data:'+mime+';base64,'+readFileSync(path).toString('base64');}}}
scan(join(root,'assets'));
let html=readFileSync(join(root,'PRATONTON.html'),'utf8');
const css=['style.css','adventure.css'].map(n=>readFileSync(join(root,n),'utf8')).join('\n');
html=html.replace(/<link rel="preload"[^>]*>/g,'').replace(/<link rel="stylesheet"[^>]*>/g,'');
const preload='<script>const ASSETS='+JSON.stringify(assets)+';const localStyle=document.createElement("style");localStyle.textContent='+JSON.stringify(css)+'.replace(/url\\(([\'\"]?)(assets\\/[^\'\")]+)\\1\\)/g,(m,q,p)=>\'url("\'+ASSETS[p]+\'")\');document.head.append(localStyle);</script>';
html=html.replace('</head>',()=>preload+'</head>');
html=html.replace('href="assets/car-red.svg"','href="'+assets['assets/car-red.svg']+'"').replace('src="assets/car-red.svg"','src="'+assets['assets/car-red.svg']+'"');
html=html.replaceAll("BG.src='assets/dunia-fantasi.png'","BG.src=ASSETS['assets/dunia-fantasi.png']").replaceAll("KART.src='assets/kart-sprites.png'","KART.src=ASSETS['assets/kart-sprites.png']");
html=html.replace("new URL('./assets/audio/bacaan-melayu.mp3',document.baseURI)","ASSETS['assets/audio/bacaan-melayu.mp3']");
html=html.replace(/src="assets\/car-\$\{([^}]+)\}\.svg"/g,(_,value)=>'src="${ASSETS[\'assets/car-\'+('+value+')+\'.svg\']}"');
html=html.replace('<title>Pratonton Misi Budi</title>','<title>Misi Budi · Dunia BaCaNi · Latihan Individu</title>');
html=html.replace('</body>','<!-- Fon Andika: SIL Open Font License 1.1. '+readFileSync(join(root,'assets/fonts/OFL.txt'),'utf8').replaceAll('--','—')+' -->\n</body>');
const out=resolve(process.argv[2]||'../misi-budi-deliverables/Misi-Budi-Dunia-BaCaNi.html');mkdirSync(resolve(out,'..'),{recursive:true});writeFileSync(out,html);console.log('Fail individu siap:',out,Math.round(Buffer.byteLength(html)/1024/1024*10)/10+' MiB');
