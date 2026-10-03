// Membina pratonton yang boleh dibuka dengan klik dua kali, tanpa pelayan.
import {readFileSync,writeFileSync} from 'node:fs';
const modules=['data','scoring','icons','journey-data','adventure','audio-manifest','audio','app'];
let bundle="(()=>{ 'use strict'; const M={}; window.BACANI_PREVIEW=true;\n";
for(const name of modules){let source=readFileSync(`public/${name}.js`,'utf8');const exports=[];
 source=source.replace(/import\s*\{([^}]+)\}\s*from\s*['"]\.\/([^'"]+)\.js['"];?/g,(_,names,module)=>`const {${names}}=M['${module}'];`);
 source=source.replace(/import\s+(\w+)\s+from\s*['"]\.\/([^'"]+)\.js['"];?/g,(_,local,module)=>`const ${local}=M['${module}'].default;`);
 source=source.replace(/export\s+(const|let|function|class)\s+(\w+)/g,(_,kind,id)=>{exports.push(id);return `${kind} ${id}`;});
 source=source.replace(/export\s+async\s+function\s+(\w+)/g,(_,id)=>{exports.push(id);return `async function ${id}`;});
 if(source.includes('export default ')){source=source.replace('export default ','const __default=');exports.push('default:__default');}
 source=source.replaceAll('import.meta.url','document.baseURI');
 bundle+=`M['${name}']=(()=>{\n${source}\nreturn {${exports.join(',')}};})();\n`;
}
bundle+='})();';
let html=readFileSync('public/index.html','utf8').replace('<title>Misi Budi · Dunia BaCaNi</title>','<title>Pratonton Misi Budi</title>');
html=html.replace('<script type="module" src="app.js"></script>',()=>'<script>'+bundle.replaceAll('</script','<\\/script')+'</script>');
writeFileSync('public/PRATONTON.html',html);console.log('Pratonton tanpa pelayan disediakan.');
