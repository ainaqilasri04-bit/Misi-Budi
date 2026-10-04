import test from 'node:test';
import assert from 'node:assert/strict';
import {LEVELS,PROVERBS,plain} from '../public/data.js';
import {HUNTS} from '../public/group-data.js';
import {newGroup,ensurePage,normalizeBook,commitDraft,commitReview,commitRevision} from '../public/group-store.js';
test('Semua lima peribahasa boleh ditemukan dalam halaman cerita yang betul',()=>{
 assert.equal(HUNTS.length,5);assert.equal(new Set(HUNTS.map(x=>x.id)).size,5);
 for(const h of HUNTS){const pr=PROVERBS.find(p=>p.id===h.id);assert.ok(plain(LEVELS[h.world].panels[h.page]).toLowerCase().includes(plain(pr.text).toLowerCase()));assert.equal(plain(h.options[h.answer]),plain(pr.text));}
});
test('Draf, sumbangan ahli, semakan silang dan pembaikan mengekalkan versi terdahulu',()=>{
 const b=newGroup('Pelangi',['Aina','Ravi','Siti','Kumar']),p=ensurePage(b,'b1');
 assert.throws(()=>commitDraft(b,p),/Cari/);p.found=true;
 p.draft.meaning='Rajin membantu.';p.draft.evidence='Ravi mengutip daun.';p.draft.example='Kami menyapu kelas.';
 assert.throws(()=>commitDraft(b,p),/setiap ahli/);
 b.members.forEach((_,i)=>p.draft.ideas[i]='Idea '+i);commitDraft(b,p);
 assert.throws(()=>commitRevision(b,p),/semakan/);
 p.reviewDraft={by:'Kumpulan Bintang',praise:'Maksud jelas.',suggestion:'Nyatakan sebab Ravi mengutip daun.'};commitReview(p);
 p.reason='Menjelaskan bukti.';assert.throws(()=>commitRevision(b,p),/Baiki sekurang/);
 p.draft.evidence='Ravi mengutip daun untuk membuka saluran air.';commitRevision(b,p);
 assert.equal(p.history.length,2);assert.equal(p.history[0].draft.evidence,'Ravi mengutip daun.');assert.equal(p.history[1].review.by,'Kumpulan Bintang');assert.equal(p.review,null);
 const copied=normalizeBook(JSON.parse(JSON.stringify(b)));assert.deepEqual(copied.pages.b1.history,p.history);assert.equal(copied.team,'Pelangi');
});
test('Import menolak format asing dan mengehadkan medan serta indeks gambar',()=>{
 assert.throws(()=>normalizeBook({team:'Kumpulan'}));const b=newGroup('Nama',['A','B']);b.pages.b2={found:true,draft:{meaning:'x'.repeat(1500),picture:999,ideas:{0:'A'}},history:[]};b.unknown='ignored';const out=normalizeBook(b);assert.equal(out.pages.b2.draft.meaning.length,900);assert.equal(out.pages.b2.draft.picture,2);assert.equal(out.unknown,undefined);
});
