'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict'),root=path.resolve(__dirname,'..');
let writes=0;const listeners={},nodes={};
const ctx=vm.createContext({URL,location:{href:'https://example.test/greenforce-manager-pro/'},localStorage:{getItem:()=>null,setItem(){writes++}},window:{scrollTo(){}},document:{addEventListener(k,fn){(listeners[k]??=[]).push(fn)},querySelector:s=>nodes[s]||null},structuredClone,crypto:require('crypto').webcrypto,console,setTimeout,clearTimeout,Blob});
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,name] of html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"\s]*)?"/g)){if(name==='pdf-lib-1.17.1.min.js')continue;let source=fs.readFileSync(path.join(root,name),'utf8');if(name==='app.js')source=source.split('let installPrompt=null')[0];vm.runInContext(source,ctx,{filename:name})}
const run=s=>vm.runInContext(s,ctx);
run(`db=blank();state.month='2026-11';db.clients=[{id:'a',name:'Клиент <А>',address:'София',type:'Къща',documentPhotos:['same-photo']},{id:'b',name:'Друг клиент'}];
db.visits=[{id:'v',clientId:'a',date:'2026-11-25',time:'09:00',service:'Монтаж',status:'Изпълнено',amount:300,discount:0,beforePhotos:['same-photo'],afterPhotos:['after'],irrigationSystemId:'irr'},{id:'other',clientId:'b',date:'2026-11-25',time:'10:00',service:'Чужда услуга',status:'Изпълнено',amount:400,discount:0}];
db.payments=[{id:'pay',visitId:'v',date:'2026-11-25',method:'В брой',amount:120},{id:'pay-other',visitId:'other',date:'2026-11-25',method:'В брой',amount:200}];
db.expenses=[{id:'e',clientId:'a',visitId:'v',date:'2026-11-25',category:'Консумативи',description:'Тръби',amount:40,receiptPhotos:['invoice']},{id:'alloc',clientId:'a',date:'2026-11-25',category:'Семейство',description:'Резерв',amount:20,flowType:'Разпределение на остатъка'}];
db.purchases=[{id:'p',name:'Тръби',unit:'m',quantity:20,date:'2026-11-25',clientId:'a',visitId:'v',amount:40,done:true,expenseId:'e',receiptPhotos:['invoice']}];
db.irrigation=[{id:'irr',name:'ТЕСТ система',clientId:'a',zones:0,zoneConfigs:[],buildItems:[],notes:'Записки',documentPhotos:['note']}];
db.equipment=[{id:'machine',name:'Косачка',initialHours:0,nextService:'2026-12-01'}];
db.documents=[{id:'doc',clientId:'a',type:'Оферта',number:'О-2026-001',date:'2026-11-25',validUntil:'2026-12-25',title:'Монтаж',items:'Тръби | 20 | 2',discount:0}];
const before=JSON.stringify(db);setupUsability();state.client='a';`);
assert.equal(writes,0);assert.equal(run('JSON.stringify(db)'),run('before'));
assert.equal(run("uxClientFigures('a').income"),120);assert.equal(run("uxClientFigures('a').expense"),40);assert.equal(run("uxClientFigures('a').due"),180);
for(const tab of ['overview','visits','projects','documents','finance','photos']){run(`state.uxClientTab='${tab}'`);const page=run('views.client()');assert(page.includes('Клиент &lt;А&gt;'));assert(!page.includes('Чужда услуга'));if(tab==='documents')assert.equal((page.match(/data-action="clientpdf"/g)||[]).length,1)}
run("state.uxClientTab='photos'");const gallery=run('views.client()');assert.equal((gallery.match(/data-photo-id="same-photo"/g)||[]).length,1);assert.equal((gallery.match(/data-photo-id="invoice"/g)||[]).length,1);
run("state.system='irr'");for(const tab of ['overview','technical','materials','journal','finance','photos']){run(`state.uxIrrTab='${tab}'`);const page=run('views.irrigationSystem()');assert(page.includes('ТЕСТ система'));if(tab==='materials'){assert(page.includes('Бюджет за изграждане'));assert(page.includes('irr-offer'))}if(tab==='photos'){assert(page.includes('data-photo-id="invoice"'));assert(page.includes('data-photo-id="note"'))}if(tab==='finance')assert(page.includes('Добави получено плащане'))}
assert.equal(run("irrigationDossierData('irr').cost"),40);assert.equal(run("irrigationDossierData('irr').income"),120);
for(const type of ['Оферта','Договор','Протоколи','Огледи']){run(`state.page='documents';state.tab='${type}';state.uxDocClient='a'`);assert(!run('views.documents()').includes('Чужда услуга'))}
run("state.uxEquipment='machine'");assert(run('views.equipmentDossier()').includes('Косачка'));
for(const p of ['calendar','visits','notifications','seasonal'])assert.equal(run(`uxBottomActive('${p}')`),'calendar');for(const p of ['finance','reports','billing','subscriptions','profitability','trips'])assert.equal(run(`uxBottomActive('${p}')`),'finance');
assert.equal(run("uxBottomActive('client')"),'clients');assert.equal(run("uxBottomActive('irrigationSystem')"),'more');
run("state.opsVisit='v'");const field=run('views.fieldWork()');assert(field.includes('Работни стъпки и дневници'));assert(field.includes('data-action="ux-pay"'));assert(field.includes('data-action="ux-visit-expense"'));assert(!field.includes('Чужда услуга'));
run("state.opsVisit='';state.uxPurchaseStatus='pending'");assert(!run('views.purchases()').includes('data-id="p"'));run("state.uxPurchaseStatus='bought'");assert(run('views.purchases()').includes('data-id="p"'));
run("state.uxEquipment='machine'");assert(run('views.equipmentDossier()').includes('Косачка'));
const home=run('views.home()');assert(home.indexOf('Предстоящи посещения')<home.indexOf('ux-payment'));assert.equal((home.match(/data-page="services"/g)||[]).length,0);
for(const p of ['services','documents','projects','purchases','equipment','workPlan','settings','inspections','object-plants','portfolio','recommendations','business-plan','dataSafety','globalSearch','plant-suppliers','encyclopedia','combinations','irrigation-catalog'])assert(run('views.more()').includes('data-page="'+p+'"'));
assert.equal(run('JSON.stringify(db)'),run('before'));assert.equal(writes,0);
run("var swReady=false;navigator={onLine:true};hydratePhotos=()=>{};state.page='finance';state.tab='Приходи';");nodes['#app']={innerHTML:''};run('render()');assert.equal((nodes['#app'].innerHTML.match(/class="ux-section-nav"/g)||[]).length,1);assert(nodes['#app'].innerHTML.includes('data-page="finance" class="active"'));
run("navPush=()=>{};render=()=>{};go('contracts')");assert.equal(run('state.page'),'documents');assert.equal(run('state.tab'),'Договор');run("go('billing')");assert.equal(run('state.page'),'subscriptions');assert.equal(run('state.uxSubscriptionTab'),'payments');
console.log('PASS unified navigation, all former modules reachable, client isolation and totals, allocation exclusion, invoice/photo deduplication, six client/system sections, one dossier export, document filters, original ledgers unchanged and zero migration writes.');
