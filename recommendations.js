'use strict';
// Private customer originals stay in IndexedDB, never in the public app assets.
const RECOMMENDATION_MAX_FILES=10,RECOMMENDATION_MAX_BYTES=12*1024*1024;
let recommendationDraft=null,recommendationBusy=false;
function validateRecommendations(data){
 const refs=new Set((data.recommendations||[]).map(r=>r.id));
 for(const r of data.recommendations||[]){
  if(typeof r.title!=='string'||!r.title.trim()||r.title.length>300||typeof r.description!=='string'||r.description.length>5000||!Array.isArray(r.files)||!r.files.length||r.files.length>RECOMMENDATION_MAX_FILES)throw Error('Невалидна препоръка.');
  for(const f of r.files)if(!f||typeof f.id!=='string'||!f.id||f.id.length>100||typeof f.name!=='string'||f.name.length>300||!['application/pdf','image/jpeg','image/png','image/webp'].includes(f.type))throw Error('Невалиден файл на препоръка.');
 }
 for(const d of data.documents){if(d.recommendationIds&&(!Array.isArray(d.recommendationIds)||d.recommendationIds.length>5||new Set(d.recommendationIds).size!==d.recommendationIds.length||d.recommendationIds.some(id=>!refs.has(id))))throw Error('Липсваща или невалидна препоръка към документ.');}
}
function recommendationFields(table,r){
 if(!['documents','recommendations'].includes(table))return '';
 if(table==='documents')return `<section class="photo-section full"><h3>Препоръки от клиенти</h3><label class="check"><input type="checkbox" name="includeRecommendations" ${r.includeRecommendations?'checked':''}>Приложи препоръки към PDF</label><label class="check"><input type="checkbox" name="recommendationContext" ${r.recommendationContext!==false?'checked':''}>Добави описание на обекта преди оригинала</label>${db.recommendations.map(ref=>`<label class="check recommendation-choice"><input type="checkbox" name="recommendationIds" value="${esc(ref.id)}" ${(r.recommendationIds||[]).includes(ref.id)?'checked':''}><span><strong>${esc(ref.title)}</strong><small>${esc(ref.description)} · ${ref.files.length} файла</small></span></label>`).join('')||'<p>Няма запазени препоръки. Добави ги от меню „Препоръки“, след това ги избирай за всеки документ.</p>'}<small>До 5 препоръки към документ. Оригиналите се прилагат без редакция. Списъкът се управлява от меню „Препоръки“.</small></section>`;
 recommendationDraft=(r.files||[]).map(file=>({...file}));
 return `<section class="photo-section full"><h3>Оригинални файлове</h3><div id="recommendation-files"></div><label class="secondary wide photo-upload">${icon('plus')} Добави PDF или снимки<input id="recommendation-upload" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" multiple></label><label class="secondary wide photo-upload">${icon('plus')} Снимай препоръка<input id="recommendation-camera" type="file" accept="image/*" capture="environment"></label><small>До 10 файла, всеки до 12 MB. Подписаните PDF се пазят и като оригинални файлови приложения в крайния PDF. Описанието остава извън оригинала.</small></section>`;
}
function paintRecommendationFiles(){const el=document.getElementById('recommendation-files');if(el)el.innerHTML=(recommendationDraft||[]).map((f,i)=>`<div class="recommendation-file"><span>${i+1}. ${esc(f.name)}</span><div class="actions"><button type="button" class="secondary" data-recommendation-view="${i}">Преглед</button><button type="button" class="secondary" data-recommendation-remove="${i}" aria-label="Премахни файл ${i+1}">Премахни</button></div></div>`).join('')||'<p>Няма добавени файлове.</p>'}
function recommendationDataBytes(data){return Uint8Array.from(atob(data.slice(data.indexOf(',')+1)),c=>c.charCodeAt(0))}
function readRecommendationFile(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(Error('Файлът не може да се прочете.'));reader.readAsDataURL(file)})}
async function addRecommendationFiles(input){
 const files=Array.from(input.files);input.value='';if(!recommendationDraft)return;
 if(recommendationBusy)throw Error('Изчакай зареждането на файловете.');
 if(files.length+recommendationDraft.length>RECOMMENDATION_MAX_FILES)throw Error('Можеш да добавиш до 10 файла към една препоръка.');
 const draft=recommendationDraft;recommendationBusy=true;
 try{const pending=[];for(const file of files){
  if(!['application/pdf','image/jpeg','image/png','image/webp'].includes(file.type)||file.size>RECOMMENDATION_MAX_BYTES||!file.size)throw Error('Избери PDF, JPG, PNG или WebP до 12 MB.');
  const data=await readRecommendationFile(file);
  if(file.type==='application/pdf'){const original=await PDFLib.PDFDocument.load(recommendationDataBytes(data));if(original.getPageCount()>30)throw Error('Един PDF може да съдържа до 30 страници.');}
  else {const image=await createImageBitmap(file);image.close();}
  pending.push({id:uid(),name:file.name.slice(0,300),type:file.type,data});
 }if(recommendationDraft===draft){draft.push(...pending);paintRecommendationFiles()}}finally{recommendationBusy=false}
}
async function commitRecommendations(table,r,old,form){
 if(table==='documents'){r.includeRecommendations=form.elements.includeRecommendations.checked;r.recommendationContext=form.elements.recommendationContext.checked;r.recommendationIds=new FormData(form).getAll('recommendationIds');if(r.includeRecommendations&&!r.recommendationIds.length)throw Error('Избери поне една препоръка или изключи приложението.');if(r.recommendationIds.length>5)throw Error('Избери до 5 препоръки.');return {created:[],obsolete:[]}}
 if(table!=='recommendations')return {created:[],obsolete:[]};
 if(recommendationBusy)throw Error('Изчакай зареждането на файловете.');
 if(!recommendationDraft?.length)throw Error('Добави оригиналната препоръка като PDF или снимка.');
 r.files=recommendationDraft.map(({id,name,type})=>({id,name,type}));
 validateRecommendations({...db,recommendations:[...db.recommendations.filter(x=>x.id!==r.id),r]});
 const created=recommendationDraft.filter(f=>f.data);await MediaStore.putMany(created.map(f=>({id:f.id,data:f.data})));
 return {created:created.map(f=>f.id),obsolete:(old?.files||[]).map(f=>f.id).filter(id=>!r.files.some(f=>f.id===id))};
}
function recommendationsView(){return `<div class="notice">Запази препоръките веднъж и ги избирай при създаване на оферта или договор. Съхраняват се на това устройство и се включват в резервното копие.</div><div class="card">${db.recommendations.map(r=>`<button class="list-row" data-action="edit" data-table="recommendations" data-id="${esc(r.id)}"><div class="avatar">${icon('doc')}</div><div><strong>${esc(r.title)}</strong><small>${esc(r.description)}</small><small>${r.files.length} оригинални файла</small></div>${icon('chevron')}</button>`).join('')||empty('Няма добавени препоръки.')}</div>${btn('Нова препоръка','new','plus','primary wide','data-table="recommendations"')}`}
async function recommendationAttachments(r){
 if(!r.includeRecommendations)return [];
 if(!r.recommendationIds?.length)throw Error('Няма избрани препоръки.');
 const result=[];for(const id of r.recommendationIds){const ref=db.recommendations.find(x=>x.id===id);if(!ref)throw Error('Липсва избрана препоръка.');const files=[];for(const f of ref.files){const data=await MediaStore.get(f.id);if(!data)throw Error('Липсва оригинален файл на препоръка. Възстанови го от архив.');files.push({...f,data})}result.push({title:ref.title,description:r.recommendationContext?ref.description:'',files})}return result;
}
async function appendRecommendationPDF(base,attachments,company){
 if(!attachments.length)return base;
 const output=await PDFLib.PDFDocument.load(await base.arrayBuffer());let number=0;
 for(const ref of attachments){
  const lead=await createPDF('Препоръки от клиенти','',{company,blocks:[{kind:'heading',text:'Препоръки от клиенти'},{kind:'heading',text:ref.title},...(ref.description?[{kind:'text',text:ref.description}]:[]),{kind:'text',text:'Следва оригиналната препоръка от клиента, приложена без редакция на текста. Оригиналните файлове са включени и като файлови приложения към този PDF.'}]});
  const leadPDF=await PDFLib.PDFDocument.load(await lead.arrayBuffer());for(const p of await output.copyPages(leadPDF,leadPDF.getPageIndices()))output.addPage(p);
  for(const file of ref.files){
   const bytes=recommendationDataBytes(file.data);number++;
   if(file.type==='application/pdf'){const original=await PDFLib.PDFDocument.load(bytes);if(output.getPageCount()+original.getPageCount()>200)throw Error('Документът с препоръките надхвърля 200 страници.');for(const p of await output.copyPages(original,original.getPageIndices()))output.addPage(p)}
   else {let image;if(file.type==='image/webp'){const source=new Image();source.src=file.data;await source.decode();const canvas=document.createElement('canvas');canvas.width=source.naturalWidth;canvas.height=source.naturalHeight;canvas.getContext('2d').drawImage(source,0,0);const jpg=canvas.toDataURL('image/jpeg',.95);image=await output.embedJpg(recommendationDataBytes(jpg))}else image=await(file.type==='image/png'?output.embedPng(bytes):output.embedJpg(bytes));const page=output.addPage([595.28,841.89]),fit=image.scaleToFit(555.28,801.89);page.drawImage(image,{x:(595.28-fit.width)/2,y:(841.89-fit.height)/2,width:fit.width,height:fit.height})}
   const extension=file.type==='application/pdf'?'pdf':file.type.split('/')[1];await output.attach(bytes,`recommendation-${number}.${extension}`,{mimeType:file.type,description:file.name});
  }
 }
 return new Blob([await output.save()],{type:'application/pdf'});
}
function setupRecommendations(){
 menu.push(['recommendations','Препоръки','doc']);titles.recommendations='Препоръки от клиенти';views.recommendations=recommendationsView;
 document.addEventListener('change',async e=>{if(['recommendation-upload','recommendation-camera'].includes(e.target.id))try{await addRecommendationFiles(e.target)}catch(err){errorForm('Файлът не е добавен: '+err.message)}});
 document.addEventListener('click',async e=>{const remove=e.target.closest('[data-recommendation-remove]'),view=e.target.closest('[data-recommendation-view]');try{if(remove){if(recommendationBusy)return;recommendationDraft.splice(Number(remove.dataset.recommendationRemove),1);paintRecommendationFiles()}if(view){const f=recommendationDraft[Number(view.dataset.recommendationView)],data=f.data||await MediaStore.get(f.id);if(!data)throw Error('Файлът не е намерен.');if(f.type.startsWith('image/'))await viewPhoto(data,f.name);else download(new Blob([recommendationDataBytes(data)],{type:f.type}),f.name)}}catch(err){errorForm(err.message)}});
}
