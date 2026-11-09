'use strict';
// Local, editable working prices. No research metadata enters customer documents.
const QUOTE_CATALOG=[
 {
  "id": "mow",
  "group": "grass",
  "name": "Косене, тример и събиране · поддържана трева",
  "unit": "m²",
  "rate": 0.25,
  "note": "Извозването се добавя отделно."
 },
 {
  "id": "highmow",
  "group": "grass",
  "name": "Косене на висока трева до 50 cm",
  "unit": "m²",
  "rate": 0.5
 },
 {
  "id": "wildmow",
  "group": "grass",
  "name": "Запусната / силно обрасла трева",
  "unit": "m²",
  "rate": 0.9,
  "note": "След оглед на отпадъци, гъстота и достъп."
 },
 {
  "id": "scarify",
  "group": "grass",
  "name": "Скарификация и събиране на плъстта",
  "unit": "m²",
  "rate": 0.5,
  "pack": true
 },
 {
  "id": "aerate",
  "group": "grass",
  "name": "Аерация с кухи шипове",
  "unit": "m²",
  "rate": 0.6,
  "pack": true,
  "note": "Различна операция от скарификацията."
 },
 {
  "id": "sand",
  "group": "grass",
  "name": "Леко пясъковане / топдресинг",
  "unit": "m²",
  "rate": 0.6,
  "pack": true,
  "note": "Само разстилане; без пясък и доставка."
 },
 {
  "id": "overseed",
  "group": "grass",
  "name": "Подсяване на съществуваща трева",
  "unit": "m²",
  "rate": 0.4,
  "pack": true,
  "note": "Без семена и подготовка за нова тревна площ."
 },
 {
  "id": "roll",
  "group": "grass",
  "name": "Валиране",
  "unit": "m²",
  "rate": 0.2
 },
 {
  "id": "fertilize",
  "group": "grass",
  "name": "Торене на трева · разпръскване",
  "unit": "m²",
  "rate": 0.15,
  "note": "Торът е отделен материал; предложена трудова база."
 },
 {
  "id": "till",
  "group": "grass",
  "name": "Фрезоване на почва",
  "unit": "m²",
  "rate": null
 },
 {
  "id": "level",
  "group": "grass",
  "name": "Грубо заравняване / корекция на наклони",
  "unit": "m²",
  "rate": null
 },
 {
  "id": "seedlawn",
  "group": "grass",
  "name": "Засяване на трева върху подготвен терен",
  "unit": "m²",
  "rate": 1,
  "note": "Сеитба, покриване и валиране; без семена и земни работи."
 },
 {
  "id": "lawnprep",
  "group": "grass",
  "name": "Пълна подготовка на терен за затревяване",
  "unit": "m²",
  "rate": null
 },
 {
  "id": "turf",
  "group": "grass",
  "name": "Монтаж на тревен чим върху готова основа",
  "unit": "m²",
  "rate": 3.5,
  "note": "Без чим, доставка и изграждане на основата."
 },
 {
  "id": "flowerseed",
  "group": "flowers",
  "name": "Засяване на цветя от семена",
  "unit": "m²",
  "rate": null
 },
 {
  "id": "flowerplant",
  "group": "flowers",
  "name": "Засаждане на сезонни цветя / малък разсад",
  "unit": "бр.",
  "rate": 1.5,
  "note": "Готова леха; без разсад, тор и доставка."
 },
 {
  "id": "perennial",
  "group": "flowers",
  "name": "Засаждане на многогодишни цветя",
  "unit": "бр.",
  "rate": 2,
  "note": "Малък контейнер и подготвена почва; предложена база."
 },
 {
  "id": "bulbs",
  "group": "flowers",
  "name": "Засаждане на луковици",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "bedprep",
  "group": "flowers",
  "name": "Прекопаване и подготовка на лехи",
  "unit": "m²",
  "rate": 2,
  "note": "Без засаждане, нова почва и извозване."
 },
 {
  "id": "flowercare",
  "group": "flowers",
  "name": "Плевене и почистване на цветни лехи",
  "unit": "m²",
  "rate": 2,
  "note": "Без цялостно подновяване на лехата."
 },
 {
  "id": "pots",
  "group": "flowers",
  "name": "Засаждане на малка саксия / сандъче",
  "unit": "бр.",
  "rate": 5,
  "note": "Само труд; без съд, почва и растения."
 },
 {
  "id": "repot",
  "group": "flowers",
  "name": "Пресаждане в голяма кашпа",
  "unit": "бр.",
  "rate": 15,
  "note": "При достъп без подемна техника; материали отделно."
 },
 {
  "id": "hedgelow",
  "group": "hedges",
  "name": "Подрязване на плет до 1 m височина",
  "unit": "л.м",
  "rate": 2.5,
  "note": "Нормален достъп, поддържан плет; извозване отделно."
 },
 {
  "id": "hedgemid",
  "group": "hedges",
  "name": "Подрязване на плет от 1 до 2 m",
  "unit": "л.м",
  "rate": 3.5,
  "note": "Нормален достъп; извозване отделно."
 },
 {
  "id": "hedgehigh",
  "group": "hedges",
  "name": "Подрязване на плет над 2 m",
  "unit": "л.м",
  "rate": null
 },
 {
  "id": "hedgerestore",
  "group": "hedges",
  "name": "Силно намаляване / възстановяване на плет",
  "unit": "л.м",
  "rate": null
 },
 {
  "id": "shrubtrim",
  "group": "hedges",
  "name": "Оформяне на малък декоративен храст",
  "unit": "бр.",
  "rate": 5,
  "note": "Поддържан храст; без извозване."
 },
 {
  "id": "roses",
  "group": "hedges",
  "name": "Резитба на ниски рози",
  "unit": "бр.",
  "rate": 3,
  "note": "При група растения; не за катерливи рози."
 },
 {
  "id": "hedgeplant",
  "group": "hedges",
  "name": "Засаждане на малки растения за жив плет",
  "unit": "бр.",
  "rate": 4,
  "note": "Дребен контейнер; материал и подготовка на траншея отделно."
 },
 {
  "id": "shrubplant",
  "group": "hedges",
  "name": "Засаждане на единичен малък храст",
  "unit": "бр.",
  "rate": 5,
  "note": "Нормална почва; без самото растение и тор."
 },
 {
  "id": "shrubmove",
  "group": "hedges",
  "name": "Пресаждане / изкореняване на храст",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "topiary",
  "group": "hedges",
  "name": "Топиарни форми и иглолистни растения",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "fruittree",
  "group": "trees",
  "name": "Поддържаща резитба на малка овошка",
  "unit": "бр.",
  "rate": 15,
  "note": "Достъп от земя; предложена база, без височинна работа."
 },
 {
  "id": "treeplant",
  "group": "trees",
  "name": "Засаждане на младо дръвче",
  "unit": "бр.",
  "rate": 25,
  "note": "Ръчна работа; без растение, колове, тор и транспорт."
 },
 {
  "id": "treeservice",
  "group": "trees",
  "name": "Санитарна / формировъчна резитба на дърво",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "danger",
  "group": "trees",
  "name": "Опасни дървета / работа с вишка · партньор",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "stump",
  "group": "trees",
  "name": "Премахване / фрезоване на пън",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "waterbuild",
  "group": "water",
  "name": "Изграждане на автоматична поливна система",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "drip",
  "group": "water",
  "name": "Монтаж на капково напояване",
  "unit": "л.м",
  "rate": null
 },
 {
  "id": "controller",
  "group": "water",
  "name": "Монтаж / настройка на контролер и сензор",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "waterfix",
  "group": "water",
  "name": "Диагностика, течове, клапани и разпръсквачи",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "winter",
  "group": "water",
  "name": "Зазимяване и продухване с компресор",
  "unit": "обект",
  "rate": null,
  "note": "Брой зони, дебит, наем на компресор и път."
 },
 {
  "id": "spring",
  "group": "water",
  "name": "Пролетно пускане и настройка на поливането",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "artificial",
  "group": "landscape",
  "name": "Монтаж на изкуствена трева",
  "unit": "m²",
  "rate": null,
  "note": "Основата, лепилата и тревата се описват отделно."
 },
 {
  "id": "paving",
  "group": "landscape",
  "name": "Редене на плочопътека върху готова основа",
  "unit": "m²",
  "rate": 10,
  "note": "Без плочи и изграждане на основата."
 },
 {
  "id": "edging",
  "group": "landscape",
  "name": "Монтаж на PVC / бетонни бордюри",
  "unit": "л.м",
  "rate": null
 },
 {
  "id": "mulch",
  "group": "landscape",
  "name": "Геотекстил и мулчиране на лехи",
  "unit": "m²",
  "rate": null
 },
 {
  "id": "rock",
  "group": "landscape",
  "name": "Алпинеум / декоративен каменен кът",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "drain",
  "group": "landscape",
  "name": "Дренаж и отвеждане на повърхностни води",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "design",
  "group": "landscape",
  "name": "Ландшафтен проект / консултация с архитект",
  "unit": "обект",
  "rate": null,
  "note": "По оферта на партньора."
 },
 {
  "id": "vertical",
  "group": "landscape",
  "name": "Вертикална / покривна градина · партньор",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "pond",
  "group": "landscape",
  "name": "Декоративно езерце / воден ефект · партньор",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "leaves",
  "group": "care",
  "name": "Събиране на листа",
  "unit": "m²",
  "rate": 0.25,
  "note": "Без извозване."
 },
 {
  "id": "weeds",
  "group": "care",
  "name": "Ръчно плевене на терен",
  "unit": "m²",
  "rate": 1.5
 },
 {
  "id": "clear",
  "group": "care",
  "name": "Почистване на запустял двор",
  "unit": "m²",
  "rate": 1.5,
  "note": "След оглед; без строителни отпадъци и извозване."
 },
 {
  "id": "protection",
  "group": "care",
  "name": "Растителна защита / обработка срещу кърлежи",
  "unit": "обект",
  "rate": null,
  "note": "По конкретна разрешена обработка и изпълнител."
 },
 {
  "id": "seasonal",
  "group": "care",
  "name": "Пролетно / есенно комплексно почистване",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "snow",
  "group": "care",
  "name": "Зимно почистване на алеи / сняг",
  "unit": "обект",
  "rate": null
 },
 {
  "id": "hour",
  "group": "care",
  "name": "Градинарска помощ · един човек",
  "unit": "час",
  "rate": 25,
  "note": "Предложена база за неописани дребни дейности."
 },
 {
  "id": "custom",
  "group": "care",
  "name": "Друга услуга · собствено описание",
  "unit": "услуга",
  "rate": null
 },
 {
  "id": "seed",
  "group": "extras",
  "name": "Тревна смеска / семена за цветя",
  "unit": "kg",
  "rate": null
 },
 {
  "id": "soil",
  "group": "extras",
  "name": "Почва / пясък / компост",
  "unit": "m³",
  "rate": null
 },
 {
  "id": "fert",
  "group": "extras",
  "name": "Тор / мулч / други консумативи",
  "unit": "позиция",
  "rate": null
 },
 {
  "id": "plants",
  "group": "extras",
  "name": "Растения / луковици / разсад",
  "unit": "бр.",
  "rate": null
 },
 {
  "id": "equipment",
  "group": "extras",
  "name": "Наем на техника / външен изпълнител",
  "unit": "ден",
  "rate": null
 },
 {
  "id": "transport",
  "group": "extras",
  "name": "Транспорт до обекта и обратно",
  "unit": "курс",
  "rate": null
 },
 {
  "id": "waste",
  "group": "extras",
  "name": "Извозване и такса за растителни отпадъци",
  "unit": "курс",
  "rate": null
 }
];
const QUOTE_BASES={once:'еднократно изпълнение',visit:'едно посещение',month:'един месец',season:'целия сезон',contract:'целия договор'};
const QUOTE_GROUPS={grass:'Тревни площи',flowers:'Цветя, лехи и саксии',hedges:'Жив плет и храсти',trees:'Дървета и овощна градина',water:'Поливни системи',landscape:'Настилки, декорация и проектиране',care:'Почистване, защита и сезонни грижи',extras:'Материали, техника и транспорт',own:'Моят ценоразпис'};
const QUOTE_PACKAGE='Възстановяване на тревата — скарификация, аерация с кухи шипове, леко пясъковане и подсяване';
function documentBasis(r){return r.priceBasis|| (GFTemplates.enabled(r)?'month':'contract')}
function documentPriceLabel(r){return 'за '+QUOTE_BASES[documentBasis(r)]}
function documentSubtotal(r){return r.pricingMode==='direct'?r.directAmount:sum(docLines(r),l=>l.qty*l.price)}
function documentScope(r){if(r.pricingMode!=='catalog')return r.scope||'';const lines=quoteCatalogLines(r.quoteConfig);return lines.map(l=>`${l.name}: ${l.qty} ${l.unit}`).join('\n')+(r.scope?'\n\nДопълнителен обхват и уточнения:\n'+r.scope:'')}
function quoteCatalogLines(config){if(!config)return [];const result=[];if(config.package?.selected)result.push({name:QUOTE_PACKAGE,unit:'m²',qty:config.package.qty,price:config.package.price});for(const row of config.rows||[])if(row.selected&&!(config.package?.selected&&['scarify','aerate','sand','overseed'].includes(row.id)))result.push({id:row.id,manual:row.manual,name:row.name,unit:row.unit,qty:row.qty,price:row.price});return result}
function validateQuoteConfig(config){if(!config||!Array.isArray(config.rows)||config.rows.length>200)throw Error('Невалиден каталог на документ.');const ids=new Set();for(const row of config.rows){if(!row||typeof row.id!=='string'||ids.has(row.id)||typeof row.name!=='string'||!row.name.trim()||row.name.length>500||/[|\r\n]/.test(row.name)||typeof row.unit!=='string'||!row.unit||row.unit.length>30||/[|\r\n]/.test(row.unit)||typeof row.selected!=='boolean'||(row.pack!==undefined&&typeof row.pack!=='boolean'))throw Error('Невалидна позиция в каталога.');ids.add(row.id);if(row.pack&&!['scarify','aerate','sand','overseed'].includes(row.id))throw Error('Невалидна пакетна дейност.');}
 const lines=quoteCatalogLines(config);if(!lines.length)throw Error('Избери поне една услуга или пакет.');for(const row of lines)if(!Number.isFinite(row.qty)||row.qty<=0||row.qty>1000000||!Number.isFinite(row.price)||row.price<0||row.price>100000000||row.price===0&&row.manual)throw Error('Попълни положително количество и валидна цена за избраните услуги.');
 if(config.package&&typeof config.package.selected!=='boolean')throw Error('Невалиден пакет.');return lines;
}
function validateDocumentPricing(r){if(r.pricingMode===undefined)return;if(!['direct','catalog','lines'].includes(r.pricingMode)||!Object.hasOwn(QUOTE_BASES,r.priceBasis))throw Error('Невалиден начин на ценообразуване.');if(r.pricingMode==='direct'&&(!Number.isFinite(r.directAmount)||r.directAmount<0||r.directAmount>100000000))throw Error('Въведи валидна директна сума.');if(r.pricingMode==='catalog'){const lines=validateQuoteConfig(r.quoteConfig),text=quoteLinesText(lines);if(r.items!==text)throw Error('Позициите не съответстват на каталога.');}if(r.pricingMode==='direct'&&r.items!==quoteDirectItems(r))throw Error('Директната сума не съответства на позицията.');}
function quoteLinesText(lines){return lines.map(l=>`${l.name} (${l.unit}) | ${l.qty} | ${l.price}`).join('\n')}
function quoteDirectItems(r){return `Договорена сума ${documentPriceLabel(r)} | 1 | ${r.directAmount}`}
function quoteEditorRows(r){const saved=r.quoteConfig?.rows||[],catalog=[...QUOTE_CATALOG,...db.services.map(s=>({id:'own:'+s.id,name:s.name.replace(/[|\r\n]/g,' '),unit:s.unit.replace(/[|\r\n]/g,' '),rate:s.amount,group:'own',note:'Моят ценоразпис'}))],ids=new Set(catalog.map(i=>i.id));return [...catalog.map(i=>{const old=saved.find(x=>x.id===i.id);return old?{...i,...old}:{...i,selected:false,qty:i.group==='grass'?client(r.clientId)?.area||1:1,price:i.rate,manual:i.rate===null}}),...saved.filter(i=>!ids.has(i.id)).map(i=>({...i,group:'own'}))]}
function quoteEditorFields(r){const mode=r.pricingMode|| (r.id||r.items?'lines':'direct'),basis=r.priceBasis||(GFTemplates.enabled(r)?'month':'contract'),rows=quoteEditorRows(r),pack=r.quoteConfig?.package||{selected:false,qty:client(r.clientId)?.area||1,price:1.85};
 const num=(name,label,value,extra='')=>`<label class="field">${label}<input type="number" ${name?`name="${name}"`:''} value="${value??''}" min="0" max="100000000" step="any" inputmode="decimal" ${extra}></label>`;
 return `<section class="quote-builder full" id="quote-builder"><h3>Цена на документа</h3><label class="field">Начин на ценообразуване<select name="pricingMode" id="quote-mode">${[['direct','Директна сума'],['catalog','Избрани услуги и пакет'],['lines','Ръчни позиции']].map(([v,t])=>`<option value="${v}" ${mode===v?'selected':''}>${t}</option>`).join('')}</select></label><label class="field">Цената е за<select name="priceBasis" id="quote-basis">${Object.entries(QUOTE_BASES).map(([v,t])=>`<option value="${v}" ${basis===v?'selected':''}>${t}</option>`).join('')}</select></label><div data-quote-mode="direct">${num('directAmount','Обща сума преди отстъпката (€)',r.directAmount??(r.items?documentSubtotal(r):''),'id="quote-direct"')}<small>Избраните услуги и ръчните позиции не се добавят към директната сума. Опиши включената работа в „Включени дейности“.</small></div><div data-quote-mode="catalog"><p class="muted">Редактируеми бази за труд. Материали, техника и транспорт се добавят отделно. За „По оглед“ въведи цена.</p>${num('','Площ за тревните дейности (m²)',r.quoteConfig?.area??r.quoteConfig?.package?.qty??(client(r.clientId)?.area||1),'id="quote-area"')}<div class="quote-package"><label class="quote-check"><input type="checkbox" data-quote-package ${pack.selected?'checked':''}><strong>Пакет „Възстановяване на тревата“</strong></label><p>Скарификация и събиране, аерация с кухи шипове, леко пясъковане и подсяване. Само труд, без материали и земни работи.</p><div class="quote-pair">${num('','Пакет — площ (m²)',pack.qty,'data-pack-qty')}${num('','Пакетна цена (€/m²)',pack.price,'data-pack-price')}</div></div>${Object.entries(QUOTE_GROUPS).map(([g,title])=>{const group=rows.filter(i=>i.group===g);return group.length?`<details class="quote-group"><summary>${title} · ${group.length}</summary>${group.map(i=>`<div class="quote-row" data-quote-id="${esc(i.id)}" data-name="${esc(i.name)}" data-unit="${esc(i.unit)}" ${i.pack?'data-in-package':''} ${i.manual?'data-manual-price':''}><label class="quote-check"><input type="checkbox" data-quote-selected ${i.selected?'checked':''}><span>${esc(i.name)}</span></label><small>${esc(i.note|| (g==='extras'?'По реална покупка или оферта на доставчика.':'Труд при нормални условия и достъп.'))}</small><small data-package-caption hidden>Включено веднъж в пакета.</small>${i.id==='custom'?`<label class="field">Описание на другата услуга<input data-custom-name maxlength="300" value="${esc(i.name)}"></label>`:''}<div class="quote-pair">${num('','Количество ('+esc(i.unit)+')',i.qty,'data-quote-qty')}${num('',i.manual?'Цена по оглед (€/'+esc(i.unit)+')':'Ед. цена (€/'+esc(i.unit)+')',i.price,'data-quote-price')}</div><strong class="quote-row-total" data-row-price></strong></div>`).join('')}</details>`:''}).join('')}</div><div data-quote-mode="lines">${fieldHTML(schemas.documents.find(f=>f.key==='items'),r.pricingMode==='direct'?'':r.manualItems??r.items)}</div>${fieldHTML(schemas.documents.find(f=>f.key==='discount'),r.discount||0)}<div id="quote-calculation" class="notice" aria-live="polite"></div><div id="quote-error" class="error" hidden></div></section>`;
}
function collectQuoteConfig(form){const value=el=>el?.value?.trim()===''?null:Number(el?.value),rows=[...form.querySelectorAll('[data-quote-id]')].map(el=>({id:el.dataset.quoteId,name:(el.querySelector('[data-custom-name]')?.value||el.dataset.name).trim().replace(/[|\r\n]/g,' '),unit:el.dataset.unit,pack:el.hasAttribute('data-in-package'),manual:el.hasAttribute('data-manual-price'),selected:el.querySelector('[data-quote-selected]').checked,qty:value(el.querySelector('[data-quote-qty]')),price:value(el.querySelector('[data-quote-price]'))}));return {area:value(form.querySelector('#quote-area')),package:{selected:form.querySelector('[data-quote-package]').checked,qty:value(form.querySelector('[data-pack-qty]')),price:value(form.querySelector('[data-pack-price]'))},rows}}
function collectDocumentPricing(form,r){const mode=form.querySelector('#quote-mode')?.value;if(!mode)return r;r.pricingMode=mode;r.priceBasis=form.querySelector('#quote-basis').value;r.directAmount=form.querySelector('#quote-direct').value.trim()===''?null:Number(form.querySelector('#quote-direct').value);r.manualItems=form.querySelector('#field-items').value.trim();r.quoteConfig=collectQuoteConfig(form);if(mode==='direct'){if(r.directAmount===null)throw Error('Въведи общата сума преди отстъпката.');r.items=quoteDirectItems(r);}else if(mode==='catalog'){validateQuoteConfig(r.quoteConfig);r.items=quoteLinesText(quoteCatalogLines(r.quoteConfig));}else r.items=r.manualItems;validateDocumentPricing(r);return r}
function updateQuoteEditor(){const root=$('#quote-builder');if(!root)return;const form=root.closest('form'),mode=$('#quote-mode').value;for(const pane of root.querySelectorAll('[data-quote-mode]')){const active=pane.dataset.quoteMode===mode;pane.hidden=!active;for(const input of pane.querySelectorAll('input,textarea,select'))input.disabled=!active;}$('#field-items').required=mode==='lines';$('#quote-direct').required=mode==='direct';const pack=form.querySelector('[data-quote-package]').checked;for(const row of root.querySelectorAll('[data-in-package]')){const included=pack&&mode==='catalog';row.querySelector('[data-quote-selected]').disabled=included||mode!=='catalog';for(const input of row.querySelectorAll('input[type="number"]'))input.disabled=included||mode!=='catalog';row.querySelector('[data-package-caption]').hidden=!included;}
 for(const row of root.querySelectorAll('[data-quote-id]')){const qty=Number(row.querySelector('[data-quote-qty]').value),price=row.querySelector('[data-quote-price]').value;row.querySelector('[data-row-price]').textContent=pack&&row.hasAttribute('data-in-package')?'В пакета':price.trim()===''?'По оглед':money(qty*Number(price));}
 try{const r=collectDocumentPricing(form,{discount:Number($('#field-discount').value),template:$('#field-template').value,items:$('#field-items').value}),base=documentSubtotal(r),discount=Number($('#field-discount').value);if(!Number.isFinite(discount)||discount<0||discount>100)throw Error('Отстъпката трябва да е от 0 до 100%.');$('#quote-error').hidden=true;$('#quote-calculation').innerHTML=`Сума преди отстъпка: <strong>${money(base)}</strong><br>Отстъпка ${discount}%: −${money((cents(base)-cents(docTotal(r)))/100)}<br><strong>Крайна цена ${esc(documentPriceLabel(r))}: ${money(docTotal(r))}</strong>${docTotal(r)<50?'<br><small>Под 50 € — прецени работата и пътуването. Не е добавена автоматична такса.</small>':''}`;}catch(e){$('#quote-error').hidden=false;$('#quote-error').textContent=e.message;$('#quote-calculation').textContent='Попълни избраните позиции за изчисление.';}
}
function setupQuoteEditor(){if(!$('#quote-builder'))return;updateQuoteEditor()}
function pricedDocumentBlocks(r){const c=GFTemplates.customer(r),s=GFTemplates.company(r),price=docTotal(r),label=documentPriceLabel(r),b=[],h=text=>b.push({kind:'heading',text}),t=text=>b.push({kind:'text',text}),table=(headers,rows,widths)=>b.push({kind:'table',headers,rows,widths});h(r.type==='Оферта'?'Оферта за градинарски услуги':'Проект на договор за градинарски услуги');t(`${r.title}\n${r.type} № ${r.number} · Дата: ${date(r.date)}\nВалидност / край: ${date(r.validUntil)}`);h('Възложител и обект');t(`${c.name||cname(r.clientId)}\n${c.address||''}\n${c.contact||''}\n${[c.phone,c.email].filter(Boolean).join(' · ')}`);h('Изпълнител');t(`${s.company} / ${s.legalName}\nЕИК: ${s.registration}\n${s.owner}\n${s.phone} · ${s.email}`);h('Период и цена');t(`Крайна цена ${label}: ${money(price)}\n${r.periodStart&&r.periodEnd?'Период на изпълнение: '+date(r.periodStart)+' – '+date(r.periodEnd):'Срокът за изпълнение се съгласува с възложителя.'}${r.packageName?'\nАбонаментен пакет: '+r.packageName:''}`);h('Включени дейности');t(documentScope(r)||r.title);h('Позиции и цена');table(['Услуга / материал','Кол.','Ед. цена','Стойност'],docLines(r).map(l=>[l.name,String(l.qty),money(l.price),money(l.qty*l.price)]),[.46,.13,.20,.21]);t(`Сума преди отстъпка: ${money(documentSubtotal(r))}\nОтстъпка: ${r.discount||0}% (−${money((cents(documentSubtotal(r))-cents(price))/100)})\nКрайна цена ${label}: ${money(price)}`);h('Изпълнение и плащане');t('Изпълняват се само описаните дейности в договорените количества. Дати, достъп, вода и електрозахранване се съгласуват преди работа. Материали, транспорт, наем на техника и извозване са включени само когато са изрично посочени в позициите или условията. Допълнителни работи се възлагат след съгласуване на обхват и крайна цена.');t(r.conditions||'Плащане: след изпълнение и приемане на услугите, освен ако страните не уговорят друго писмено. За сезонна или обща договорна цена графикът на плащане се уточнява преди подписване.');if(r.notes){h('Допълнителни бележки');t(r.notes)}if(r.type==='Договор')b.push({kind:'signature',text:`ВЪЗЛОЖИТЕЛ: ____________________\nИме, подпис и дата\n\nИЗПЪЛНИТЕЛ: ${s.owner}\nИме, подпис и дата`});if(r.includePriceProtocol&&r.extraServices?.trim()){h('Допълнителни услуги — извън цената');table(['Услуга','Мярка','Ед. цена'],r.extraServices.split('\n').filter(Boolean).map(l=>{const p=l.split('|').map(x=>x.trim());return[p[0]||'',p[1]||'',p[2]||'По оферта']}),[.59,.17,.24]);}return b}
function setupQuotes(){document.addEventListener('change',e=>{if(e.target.id==='field-clientId'&&$('#quote-builder')&&!$('#record-form').dataset.quoteAreaTouched){const area=client(e.target.value)?.area;if(area>0){$('#quote-area').value=area;$('#quote-builder [data-pack-qty]').value=area;for(const row of $('#quote-builder').querySelectorAll('[data-quote-id]'))if(row.dataset.unit==='m²'&&QUOTE_CATALOG.find(i=>i.id===row.dataset.quoteId)?.group==='grass')row.querySelector('[data-quote-qty]').value=area;updateQuoteEditor()}}});document.addEventListener('input',e=>{if(e.target.closest('#quote-builder')){if(e.target.id==='quote-area'){$('#record-form').dataset.quoteAreaTouched='true';for(const row of $('#quote-builder').querySelectorAll('[data-quote-id]'))if(row.dataset.unit==='m²'&&QUOTE_CATALOG.find(i=>i.id===row.dataset.quoteId)?.group==='grass')row.querySelector('[data-quote-qty]').value=e.target.value;$('#quote-builder [data-pack-qty]').value=e.target.value;}updateQuoteEditor()}});document.addEventListener('change',e=>{if(e.target.closest('#quote-builder'))updateQuoteEditor()});document.addEventListener('click',async e=>{const el=e.target.closest('[data-action="document-share"]');if(el)try{await exportDocumentPDF(db.documents.find(r=>r.id===el.dataset.id),true)}catch(err){toast(err.message)}})}
