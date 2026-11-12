'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path'),root=path.resolve(__dirname,'..');
const ctx=vm.createContext({URL,Date,location:{href:'https://example.test/app/'},localStorage:{getItem:()=>null,setItem(){}},window:{},document:{addEventListener(){},documentElement:{dataset:{},style:{}}},matchMedia:()=>({matches:false,addEventListener(){}}),structuredClone,crypto:require('node:crypto').webcrypto,console,setTimeout,clearTimeout,Blob});
for(const n of ['recommendations.js','media.js','document-templates.js','quotes.js','features.js','knowledge.js','flora.js','plant-photos.js','plant-calendar.js','plant-expansion.js','encyclopedia-regions.js','garden-tools.js','encyclopedia.js','manager.js','portfolio.js','irrigation-planner.js','inspections.js','pet-safety.js','garden-planner.js','garden-combinations.js','plant-suppliers.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('let installPrompt=null')[0],ctx,{filename:'app.js'});const run=s=>vm.runInContext(s,ctx);



vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('\n').find(l=>l.startsWith('function documentPDFOptions(')),ctx);
run("db.clients=[{id:'c',name:'Обект'}]; setupCombinations(); setupPlantSuppliers()");
assert.equal(run('PLANT_SUPPLIERS.length'),49);assert.equal(run('new Set(PLANT_SUPPLIERS.map(r=>r.id)).size'),49);
assert.equal(run('PLANT_SUPPLIERS.every(r=>new URL(r.url).protocol==="https:"&&r.checked==="2026-11-12")'),true);
assert.match(run('supplierPanel(["woodland-sage"])'),/Потвърди по телефон/);assert.match(run('supplierPanel(["perennial-aster"])'),/Callistephus/);
assert.equal(run('supplierRows(["echinacea","rudbeckia"]).length'),2);
assert.match(run('suppliersView()'),/Вътрешен списък/);assert.match(run('supplierPanel()'),/target="_blank" rel="noopener noreferrer"/);
run('const before=JSON.stringify(db); for(const c of GARDEN_COMBOS){const p={id:c.id,clientId:"c",title:c.name,inputs:{comboId:c.id},zoneSnapshot:{name:"Зона"}},r=gpOfferPref(p,[{name:"Растение",unit:"бр.",qty:2,price:3}]);const publicOutput=comboText(c)+JSON.stringify(documentPDFOptions(r))+JSON.stringify(r);for(const s of PLANT_SUPPLIERS)if(publicOutput.includes(s.url)||publicOutput.includes(s.shop))throw Error("Supplier leak")}');
assert.equal(run('JSON.stringify(db)===before'),true);
assert.equal(run('schemas.documents.some(f=>/supplier|procurement/i.test(f.key))'),false);
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');assert.match(css,/@media print\{.procurement-private\{display:none!important/);
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.ok(index.indexOf('plant-suppliers.js')<index.indexOf('./app.js'));assert.match(fs.readFileSync(path.join(root,'sw.js'),'utf8'),/plant-suppliers.js/);
console.log('PASS 49 internal supplier links, source dates and caveats, scoped filtering, no database writes, no supplier fields or links in offer/PDF output, print hiding and offline registration');

assert.equal(run('PLANT_SUPPLIERS.filter(r=>r.shop.startsWith("Иван Стерев")).length'),37);
assert.equal(run('PLANT_SUPPLIERS.filter(r=>r.historical).length'),6);
assert.equal(run('PLANT_SUPPLIERS.filter(r=>r.source==="Снимка на Facebook публикация").length'),2);
assert.equal(run('supplierRows(["pulmonaria"]).length'),3);
assert.equal(run('supplierRows(["hydrangea"]).length'),2);
assert.equal(run('supplierRows(["sedum"]).length'),1);
assert.equal(run('supplierRows(["cotoneaster"]).length'),0);
run('state.supplierShop="Иван Стерев · Павликени";state.supplierCategory="";state.supplierStatus="historical"');assert.equal(run('PLANT_SUPPLIERS.filter(supplierMatches).length'),6);
run('state.supplierStatus="";state.supplierSearch="Polestar"');assert.equal(run('PLANT_SUPPLIERS.filter(supplierMatches).length'),1);
run('state.supplierSearch="";state.supplierStatus="photo"');assert.equal(run('PLANT_SUPPLIERS.filter(supplierMatches).length'),2);
assert.match(run('supplierCard(PLANT_SUPPLIERS.find(r=>r.id==="sterev-golden-gem"))'),/Историческа цена/);
assert.match(run('supplierCard(PLANT_SUPPLIERS.find(r=>r.id==="sterev-bellis"))'),/tel:0883370200/);
console.log('PASS cultivar counts, 6 historic records, 2 screenshot records, combined filters, multiple suppliers per plant and distinct species kept separate');

assert.equal(run('supplierRows(comboById("silver-lime").plants.map(p=>p[0])).length'),3);
assert.equal(run('supplierRows(comboById("green-purple").plants.map(p=>p[0])).length'),2);
assert.equal(run('supplierRows(comboById("green-purple").plants.map(p=>p[0])).every(r=>r.shop.startsWith("Иван Стерев"))'),true);
console.log('PASS both new combinations resolve to exact supplier cultivars only');
