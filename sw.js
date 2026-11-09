'use strict';
const PREFIX='greenforce-pro-'+self.registration.scope+'-';
const CACHE=PREFIX+'v1.6.2';
const FILES=['./','./index.html','./style.css','./app.js','./quotes.js','./features.js','./knowledge.js','./manager.js','./flora.js','./pdf.js','./media.js','./document-templates.js','./manifest.webmanifest','./assets/greenforce-icon-192-v112.png','./assets/greenforce-icon-512-v112.png','./assets/greenforce-maskable-512-v112.png','./assets/garden.jpg','./assets/document-cover.jpeg'];
// Detect the previous application only within this exact repository scope.
async function legacyPresent(){
 if(!await caches.has('gf-manager-v2'))return false;
 const old=await caches.open('gf-manager-v2');
 const response=await old.match(new URL('./index.html',self.registration.scope).href);
 return !!response&&(await response.text()).includes('<title>GreenForce Manager</title>');
}
self.addEventListener('install',e=>e.waitUntil((async()=>{
 const cache=await caches.open(CACHE);await cache.addAll(FILES);
 // A legacy page has no update controls; activate its replacement automatically.
 if(await legacyPresent())await self.skipWaiting();
})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 const migrate=await legacyPresent();
 await Promise.all((await caches.keys()).filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
 if(migrate){const windows=await self.clients.matchAll({type:'window'});windows.filter(c=>c.url.startsWith(self.registration.scope)).forEach(c=>{c.navigate(c.url).catch(()=>null)});}
 // Legacy caches and local data are left intact; other projects may use them.
})()));
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(e.request,{ignoreSearch:true});if(hit)return hit;try{return await fetch(e.request)}catch(err){if(e.request.mode==='navigate')return cache.match('./index.html');return Response.error()}})())});
