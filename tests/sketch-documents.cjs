'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');const root=path.resolve(__dirname,'..'),ctx=vm.createContext({URL,location:{href:'https://example.test/app/'},localStorage:{getItem:()=>null,setItem:()=>{}},window:{},document:{addEventListener(){}},structuredClone,crypto:require('node:crypto').webcrypto,console,setTimeout,clearTimeout});
for(const n of ['recommendations.js','media.js','document-templates.js','quotes.js','features.js','knowledge.js','flora.js','manager.js','portfolio.js','irrigation-planner.js','inspections.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx);vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('let installPrompt=null')[0],ctx);const run=s=>vm.runInContext(s,ctx);

(async()=>{
run("MediaStore.get=async id=>'data:image/jpeg;base64,YQ==';MediaStore.putMany=async()=>{};db=blank();db.clients=[{id:'c',name:'QA'}];");
for(const template of run('GFTemplates.names')){
const groups=await run(`recordImages({template:${JSON.stringify(template)},documentPhotos:['normal','sketch'],sketchPhotoIds:['sketch']})`);assert.equal(groups.filter(g=>g.images.length).length,2);const sketch=groups.find(g=>g.fit==='contain');assert(sketch);assert.equal(sketch.images.length,1);assert.equal(sketch.fullPage,true);
}
run("photoDraft={table:'documents',groups:{documentPhotos:[{data:'data:image/jpeg;base64,YQ==',sketch:true},{id:'existing'}]}};const record={};");await run("commitPhotos('documents',record,{documentPhotos:['existing']})");assert.equal(run('record.sketchPhotoIds.length'),1);assert.equal(run('record.sketchPhotoIds[0]'),run('record.documentPhotos[0]'));assert.notEqual(run('record.documentPhotos[0]'),'existing');
console.log('PASS independent sketch snapshot marking and full uncropped page for all document templates');
})().catch(e=>{console.error(e);process.exitCode=1});
