import test from 'node:test';
import assert from 'node:assert/strict';
import manifest from '../public/audio-manifest.js';
import {READING_UI} from '../public/reading-data.js';
// Deterministic media doubles exercise cancellation during delayed metadata loading.
test('Audio dua sumber: pertukaran pantas, henti semasa memuat dan kadar bacaan',async()=>{
 const made=[],frames=new Map();let frameId=0;
 globalThis.document={querySelectorAll:()=>[]};
 globalThis.requestAnimationFrame=f=>{frames.set(++frameId,f);return frameId;};
 globalThis.cancelAnimationFrame=id=>frames.delete(id);
 class FakeAudio extends EventTarget{constructor(src){super();this.src=String(src);this.paused=true;this.readyState=0;this.currentTime=0;this.ended=false;this.plays=0;made.push(this);}load(){setTimeout(()=>{this.readyState=1;this.dispatchEvent(new Event('loadedmetadata'));},this.src.includes('bantuan')?4:25);}pause(){this.paused=true;}async play(){this.paused=false;this.plays++;}}
 globalThis.Audio=FakeAudio;
 const {speakMalay,stopMalay}=await import('../public/audio.js');
 const mainKey=Object.keys(manifest).find(k=>!manifest[k].asset),supportKey=READING_UI.rest,alerts=[];
 assert.equal(manifest[supportKey]?.asset,'support');
 const old=speakMalay(mainKey,{notify:t=>alerts.push(t)}),newer=speakMalay(supportKey,{rate:.7,notify:t=>alerts.push(t)});await Promise.all([old,newer]);
 assert.equal(made.length,2);const main=made.find(p=>!p.src.includes('bantuan')),support=made.find(p=>p.src.includes('bantuan'));
 assert.equal(main.plays,0);assert.equal(main.paused,true);assert.equal(support.paused,false);assert.equal(support.playbackRate,.83);assert.equal(support.currentTime,manifest[supportKey].start);
 await speakMalay(mainKey,{rate:1});assert.equal(support.paused,true);assert.equal(main.paused,false);assert.equal(main.playbackRate,1.1);assert.equal(main.preservesPitch,true);
 const pending=speakMalay(supportKey);stopMalay();await pending;assert(made.every(p=>p.paused));
 await speakMalay(supportKey,{rate:.85});assert.equal(support.playbackRate,1);support.currentTime=manifest[supportKey].start+manifest[supportKey].duration;for(const f of [...frames.values()])f();assert.equal(support.paused,true);
 assert.deepEqual(alerts,[]);stopMalay();
});
