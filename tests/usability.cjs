'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict'),root=path.resolve(__dirname,'..');
let writes=0;const nodes={};const ctx=vm.createContext({URL,location:{href:'https://example.test/greenforce-manager-pro/'},localStorage:{getItem:()=>null,setItem(){writes++}},window:{},document:{addEventListener(){},querySelector:s=>nodes[s]||null},structuredClone,crypto:require('crypto').webcrypto,console,setTimeout,clearTimeout,Blob});
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(!html.includes('usability.js'));assert(!html.includes('usability.css'));
for(const [,name]of html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"\s]*)?"/g)){if(name==='pdf-lib-1.17.1.min.js')continue;let source=fs.readFileSync(path.join(root,name),'utf8');if(name==='app.js')source=source.split('let installPrompt=null')[0];vm.runInContext(source,ctx,{filename:name})}
const run=s=>vm.runInContext(s,ctx);
run("db=blank();db.clients=[{id:'c',name:'ТЕСТ клиент',type:'Къща',address:'София',documentPhotos:['photo']}];state.client='c';const before=JSON.stringify(db)");
const home=run('homeView()');for(const page of ['clients','calendar','visits','documents','contracts','reports','purchases','supplies','finance','equipment','irrigation'])assert(home.includes('data-page=\"'+page+'\"'));
assert(!home.includes('ux-home'));assert(home.indexOf('Предстоящи посещения')<home.indexOf('На обекта'));
const dossier=run('clientView()');for(const tab of ['История','Разходи','Консумативи','Дървета и растения','Поливни системи','Огледи'])assert(dossier.includes('data-value=\"'+tab+'\"'));
assert(dossier.includes('data-photo-id=\"photo\"'));assert.equal(run('JSON.stringify(db)'),run('before'));assert.equal(writes,0);
run("var swReady=false;navigator={onLine:true};hydratePhotos=()=>{};state.page='home'");nodes['#app']={innerHTML:''};run('render()');const nav=nodes['#app'].innerHTML.split('<nav>')[1];for(const page of ['home','calendar','reports','notifications','settings'])assert(nav.includes('data-page=\"'+page+'\"'));
assert(!nav.includes('data-page=\"more\"'));assert.equal(run('KEY'),'greenforce-manager-pro-v1:/greenforce-manager-pro/');
console.log('PASS restored classic dashboard, bottom navigation, client tabs, unchanged data/photo IDs and storage key; redesigned interface no longer loaded.');
