'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),pdfLib=require(path.join(root,'pdf-lib-1.17.1.min.js'));
const ctx=vm.createContext({URL,location:{href:'https://example.test/app/'},localStorage:{getItem:()=>null},window:{},document:{addEventListener(){}},structuredClone,crypto:require('node:crypto').webcrypto,console,setTimeout,clearTimeout,Blob,atob,Uint8Array,PDFLib:pdfLib});
for(const n of ['recommendations.js','media.js','document-templates.js','quotes.js','features.js','knowledge.js','flora.js','manager.js','portfolio.js','irrigation-planner.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx);
vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('let installPrompt=null')[0],ctx);
const run=s=>vm.runInContext(s,ctx);
(async()=>{
run(`db=blank();const old=blank();delete old.recommendations;validate(old);if(old.recommendations.length)throw Error('migration');`);
run(`db.clients=[{id:'c',name:'QA'}];const d={id:'d',type:'Оферта',number:'О-2026-001',title:'QA',clientId:'c',date:'2026-11-09',validUntil:'2026-12-09',items:'Работа | 1 | 100',discount:10,includePriceProtocol:true,extraServices:GFTemplates.rates};db.documents=[d];`);
for(const template of ['Свободен документ','Оферта GreenForce','Сезонен договор GreenForce','Годишен договор GreenForce'])for(const basis of ['month','contract']){
run(`Object.assign(d,{template:${JSON.stringify(template)},priceBasis:${JSON.stringify(basis)},periodStart:'2027-03-01',periodEnd:'2027-11-30',visitsPerMonth:2,paymentDays:7});`);
for(const text of ['2 седмици','15 работни дни след извършване на огледа','20 работни дни след извършване на огледа','По банков път'])assert(run('documentText(d)').includes(text));
assert.equal(run('docTotal(d)'),90);run('d.includePriceProtocol=false');assert(!run('documentText(d)').includes('15 работни дни'));run('d.includePriceProtocol=true');
}
console.log('PASS exact architect deadlines for every template and basis, opt-out and unchanged price');
run(`db.recommendations=[{id:'ref',title:'QA оригинал',description:'Описание извън оригинала',files:[{id:'pdf',name:'original.pdf',type:'application/pdf'}]}];d.recommendationIds=['ref'];d.includeRecommendations=true;d.recommendationContext=true;validate(db);`);
run("d.recommendationIds=['missing']");assert.throws(()=>run('validate(db)'),/препоръка/);run("d.recommendationIds=['ref','ref']");assert.throws(()=>run('validate(db)'),/препоръка/);run("d.recommendationIds=['ref']");
const original=await pdfLib.PDFDocument.create();original.addPage([321,432]);original.setTitle('QA untouched original');const bytes=await original.save(),data='data:application/pdf;base64,'+Buffer.from(bytes).toString('base64');ctx.fileData=data;
run('db.media={pdf:fileData};checkArchiveMedia(db)');run('db.media.pdf="data:text/html;base64,AAAA"');assert.throws(()=>run('checkArchiveMedia(db)'),/невалидни/);run('db.media.pdf=fileData');
run('const store=new Map([["pdf",fileData]]);MediaStore.get=async id=>store.get(id);MediaStore.putMany=async rows=>rows.forEach(r=>store.set(r.id,r.data));');
await run('prepareRestoredMedia(db)');assert.notEqual(run('db.recommendations[0].files[0].id'),'pdf');assert.equal(await run('MediaStore.get(db.recommendations[0].files[0].id)'),data);run('validate(db)');
const base=await pdfLib.PDFDocument.create();base.addPage([595.28,841.89]);ctx.baseBlob=new Blob([await base.save()],{type:'application/pdf'});run('createPDF=async()=>baseBlob');
const attachments=await run('recommendationAttachments(d)');ctx.attachments=attachments;
const combined=await run('appendRecommendationPDF(baseBlob,attachments,{})'),result=await pdfLib.PDFDocument.load(await combined.arrayBuffer());assert.equal(result.getPageCount(),3);assert.equal(result.getPage(2).getWidth(),321);
const names=result.catalog.lookup(pdfLib.PDFName.of('Names'),pdfLib.PDFDict),embedded=names.lookup(pdfLib.PDFName.of('EmbeddedFiles'),pdfLib.PDFDict).lookup(pdfLib.PDFName.of('Names'),pdfLib.PDFArray),spec=result.context.lookup(embedded.get(1),pdfLib.PDFDict),stream=spec.lookup(pdfLib.PDFName.of('EF'),pdfLib.PDFDict).lookup(pdfLib.PDFName.of('F'),pdfLib.PDFRawStream),preserved=pdfLib.decodePDFRawStream(stream).decode();assert.deepEqual(Buffer.from(preserved),Buffer.from(bytes));
run('d.includeRecommendations=false');assert.equal((await run('recommendationAttachments(d)')).length,0);
console.log('PASS old backup migration, missing/duplicate selection rejected, media backup/restore and new IDs, merged pages and byte-identical embedded PDF original');
})().catch(e=>{console.error(e);process.exitCode=1});
