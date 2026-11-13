'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path'),root=path.resolve(__dirname,'..');
const ctx=vm.createContext({URL,Date,location:{href:'https://example.test/app/'},localStorage:{getItem:()=>null,setItem(){}},window:{},document:{addEventListener(){},documentElement:{dataset:{},style:{}}},matchMedia:()=>({matches:false,addEventListener(){}}),structuredClone,crypto:require('node:crypto').webcrypto,console,setTimeout,clearTimeout,Blob});
for(const n of ['recommendations.js','media.js','document-templates.js','quotes.js','features.js','knowledge.js','flora.js','plant-photos.js','plant-calendar.js','plant-expansion.js','encyclopedia-regions.js','garden-tools.js','encyclopedia.js','manager.js','portfolio.js','irrigation-planner.js','inspections.js','pet-safety.js','garden-planner.js','garden-combinations.js','plant-suppliers.js','egarden-catalog.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('let installPrompt=null')[0],ctx,{filename:'app.js'});const run=s=>vm.runInContext(s,ctx);


run("db.clients=[{id:'c',name:'Обект'}];db.gardenZones=[{id:'z',clientId:'c',name:'Леха',area:20,kind:'bed',light:'Слънце',soil:'Средна',ph:7,region:'sofia',active:true}]");
assert.equal(run('GARDEN_COMBOS.length'),13);
assert.equal(run('new Set(GARDEN_COMBOS.map(c=>c.id)).size'),13);
assert.equal(run('GARDEN_COMBOS.every(c=>c.plants.length>=2&&c.plants.every(([id])=>encFind(id)&&PLANT_CALENDAR[id]))'),true);
assert.equal(run("comboPlantRows(GARDEN_COMBOS[0],20)[0].qty"),8);
assert.throws(()=>run('comboPlantRows(GARDEN_COMBOS[0],0)'));
assert.match(run('comboCard(GARDEN_COMBOS[0])'),/combo-image-button/);
assert.equal((run('comboCard(GARDEN_COMBOS[0])').match(/<img /g)||[]).length,1);
run("state.comboId='sun-purple'");assert.match(run('comboDetail()'),/data-action="enc-open"/);assert.match(run('comboText(GARDEN_COMBOS[0])'),/генерирана концептуална/);
vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('\n').find(l=>l.startsWith('function documentPDFOptions(')),ctx);
run("setupCombinations();const p={clientId:'c',title:'Леха',id:'p',inputs:{comboId:'sun-purple'},zoneSnapshot:{name:'Леха'}};const pref=gpOfferPref(p,[{name:'Растение',unit:'бр.',qty:3,price:2}])");assert.equal(run('pref.comboCoverId'),'sun-purple');assert.equal(run('documentPDFOptions(pref).cover.image'),'./assets/combinations/sun-purple.png');assert.doesNotMatch(run('pref.scope'),/ASPCA|rhs.org/);
run("db.documents.push({...pref,id:'document',date:'2026-11-12',validUntil:'2026-12-12',number:'O-2026-001',status:'Чернова',discount:0});validate(db)");assert.equal(run('JSON.stringify(db.gardenPlans)'), '[]');
const idx=fs.readFileSync(path.join(root,'index.html'),'utf8'),sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');assert.ok(idx.indexOf('garden-combinations.js')<idx.indexOf('./app.js'));assert.match(sw,/garden-combinations.js/);for(const id of run('GARDEN_COMBOS.map(c=>c.id)'))assert.ok(sw.includes('./assets/combinations/'+id+'.png'));
console.log('PASS thirteen original combinations, valid plant dossiers, one hero each, scaling, no silent writes, proposal disclosure, offer cover and offline registrations');

assert.equal(run('COMPOSITION_PLANTS.length'),8);
for(const id of ['silver-lime','green-purple']){
 const count=id==='silver-lime'?3:2;
 assert.equal(run(`comboById('${id}').plants.length`),count);
 run(`state.comboId='${id}'`);assert.match(run('comboDetail()'),/Примерен модул 10/);
 assert.doesNotMatch(run(`comboText(comboById('${id}'))`),/Иван Стерев|ivansterev|0883370200|100 €|48,50/);
 const rows=run(`comboPlantRows(comboById('${id}'),20)`);
 assert.deepEqual(Array.from(rows,r=>r.qty),id==='silver-lime'?[10,20,32]:[10,24]);
 assert.equal(rows.every(r=>r.price===''),true);
 run(`const result_${id.replace('-','_')}=gpCalculate('bed',{area:10,plants:comboPlantRows(comboById('${id}'),10)}, {...db.gardenZones[0],area:10,light:'${id==='silver-lime'?'Полусянка':'Слънце'}'});`);
}
assert.match(run('comboCard(comboById("silver-lime"))'),/3 растителни позиции/);
assert.match(run('comboCard(comboById("green-purple"))'),/2 растителни позиции/);
assert.equal(run('encFind("juniper-green-carpet").latin.includes("communis")'),true);
assert.equal(run('PLANT_CALENDAR["sedum-plum-dazzled"].height'),'15–20');
run('db.plantings.push({id:"cultivar-record",clientId:"c",plantId:"polestar",quantity:5,location:"Леха",notes:"",documentPhotos:[]}); validate(db)');
console.log('PASS exact cultivar dossiers, both scaled plans, editable prices, privacy and stored cultivar validation');

for(const id of ['lonicera-coral','lonicera-gold']){
 run(`state.comboId='${id}'`);
 assert.equal(run(`comboById('${id}').plants.length`),3);
 assert.equal(run(`comboPlantRows(comboById('${id}'),20).every(r=>r.price==='')`),true);
 assert.doesNotMatch(run(`comboText(comboById('${id}'))`),/e-garden|rhs\.org|8,60|6,00/);
 assert.match(run('comboDetail()'),/Отвори|досие/);
}
for(const id of ['lonicera-pileata','heuchera-sanguinea','euonymus-emerald-gold'])assert.equal(run(`ENC_PLANTS.filter(p=>p.id==='${id}').length`),1);
assert.equal(run('ENC_PLANTS.length'),218);
assert.equal(run("encClimate(encFind('euonymus-emerald-gold')).code"),'sheltered');
assert.match(run("PLANT_CALENDAR['lonicera-pileata'].safety"),/не са за консумация/);
assert.notEqual(run("encFind('honeysuckle').id"),run("encFind('lonicera-pileata').id"));
console.log('PASS 218 profiles, two lonicera compositions, distinct taxa, editable scaled offer quantities, winter flags and public text privacy');
