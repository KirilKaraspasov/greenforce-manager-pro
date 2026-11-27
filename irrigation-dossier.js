'use strict';
// One system dossier, backed by the existing visit/payment/expense records.
function irrigationLinkedSystem(r,data=db){
 if(r.irrigationSystemId)return r.irrigationSystemId;
 const logSystems=[...new Set((data.irrigationLogs||[]).filter(l=>l.visitId===r.id).map(l=>l.systemId))];
 return logSystems.length===1?logSystems[0]:'';
}
function validateIrrigationDossierLinks(data){
 const systems=data.irrigation||[],visits=data.visits||[],logs=data.irrigationLogs||[],expenses=data.expenses||[],purchases=data.purchases||[];
 for(const table of ['visits','expenses','purchases','documents'])for(const r of data[table]||[]){
  if(r.irrigationSystemId!==undefined&&typeof r.irrigationSystemId!=='string')throw Error('Невалидна връзка към поливна система.');
  if(!r.irrigationSystemId)continue;
  const s=systems.find(s=>s.id===r.irrigationSystemId);
  // Issued quotes keep a snapshot even when their original source was removed.
  if(table==='documents'&&(r.irrigationQuote||!s))continue;
  if(!s||s.clientId!==r.clientId)throw Error('Поливната система трябва да е за клиента на записа.');
  if(table==='expenses'&&isAllocation(r))throw Error('Към поливна система се свързва разход за дейността.');
  if(r.visitId){const v=visits.find(v=>v.id===r.visitId),sid=v&&irrigationLinkedSystem(v,data);if(sid&&sid!==s.id)throw Error('Посещението е за друга поливна система.');}
 }
 const byVisit=new Map();for(const l of logs){
  const s=systems.find(s=>s.id===l.systemId);if(!s)continue;
  if(l.visitId){const v=visits.find(v=>v.id===l.visitId);if(v?.irrigationSystemId&&v.irrigationSystemId!==s.id)throw Error('Дневникът и посещението трябва да са за една поливна система.');if(byVisit.has(l.visitId)&&byVisit.get(l.visitId)!==s.id)throw Error('Едно посещение не може да се отчита към две поливни системи.');byVisit.set(l.visitId,s.id);}
  if(l.expenseId){const e=expenses.find(e=>e.id===l.expenseId);if(e?.irrigationSystemId&&e.irrigationSystemId!==s.id)throw Error('Разходът в дневника е за друга поливна система.');const v=e?.visitId&&visits.find(v=>v.id===e.visitId);if(v&&irrigationLinkedSystem(v,data)&&irrigationLinkedSystem(v,data)!==s.id)throw Error('Разходът и посещението в дневника са за различни системи.');}
 }
 const expenseClaims=new Map();const claim=(key,id)=>{if(!key||!id)return;const set=expenseClaims.get(key)||new Set();set.add(id);expenseClaims.set(key,set);if(set.size>1)throw Error('Един разход не може да се отчита към две поливни системи.');};
 for(const e of expenses){claim(e.id,e.irrigationSystemId);const v=visits.find(v=>v.id===e.visitId);if(v)claim(e.id,irrigationLinkedSystem(v,data));}
 for(const l of logs)claim(l.expenseId,l.systemId);
 for(const p of purchases){const v=visits.find(v=>v.id===p.visitId);claim(p.expenseId,p.irrigationSystemId||(v&&irrigationLinkedSystem(v,data)));}
 for(const p of purchases){if(!p.expenseId)continue;const e=expenses.find(e=>e.id===p.expenseId);if(!e)continue;const pVisit=visits.find(v=>v.id===p.visitId),eVisit=visits.find(v=>v.id===e.visitId);const a=p.irrigationSystemId||(pVisit&&irrigationLinkedSystem(pVisit,data)),b=e.irrigationSystemId||(eVisit&&irrigationLinkedSystem(eVisit,data));if(a&&b&&a!==b)throw Error('Покупката и отчетеният разход са за различни поливни системи.');}
}
function irrigationDossierData(id,data=db){
 const system=(data.irrigation||[]).find(s=>s.id===id);if(!system)throw Error('Поливната система липсва.');
 const same=r=>r.clientId===system.clientId,logs=(data.irrigationLogs||[]).filter(l=>l.systemId===id&&same(l));
 const visits=(data.visits||[]).filter(v=>same(v)&&irrigationLinkedSystem(v,data)===id),visitIds=new Set(visits.map(v=>v.id));
 const logExpenseIds=new Set(logs.map(l=>l.expenseId).filter(Boolean));
 const related=r=>same(r)&&(!r.irrigationSystemId||r.irrigationSystemId===id)&&(r.irrigationSystemId===id||visitIds.has(r.visitId));
 let purchases=(data.purchases||[]).filter(related);
 let expenses=(data.expenses||[]).filter(e=>same(e)&&!isAllocation(e)&&(!e.irrigationSystemId||e.irrigationSystemId===id)&&(related(e)||logExpenseIds.has(e.id)||purchases.some(p=>p.expenseId===e.id)));
 const expenseIds=new Set(expenses.map(e=>e.id));
 purchases=(data.purchases||[]).filter(p=>same(p)&&(!p.irrigationSystemId||p.irrigationSystemId===id)&&(related(p)||expenseIds.has(p.expenseId)));
 const payments=(data.payments||[]).filter(p=>visitIds.has(p.visitId));
 const credits=visits.map(v=>({visit:v,amount:monthlyCredit(v,data)})).filter(c=>c.amount>0);
 const income=sum(payments,p=>p.amount)+sum(credits,c=>c.amount),cost=sum(expenses,e=>e.amount);
 const unpostedLogs=logs.filter(l=>!l.expenseId&&l.actualCost>0),unpostedPurchases=purchases.filter(p=>p.done&&!p.expenseId&&p.amount>0);
 const documents=(data.documents||[]).filter(d=>same(d)&&d.irrigationSystemId===id);
 return {system,logs,visits,purchases,expenses,payments,credits,documents,income:Math.round(income*100)/100,cost,balance:(cents(income)-cents(cost))/100,pendingLogs:sum(unpostedLogs,l=>l.actualCost),pendingPurchases:sum(unpostedPurchases,p=>p.amount),unpostedLogs,unpostedPurchases};
}
function irrigationDossierMedia(d){
 const groups=[],seen=new Set();
 const add=(title,ids,kind,source,record)=>{const unique=(ids||[]).filter(id=>id&&!seen.has(id)&&(seen.add(id),true));if(unique.length)groups.push({title,ids:unique,kind,source,record});};
 const r=d.system;
 add('Фактури и касови бележки към системата',r.receiptPhotos,'receipt','irrigation',r);
 for(const e of d.expenses)add(date(e.date)+' · '+e.description,e.receiptPhotos,'receipt','expenses',e);
 for(const l of d.logs)add(date(l.date)+' · '+l.kind,l.receiptPhotos,'receipt','irrigationLogs',l);
 for(const p of d.purchases)add(date(p.date)+' · '+p.name,p.receiptPhotos,'receipt','purchases',p);
 add('Снимки на записки и бележки',r.documentPhotos,'note','irrigation',r);
 add('Система и скици',r.irrigationPhotos,'work','irrigation',r);
 for(const l of d.logs)add(date(l.date)+' · '+l.kind,l.documentPhotos,'work','irrigationLogs',l);
 for(const v of d.visits){add(date(v.date)+' · Преди · '+v.service,v.beforePhotos,'work','visits',v);add(date(v.date)+' · След · '+v.service,v.afterPhotos,'work','visits',v);}
 for(const e of [...d.expenses,...d.purchases])add('Система · '+(e.description||e.name),e.irrigationPhotos,'work',d.expenses.includes(e)?'expenses':'purchases',e);
 for(const doc of d.documents)add(doc.type+' № '+doc.number,doc.documentPhotos,'document','documents',doc);
 return groups;
}
function irrigationDossierGallery(groups,emptyText){return groups.map(g=>`<article class="irr-dossier-entry"><div class="card-title"><h4>${esc(g.title)}</h4>${btn('Редакция','edit','edit','secondary',`data-table="${g.source}" data-id="${esc(g.record.id)}"`)}</div>${irrigationMediaHTML(g.ids)}</article>`).join('')||`<p class="muted">${esc(emptyText)}</p>`;}
function irrigationDossierFinancialHTML(d){
 const r=d.system,recordBtn=(table,id)=>btn('Преглед / редакция','edit','edit','secondary',`data-table="${table}" data-id="${esc(id)}"`);
 return `<section class="card"><h3>Приходи и разходи · цялата история</h3><div class="irr-dossier-kpis"><div><small>Получени приходи</small><strong>${money(d.income)}</strong></div><div><small>Отчетени разходи</small><strong>${money(d.cost)}</strong></div><div><small>Паричен резултат</small><strong>${money(d.balance)}</strong></div></div><p class="muted">Получени плащания и разпределен абонаментен дял към свързаните посещения, минус отчетените разходи. Офертите и планираният бюджет се показват отделно.</p><div class="actions">${btn('Добави разход и фактура','irr-dossier-expense','money','primary',`data-id="${esc(r.id)}"`)}${btn('Добави получено плащане','irr-dossier-income','money','secondary',`data-id="${esc(r.id)}"`)}${btn('Свържи съществуващи записи','irr-dossier-link','plus','secondary',`data-id="${esc(r.id)}"`)}</div><h4>Получени плащания</h4>${d.payments.map(p=>{const v=d.visits.find(v=>v.id===p.visitId);return `<article class="irr-dossier-entry"><strong>${money(p.amount)}</strong><p>${date(p.date)} · ${esc(p.method)}<br>${esc(v.service)}${p.notes?'<br>'+esc(p.notes):''}</p>${recordBtn('visits',v.id)}</article>`}).join('')||'<p class="muted">Няма отделно получени плащания.</p>'}${d.credits.map(c=>`<p>Абонаментен дял за ${date(c.visit.date)} · ${money(c.amount)}</p>`).join('')}<h4>Отчетени разходи</h4>${d.expenses.map(e=>`<article class="irr-dossier-entry"><strong>${esc(e.description)} · ${money(e.amount)}</strong><p>${date(e.date)} · ${esc(e.category)}${e.notes?'<br>'+esc(e.notes):''}</p>${recordBtn('expenses',e.id)}</article>`).join('')||'<p class="muted">Няма отчетени разходи.</p>'}${d.unpostedLogs.length||d.unpostedPurchases.length?`<div class="notice"><h4>Чакащи отчитане</h4><p>Дневник: ${money(d.pendingLogs)} · Купени материали: ${money(d.pendingPurchases)}. Тези суми още не участват в разходите и резултата. Ако описват една покупка, отчети я само от единия запис.</p>${d.unpostedLogs.map(l=>`<p>${esc(l.work)} · ${money(l.actualCost)}</p>${btn('Отчети разхода от дневника','irr-log-post','money','secondary',`data-id="${esc(l.id)}"`)}`).join('')}${d.unpostedPurchases.map(p=>`<p>${esc(p.name)} · ${money(p.amount)}</p>${btn('Отчети покупката','purchase-expense','money','secondary',`data-id="${esc(p.id)}"`)}`).join('')}</div>`:''}</section>`;
}
function irrigationDossierOverviewHTML(d){
 const r=d.system,media=irrigationDossierMedia(d);
 return `<section class="card irr-dossier-cover"><img src="./assets/document-cover.jpeg" alt="GreenForce"><div><small>GREENFORCE · ДОСИЕ НА ПОЛИВНА СИСТЕМА</small><h2>${esc(r.name)}</h2><p>${esc(cname(r.clientId))}<br>${esc(client(r.clientId)?.address||'')}</p><div class="actions">${btn('Фактури / касови бележки','irr-dossier-photos','doc','primary',`data-id="${esc(r.id)}" data-group="receiptPhotos"`)}${btn('Записки и снимки на записки','irr-dossier-photos','edit','secondary',`data-id="${esc(r.id)}" data-group="documentPhotos"`)}${btn('Снимки на извършената работа','irr-dossier-photos','visit','secondary',`data-id="${esc(r.id)}" data-group="irrigationPhotos"`)}${btn('Пълно досие PDF · вътрешно','irr-dossier-pdf','download','secondary',`data-id="${esc(r.id)}"`)}</div></div></section>${irrigationDossierFinancialHTML(d)}<section class="card"><h3>Фактури и касови бележки</h3><p class="muted">Снимките са от системата, свързаните разходи, покупки и дневник. Докосни за цял размер. За да включиш сумата във финансите, използвай „Добави разход и фактура“.</p>${irrigationDossierGallery(media.filter(g=>g.kind==='receipt'),'Още няма приложени фактури. Използвай „Фактури / касови бележки“ или „Добави разход и фактура“.')}</section><section class="card"><h3>Записки по системата</h3><p class="irr-dossier-text">${esc(r.notes||'Няма записани технически бележки.')}</p>${irrigationDossierGallery(media.filter(g=>g.kind==='note'),'Няма снимки на записки.')}</section><section class="card"><h3>Снимки на извършената работа</h3>${irrigationDossierGallery(media.filter(g=>g.kind==='work'),'Няма добавени снимки на работа.')}</section>`;
}
function irrigationDossierVisitsHTML(d){return `<section class="card"><h3>Посещения и етапи по системата</h3>${btn('Ново посещение / етап','irr-dossier-visit','plus','primary wide',`data-id="${esc(d.system.id)}"`)}${d.visits.slice().sort(sortDate).map(visitRow).join('')||'<p class="muted">Няма свързани посещения.</p>'}</section>`;}
function irrigationDossierLinkOptions(clientId,value=''){return '<option value="">Без връзка към система</option>'+db.irrigation.filter(s=>s.clientId===clientId).map(s=>`<option value="${esc(s.id)}" ${s.id===value?'selected':''}>${esc(s.name)}</option>`).join('');}
function refreshIrrigationDossierFields(){const form=$('#record-form'),select=form?.querySelector('[name=irrigationSystemId]');if(!select||select.type==='hidden')return;const clientId=form.querySelector('[name=clientId]')?.value||'',value=select.value;select.innerHTML=irrigationDossierLinkOptions(clientId,value);}
function irrigationDossierCandidates(id,table,data=db){
 const d=irrigationDossierData(id,data),existing=new Set((d[table]||[]).map(r=>r.id));
 const used=new Set((data.irrigation||[]).filter(s=>s.id!==id).flatMap(s=>(irrigationDossierData(s.id,data)[table]||[]).map(r=>r.id)));
 return (data[table]||[]).filter(r=>r.clientId===d.system.clientId&&!existing.has(r.id)&&!used.has(r.id)&&!r.irrigationSystemId&&!(table==='expenses'&&isAllocation(r)));
}
function irrigationDossierLinkForm(id){const r=irrSystem(id);if(!r)throw Error('Системата липсва.');modal('Свържи запис към '+r.name,`<form id="irr-dossier-link-form" data-system="${esc(id)}"><p>Избери съществуващ запис на този клиент. Свързването запазва сумите и снимките и не създава ново плащане или разход.</p><label class="field">Вид запис<select id="irr-dossier-link-table" name="table"><option value="visits">Посещение / етап и неговите плащания</option><option value="expenses">Разход и неговите фактури</option><option value="purchases">Покупка</option><option value="documents">Оферта / договор</option></select></label><label class="field">Запис<select name="record" id="irr-dossier-link-record" required></select></label><div id="form-error" class="error" hidden></div><button type="submit" class="primary wide">Свържи към системата</button></form>`);refreshIrrigationDossierCandidates();}
function refreshIrrigationDossierCandidates(){const form=$('#irr-dossier-link-form');if(!form)return;const rows=irrigationDossierCandidates(form.dataset.system,form.querySelector('[name=table]').value);form.querySelector('[name=record]').innerHTML='<option value="">Избери…</option>'+rows.map(r=>`<option value="${esc(r.id)}">${date(r.date)} · ${esc(r.service||r.description||r.name||r.title)}${r.amount!=null?' · '+money(r.amount):''}</option>`).join('');}
function linkIrrigationDossierRecord(id,table,recordId,data=db){
 if(!['visits','expenses','purchases','documents'].includes(table))throw Error('Невалиден вид запис.');
 const r=irrigationDossierCandidates(id,table,data).find(r=>r.id===recordId);if(!r)throw Error('Избери несвързан запис за клиента на системата.');
 r.irrigationSystemId=id;
 if(table==='purchases'&&r.expenseId){const e=data.expenses.find(e=>e.id===r.expenseId);if(e)e.irrigationSystemId=id;}
 if(table==='expenses')for(const p of data.purchases.filter(p=>p.expenseId===r.id))p.irrigationSystemId=id;
 validateIrrigationDossierLinks(data);return r;
}
function irrigationDossierIncome(id){const d=irrigationDossierData(id),eligible=d.visits.filter(v=>v.status!=='Отменено'&&due(v)>0);modal('Получено плащане по системата',`<p>Плащането се записва към посещение или етап и влиза веднъж в общите финанси.</p>${eligible.map(v=>btn(date(v.date)+' · '+v.service+' · остатък '+money(due(v)),'irr-dossier-payment','money','secondary wide',`data-id="${esc(id)}" data-visit="${esc(v.id)}"`)).join('')||'<p>Няма посещение с неплатен остатък. Създай посещение / етап с договорената сума или свържи съществуващо посещение.</p>'}${btn('Ново посещение / етап','irr-dossier-visit','plus','primary wide',`data-id="${esc(id)}"`)}${btn('Свържи съществуващо посещение','irr-dossier-link','plus','secondary wide',`data-id="${esc(id)}"`)}`);}
function irrigationDossierBlocks(d){
 const blocks=[{kind:'heading',text:'Вътрешно досие · поливна система'},{kind:'text',text:irrigationJournalText(d.system)},{kind:'heading',text:'Технически записки'},{kind:'text',text:d.system.notes||'Няма записки.'},{kind:'heading',text:'Финансов отчет · цялата история'},{kind:'text',text:`Получени приходи: ${money(d.income)}\nОтчетени разходи: ${money(d.cost)}\nПаричен резултат: ${money(d.balance)}\nЧакащи отчитане от дневник: ${money(d.pendingLogs)}\nНеотчетени купени материали: ${money(d.pendingPurchases)}\nОфертите, авансът по договор и бюджетът не са получени плащания. Чакащите отчитане суми не са включени в резултата.`}];
 const table=(heading,headers,rows,widths)=>{blocks.push({kind:'heading',text:heading});if(rows.length)blocks.push({kind:'table',headers,rows,widths});else blocks.push({kind:'text',text:'Няма записи.'});};
 table('Получени плащания',['Дата / основание','Начин','Сума'],[...d.payments.map(p=>[date(p.date)+' · '+(d.visits.find(v=>v.id===p.visitId)?.service||'')+(p.notes?'\n'+p.notes:''),p.method,money(p.amount)]),...d.credits.map(c=>[date(c.visit.date)+' · '+c.visit.service,'Абонаментен дял',money(c.amount)])],[.54,.23,.23]);
 table('Отчетени разходи',['Дата / описание','Документ / бележки','Сума'],d.expenses.map(e=>[date(e.date)+' · '+e.description,e.notes||'—',money(e.amount)]),[.43,.34,.23]);
 table('Посещения и етапи',['Дата / дейност','Статус','Договорена цена'],d.visits.map(v=>[date(v.date)+' · '+v.service+(v.notes?'\n'+v.notes:''),v.status,money(net(v))]),[.50,.23,.27]);
 table('Оферти и договори',['Документ','Заглавие','Стойност'],d.documents.map(r=>[r.type+' № '+r.number,r.title,irrigationDocumentPriceDisplay(r)]),[.29,.44,.27]);
 return blocks;
}
async function irrigationDossierPDFOptions(id){const d=irrigationDossierData(id),photos=[];for(const g of irrigationDossierMedia(d)){const images=[];for(const id of g.ids){const data=await MediaStore.get(id);if(!data)throw Error('Липсва снимка от досието. Възстанови я от архив преди издаване на пълно досие.');images.push(data);}photos.push({title:g.title,images,fit:'contain',fullPage:g.kind==='receipt'||g.kind==='note',captions:images.map((_,i)=>g.title+' · '+(i+1))});}
 const company={...db.settings};return {company,cover:{image:'./assets/document-cover.jpeg',title:'Вътрешно досие на поливна система',price:money(d.balance),priceLabel:'Получени приходи минус отчетени разходи',owner:company.owner||company.company,facts:[['Обект',cname(d.system.clientId)],['Система',d.system.name],['Дата',date(today())]]},blocks:irrigationDossierBlocks(d),photos};}
// Deletion keeps the client ledger intact; system-only history is recoverable in Trash.
function irrigationDeleteLinks(id,data=db){
 const d=irrigationDossierData(id,data),groups=[];
 const add=(table,label,rows,archived=false)=>{if(rows.length)groups.push({table,label,rows,archived});};
 for(const [table,label] of [['visits','Посещения'],['payments','Плащания'],['expenses','Разходи'],['purchases','Покупки'],['documents','Оферти и договори']])add(table,label,d[table]);
 add('irrigationLogs','Дневник на системата',d.logs,true);
 if(typeof GF_WORK_TABLES!=='undefined')for(const table of GF_WORK_TABLES)add(table,typeof GF_RECORD_NAMES!=='undefined'&&GF_RECORD_NAMES[table]||titles[table]||'Работни записи',(data[table]||[]).filter(r=>r.systemId===id),table==='gfIrrStages');
 return groups;
}
function detachAndDeleteIrrigation(id,data=db){
 if(!data.irrigation.some(s=>s.id===id))throw Error('Системата вече е премахната.');
 for(const table of ['visits','expenses','purchases','documents'])for(const r of data[table]||[])if(r.irrigationSystemId===id)delete r.irrigationSystemId;
 if(typeof GF_WORK_TABLES!=='undefined')for(const table of GF_WORK_TABLES){
  if(table==='gfIrrStages')data[table]=(data[table]||[]).filter(r=>r.systemId!==id);
  else for(const r of data[table]||[])if(r.systemId===id)delete r.systemId;
 }
 data.irrigationLogs=(data.irrigationLogs||[]).filter(r=>r.systemId!==id);
 data.irrigation=data.irrigation.filter(s=>s.id!==id);
}
function irrigationDeleteHTML(id){
 const r=irrSystem(id);if(!r)throw Error('Системата вече е премахната.');
 const groups=irrigationDeleteLinks(id);
 const row=(table,r)=>{
  const label=[r.date?date(r.date):'',r.service||r.description||r.name||r.title||r.work||r.kind||r.method||r.id,r.number?'№ '+r.number:'',r.amount!=null?money(r.amount):''].filter(Boolean).join(' · ');
  const tableName=table==='payments'?'visits':table,recordId=table==='payments'?r.visitId:r.id;
  const action=typeof GF_WORK_TABLES!=='undefined'&&GF_WORK_TABLES.includes(table)?'gf-record':'edit';
  return `<li><span>${esc(label)}</span> ${btn('Преглед',action,'edit','secondary',`data-table="${esc(tableName)}" data-id="${esc(recordId)}"`)}</li>`;
 };
 return `<p><strong>${esc(r.name)}</strong> · ${esc(cname(r.clientId))}</p><p>Ще изтриеш само избраната система. Посещенията, плащанията, разходите, покупките и документите остават към клиента със същите суми и снимки. Премахват се връзките им към тази система.</p>${groups.length?groups.map(g=>`<details class="card" open><summary>${esc(g.label)}: ${g.rows.length}${g.archived?' · запазват се в Кошчето':' · запазват се'}</summary><ul>${g.rows.slice(0,100).map(r=>row(g.table,r)).join('')}</ul>${g.rows.length>100?`<p>Още ${g.rows.length-100} записа. Действието обхваща всички свързани записи.</p>`:''}</details>`).join(''):'<p>Няма свързани записи.</p>'}<p>Системата, снимките само към нея, дневникът и контролните етапи се запазват заедно в Кошчето и могат да се възстановят. Останалите работни записи се запазват към клиента.</p><div id="form-error" class="error" role="alert" hidden></div><div class="actions">${btn('Отказ','close','close','secondary')}<button type="button" id="confirm-irrigation-delete" class="danger">Премахни връзките и изтрий само системата</button></div>`;
}
function removeIrrigationSystem(id){
 try{modal('Изтриване на поливна система',irrigationDeleteHTML(id));}catch(e){return toast(e.message);}
 const button=$('#confirm-irrigation-delete');
 button.onclick=()=>{
  if(button.disabled)return;button.disabled=true;
  try{
   const ok=change(()=>detachAndDeleteIrrigation(id));
   if(!ok){errorForm('Системата не е изтрита. Данните са запазени.');return;}
   closeDialog();if(state.system===id)state.system='';if(state.gfSystem===id)state.gfSystem='';
   if(state.page==='irrigationSystem')go('irrigation');else render();
   toast('Системата е преместена в Кошчето. Финансовата история и документите са запазени.');
  }catch(e){errorForm(e.message);}finally{button.disabled=false;}
 };
}

function setupIrrigationDossier(){
 titles.irrigationSystem='Досие на поливната система';
 for(const table of ['visits','expenses','purchases'])if(!schemas[table].some(f=>f.key==='irrigationSystemId'))schemas[table].push(f('irrigationSystemId','Поливна система (по избор)','irrigationLink',false,null,true));
 schemas.irrigationLogs.push(f('notes','Записки и уточнения','textarea',false,null,true));
 const detail=views.irrigationSystem;views.irrigationSystem=()=>{const r=irrSystem(state.system);if(!r)return empty('Системата липсва.');const d=irrigationDossierData(r.id);return `<div class="irr-dossier">${irrigationDossierOverviewHTML(d)}${detail({hideMedia:true})}${irrigationDossierVisitsHTML(d)}</div>`;};
 document.addEventListener('change',e=>{if(e.target.name==='clientId')refreshIrrigationDossierFields();if(e.target.id==='irr-dossier-link-table')refreshIrrigationDossierCandidates();});
 document.addEventListener('click',async e=>{const b=e.target.closest('[data-action^="irr-dossier-"]');if(!b)return;try{const id=b.dataset.id,r=irrSystem(id);if(!r)throw Error('Системата липсва.');switch(b.dataset.action){
 case'irr-dossier-photos':editor('irrigation',id);$('#draft-'+b.dataset.group)?.closest('.photo-section')?.scrollIntoView({block:'start',behavior:'smooth'});break;
 case'irr-dossier-expense':editor('expenses','',{clientId:r.clientId,irrigationSystemId:id,description:'Поливна система — '+r.name,flowType:'Разход за дейността'});break;
 case'irr-dossier-visit':editor('visits','',{clientId:r.clientId,irrigationSystemId:id,activityType:'Поливна система',service:'Поливна система — '+r.name});break;
 case'irr-dossier-income':irrigationDossierIncome(id);break;
 case'irr-dossier-payment':{const v=irrigationDossierData(id).visits.find(v=>v.id===b.dataset.visit);if(!v||v.status==='Отменено'||due(v)<=0)throw Error('Посещението няма неплатен остатък.');payment(v.id);$('#field-date').value=today();break;}
 case'irr-dossier-link':irrigationDossierLinkForm(id);break;
 case'irr-dossier-pdf':await exportPDF('Вътрешно досие — '+r.name,'','GreenForce-irrigation-dossier-'+today(),await irrigationDossierPDFOptions(id));break;
 }}catch(err){toast(err.message);}});
 document.addEventListener('submit',e=>{const form=e.target;if(form.id!=='irr-dossier-link-form')return;e.preventDefault();try{const fd=new FormData(form);if(change(()=>linkIrrigationDossierRecord(form.dataset.system,String(fd.get('table')),String(fd.get('record'))))){closeDialog();render();toast('Записът е свързан към системата.');}}catch(err){errorForm(err.message);}});
}

