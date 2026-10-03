import manifest from './audio-manifest.js';
const normal=text=>String(text??'').replaceAll('|','').replace(/\s+/g,' ').trim();
let player=null,generation=0,watch=0,metadataTask=null;
function mark(button){document.querySelectorAll('.audio-speaking').forEach(el=>{el.classList.remove('audio-speaking');el.setAttribute('aria-pressed','false');});if(button){button.classList.add('audio-speaking');button.setAttribute('aria-pressed','true');}}
export function stopMalay(){generation++;if(player)player.pause();cancelAnimationFrame(watch);mark(null);}
export function audioStatus(){return 'Bacaan Bahasa Melayu Malaysia. Tekan Dengar untuk mengulang. Pilih kelajuan yang selesa. Tekan Henti suara apabila perlu.';}
async function waitMetadata(audio){if(audio.readyState>=1)return;if(!metadataTask)metadataTask=new Promise((resolve,reject)=>{const timer=setTimeout(()=>finish(new Error('Muat turun audio mengambil masa.')),14000);function finish(error){clearTimeout(timer);audio.removeEventListener('loadedmetadata',ready);audio.removeEventListener('error',failed);error?reject(error):resolve();}const ready=()=>finish(),failed=()=>finish(new Error('Fail audio tidak dapat dimuatkan.'));audio.addEventListener('loadedmetadata',ready,{once:true});audio.addEventListener('error',failed,{once:true});audio.load();}).finally(()=>{metadataTask=null;});await metadataTask;}
// Use only the supplied ms-MY recordings. Device voices must never replace them.
export async function speakMalay(text,{rate=.85,notify=()=>{},button:sourceButton=null}={}){
 stopMalay();const token=generation,key=normal(text),clip=manifest[key];
 const button=sourceButton||[...document.querySelectorAll('[data-audio]')].find(b=>normal(b.dataset.audio)===key);
 if(!clip){notify('Bacaan Bahasa Melayu ini belum tersedia. Kamu boleh membaca teks bersama guru.');return;}
 mark(button);
 try{
  if(!player){player=new Audio(new URL('./assets/audio/bacaan-melayu.mp3',import.meta.url));player.preload='metadata';}
  await waitMetadata(player);if(token!==generation)return;
  player.preservesPitch=true;player.playbackRate=Number(rate)===.7?.83:Number(rate)===1?1.1:1;
  player.currentTime=clip.start;const end=clip.start+clip.duration;await player.play();if(token!==generation)return;
  const check=()=>{if(token!==generation)return;if(player.currentTime>=end-.025||player.ended){player.pause();mark(null);return;}watch=requestAnimationFrame(check);};check();
 }catch(e){if(token!==generation)return;if(player)player.pause();mark(null);notify('Rakaman Bahasa Melayu belum dapat dimainkan. Tekan Dengar untuk mencuba lagi. Teks masih boleh dibaca bersama guru.');}
}
