'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict'),root=path.resolve(__dirname,'..');
let writes=0,registers=0,confirmations=[],messages=[];const status={textContent:''};
const ctx=vm.createContext({URL,location:{href:'https://example.test/greenforce-manager-pro/'},localStorage:{getItem:()=>null,setItem(){writes++}},window:{},document:{addEventListener(){},querySelector:()=>status},structuredClone,crypto:require('crypto').webcrypto,console,setTimeout,clearTimeout,Blob});
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const [,name]of html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"\s]*)?"/g)){if(name==='pdf-lib-1.17.1.min.js')continue;let source=fs.readFileSync(path.join(root,name),'utf8');if(name==='app.js')source=source.split('let installPrompt=null')[0];vm.runInContext(source,ctx,{filename:name})}
const run=s=>vm.runInContext(s,ctx);run('var registration=null,swReady=false;db=blank();const originalRecords=JSON.stringify(db)');ctx.toast=t=>messages.push(t);ctx.confirmAction=(title,text,fn)=>confirmations.push(fn);
const ready=new Promise(()=>{}),reg=(values={})=>({active:{},waiting:null,installing:null,addEventListener(){},async update(){},...values});
let replacement;ctx.navigator={serviceWorker:{ready,async register(script,options){registers++;assert.equal(script,'./sw.js');assert.equal(options.scope,'./');assert.equal(options.updateViaCache,'none');return replacement;}}};
(async()=>{
 replacement=reg();await run('checkApplicationUpdate()');assert.equal(registers,1);assert.equal(run('registration'),replacement);assert(messages.at(-1).includes('Няма открита'));
 // Empty/failed worker registrations must be re-created without unregistering or clearing data.
 ctx.failed=reg({active:null,async update(){throw Error('Stale handle must not be updated')}});run('registration=failed');replacement=reg();await run('checkApplicationUpdate()');assert.equal(registers,2);
 // A formerly active handle can become invalid between inspection and update.
 let posted=0;const waiting={postMessage(message){assert.equal(message,'SKIP_WAITING');posted++;}};ctx.invalid=reg({async update(){throw Object.assign(Error('invalid state'),{name:'InvalidStateError'})}});run('registration=invalid');replacement=reg({waiting});await run('checkApplicationUpdate()');assert.equal(registers,3);assert.equal(confirmations.length,1);assert.equal(posted,0);confirmations.pop()();assert.equal(posted,1);
 // A ready waiting worker does not need another network update.
 ctx.existing=reg({waiting,async update(){throw Error('Waiting update must be offered directly')}});run('registration=existing');await run('checkApplicationUpdate()');assert.equal(registers,3);assert.equal(confirmations.length,1);
 // Genuine network errors are shown, without retry loops or replacing the ledger.
 ctx.network=reg({async update(){throw Error('network unavailable')}});run('registration=network');await assert.rejects(()=>run('checkApplicationUpdate()'),/network unavailable/);assert.equal(registers,3);
 // A failed install gives a finite, useful error instead of claiming success.
 const worker={state:'installing',addEventListener(type,fn){this.listener=fn;setTimeout(()=>{this.state='redundant';fn();},0)},removeEventListener(){}};ctx.installing=reg({installing:worker});run('registration=installing');await assert.rejects(()=>run('checkApplicationUpdate()'),/не се изтегли/);
 assert.equal(run('JSON.stringify(db)'),run('originalRecords'));assert.equal(writes,0);
 console.log('PASS update recovery: missing/failed registrations, stale active handle, waiting-worker approval, no automatic activation, real network failures, failed installation, same scope and no data/cache deletion.');
})().catch(e=>{console.error(e);process.exitCode=1});
