'use strict';
// Original design suggestions, not a copy of another site's catalog. Counts are editable reference modules.
const COMPOSITION_PLANTS=[
  {
    "id": "polestar",
    "name": "Хортензия Polestar",
    "latin": "Hydrangea paniculata ‘Polestar’ / ‘Breg14’",
    "category": "Храсти",
    "light": [
      "Слънце",
      "Полусянка"
    ],
    "water": "Повишено",
    "look": "Компактен листопаден храст с фини бели съцветия, които постепенно порозовяват.",
    "care": [
      "Поддържай равномерна влага и оттичане; избягвай суха сянка с конкуриращи се корени.",
      "Резитбата е в края на зимата или рано напролет; цъфти върху новия прираст.",
      "Следи за засушаване и прегаряне на младите растения."
    ],
    "height": "40–60",
    "width": "40–60",
    "spacing": 70,
    "bloom": [
      6,
      7,
      8,
      9
    ],
    "prune": [
      2,
      3
    ],
    "habit": "Листопадно",
    "soil": "Плодородна, равномерно влажна и дренирана почва.",
    "note": "Компактен сорт. Не заменяй с едра метличеста хортензия без промяна на подредбата.",
    "url": "https://www.rhs.org.uk/plants/370014/hydrangea-breg14/details",
    "group": "composition",
    "mode": "навън",
    "winter": "Обичайно отглеждане навън при подходящи условия; пази младите растения от изсушаване и зимно преовлажняване.",
    "issues": []
  },
  {
    "id": "trevi-fountain",
    "name": "Пулмонария Trevi Fountain",
    "latin": "Pulmonaria ‘Trevi Fountain’",
    "category": "Цветя и почвопокривни",
    "light": [
      "Полусянка",
      "Сянка"
    ],
    "water": "Повишено",
    "look": "Ниски туфи със сребристо напетнени зелени листа и сини пролетни цветове.",
    "care": [
      "Осигури хумусна почва с равномерна влага, без подгизване.",
      "Пази от горещо следобедно слънце; при повредени листа провери влагата и проветряването.",
      "Почиствай повредените листа и прецъфтелите стъбла."
    ],
    "height": "20–40",
    "width": "30–50",
    "spacing": 40,
    "bloom": [
      4,
      5
    ],
    "prune": [
      5,
      6
    ],
    "habit": "Тревисто многогодишно; листата зависят от зимните условия",
    "soil": "Хумусна, влажна, но отцедлива.",
    "note": "Пролетният цъфтеж е отделен от летния цъфтеж на хортензията. Летният акцент е листната маса.",
    "url": "https://www.rhs.org.uk/plants/151060/pulmonaria-trevi-fountain/details",
    "group": "composition",
    "mode": "навън",
    "winter": "Обичайно отглеждане навън при подходящи условия; пази младите растения от изсушаване и зимно преовлажняване.",
    "issues": []
  },
  {
    "id": "ajuga-gold-chang",
    "name": "Аюга Gold Chang",
    "latin": "Ajuga reptans ‘Gold Chang’",
    "category": "Цветя и почвопокривни",
    "light": [
      "Полусянка",
      "Сянка"
    ],
    "water": "Умерено",
    "look": "Ниски лаймови до жълтозелени розетки, които се разстилат с вкореняващи се ластуни.",
    "care": [
      "Поддържай свежа, отцедлива почва; наблюдавай влагата при повече слънце.",
      "Ограничавай ластуните по ръба на алеята и около съседните растения.",
      "Не затрупвай розетките с дебел мулч; проверявай за загниване в постоянно мокри участъци."
    ],
    "height": "10–15",
    "width": "40–45",
    "spacing": 30,
    "bloom": [
      4,
      5
    ],
    "prune": [
      5,
      6,
      9
    ],
    "habit": "Вечнозелено / полувечнозелено според зимата",
    "soil": "Свежа, дренирана градинска почва.",
    "note": "Името и размерите са по обявения сорт; потвърди етикета при покупка. Окраската зависи от светлината. Не е растение за редовно стъпване.",
    "url": "https://www.rhs.org.uk/plants/742/ajuga-reptans/details",
    "group": "composition",
    "mode": "навън",
    "winter": "Обичайно отглеждане навън при подходящи условия; пази младите растения от изсушаване и зимно преовлажняване.",
    "issues": []
  },
  {
    "id": "juniper-green-carpet",
    "name": "Хвойна Green Carpet",
    "latin": "Juniperus communis ‘Green Carpet’",
    "category": "Храсти",
    "light": [
      "Слънце",
      "Полусянка"
    ],
    "water": "Ниско",
    "look": "Много ниска стелеща се хвойна със ситни бодливи зелени игли и широко разстилащи се клони.",
    "care": [
      "Осигури добър дренаж и следи влагата до прихващане.",
      "Остави място за зрелия диаметър; не сгъстявай заради малкия размер на разсада.",
      "Отстранявай само повредените клони; не режи дълбоко в старо голо дърво."
    ],
    "height": "10–30",
    "width": "100–150",
    "spacing": 110,
    "bloom": [],
    "prune": [],
    "habit": "Вечнозелено",
    "soil": "Отцедлива почва; без постоянно мокра глина.",
    "note": "Различна от Juniperus horizontalis. Стелещият се зрял вид се постига постепенно; младите растения не покриват веднага лехата.",
    "url": "https://www.rhs.org.uk/plants/60301/juniperus-communis-green-carpet/details",
    "group": "composition",
    "mode": "навън",
    "winter": "Обичайно отглеждане навън при подходящи условия; пази младите растения от изсушаване и зимно преовлажняване.",
    "issues": []
  },
  {
    "id": "sedum-plum-dazzled",
    "name": "Седум Plum Dazzled",
    "latin": "Hylotelephium / Sedum SunSparkler ‘Plum Dazzled’",
    "category": "Цветя и почвопокривни",
    "light": [
      "Слънце"
    ],
    "water": "Ниско",
    "look": "Компактни ниски туфи с месести тъмнопурпурни листа и розови съцветия в края на лятото.",
    "care": [
      "Засади на слънце в добре отцедлива почва; пази кореновата шийка от задържана вода.",
      "При прихващане проверявай влагата, след това избягвай прекомерното поливане.",
      "Почисти сухите стъбла преди новия пролетен растеж."
    ],
    "height": "15–20",
    "width": "35–45",
    "spacing": 45,
    "bloom": [
      8,
      9
    ],
    "prune": [
      3
    ],
    "habit": "Тревисто многогодишно; зимен покой",
    "soil": "Умерено плодородна, добре дренирана, неутрална до слабо алкална.",
    "note": "Нисък сорт. Не заменяй с високия Hylotelephium spectabile от общия каталог. Пурпурната листна маса не е целогодишна зимна украса.",
    "url": "https://www.rhs.org.uk/plants/376608/hylotelephium-plum-dazzled-pldaz2018-sunsparkler-series/details",
    "group": "composition",
    "mode": "навън",
    "winter": "Обичайно отглеждане навън при подходящи условия; пази младите растения от изсушаване и зимно преовлажняване.",
    "issues": []
  }
];
for(const p of COMPOSITION_PLANTS){PLANT_CALENDAR[p.id]={lifecycle:'Многогодишно',habit:p.habit,bloom:p.bloom,planting:[4,5,9,10],height:p.height,width:p.width,spacing:p.spacing,soil:p.soil,prune:p.prune,winter:p.winter,safety:'Няма отделно проверена оценка за домашни любимци; липсата на данни не означава безопасност.',material:'Контейнерни растения; само в обработваема незамръзнала почва и при осигурено поливане.'};ENC_PLANTS.push({...p,bloom:gardenMonths(p.bloom)});}
const GARDEN_COMBOS=[
{id:'sun-purple',name:'Лилав бордюр край алея',type:'Край алея',light:'Слънце',water:'Ниско след вкореняване',soil:'Лека до средна почва с много добро оттичане.',region:'София и Кюстендилска област · проверка на дренажа',months:[5,6,7,8,9],planting:'Април–май или ранна есен при подходящо време.',description:'Ниска ароматна композиция с лилави цветове и сребристи листа. Оставя се свободен ръб до настилката.',layout:'Заден ред: компактна лавандула и многогодишна салвия. Среда: котешка мента. Преден ръб: синя власатка и вълнец. Подбери компактни сортове.',care:'Подрязвай прецъфтелите цветове според вида. Не режи лавандулата в старо голо дърво. Избягвай зимно преовлажняване.',note:'Поливането е по-често при прихващане. Лавандулата има потвърден риск за котки и кучета при поглъщане.',plants:[['lavender',4,60],['woodland-sage',4,45],['nepeta',3,60],['blue-fescue',5,35],['stachys',5,35]]},
{id:'sun-meadow',name:'Лятна многогодишна леха',type:'Леха',light:'Слънце',water:'Умерено',soil:'Дренирана градинска почва; без постоянно подгизване.',region:'София и Кюстендилска област',months:[6,7,8,9,10],planting:'Пролет или ранна есен, според посадъчния материал.',description:'Жълто, розово и бяло с вертикален тревист акцент за предна градина или по-широка леха.',layout:'Заден план: вейник. Среден: ехинацея и рудбекия. Преден: компактни кореопсис и декоративен равнец. При алея използвай ниски сортове откъм пътеката.',care:'Поливай при засушаване и след засаждане. Оставените сухи стъбла могат да служат за зимна структура; почисти преди новия растеж.',note:'Вейникът е висок акцент; тази комбинация не е за много тясна ивица.',plants:[['echinacea',4,50],['rudbeckia',4,50],['coreopsis',4,45],['achillea',3,50],['calamagrostis',2,80]]},
{id:'shade-leaves',name:'Листна леха на полусянка',type:'Леха',light:'Полусянка',water:'Редовно · равномерна влага',soil:'Хумусна, влажна, но дренирана почва.',region:'София и Кюстендилска област',months:[3,4,5,6,7,8],planting:'Пролет или ранна есен, извън горещините.',description:'Контраст на едри зелени листа и пурпурни туфи с пролетни и летни цветни акценти.',layout:'Задна част: хоста и астилбе. Среда: брунера. Преден ръб: бергения и хойхера. Пази от горещо следобедно слънце.',care:'Следи влагата и охлювите. Астилбето не е подходящо за суха сянка без осигурена вода. Провери сорта на хойхерата.',note:'Листната декоративност продължава по-дълго от общия период на цъфтеж. Сухата сянка под дървета изисква отделна оценка.',plants:[['hosta',3,70],['astilbe',4,50],['heuchera',4,40],['bergenia',4,45],['brunnera',3,50]]},
{id:'summer-path',name:'Цветна сезонна алея',type:'Край алея',light:'Слънце',water:'Редовно през лятото',soil:'Дренирана и умерено плодородна почва.',region:'София и Кюстендилска област · сезонна',months:[6,7,8,9,10],planting:'След преминаване на риска от слани; за София датата се проверява за конкретната година.',description:'Ярък летен бордюр с ниски сезонни цветя за вход или пътека.',layout:'Среда: ниски петунии и тагетес. Между тях: компактна вербена. Ръб: лобелия и алисум. Избери съгласувана цветова палитра от наличните сортове.',care:'Поливай при нужда в кореновата зона и премахвай прецъфтялото според вида. Алисумът и лобелията могат да отслабнат в силна жега.',note:'Това е сезонна композиция с подмяна; не е зимуваща многогодишна леха.',plants:[['petunia',12,35],['tagetes',12,30],['sweet-alyssum',12,25],['lobelia',12,25],['verbena',8,35]]},
{id:'spring-bulbs',name:'Пролетна луковична леха',type:'Леха',light:'Слънце / светла полусянка',water:'Умерено през активния растеж',soil:'Добре дренирана почва; без задържане на зимна вода.',region:'София и Кюстендилска област',months:[3,4,5],planting:'Луковици през есента според вида; теменуги есента или напролет.',description:'Пролетна композиция от луковични цветя с нисък цветен ръб от теменуги.',layout:'Групи от лалета и нарциси в средата, зюмбюли и мускари отпред, теменуги по ръба. Засаждай на групи, с дълбочина според вида и размера на луковицата.',care:'Остави листата на луковичните да пожълтеят естествено. Планирай летен заместител или съседни многогодишни, които да прикрият отмиращите листа.',note:'Цъфтежът е последователен и зависи от сорта; не всички видове цъфтят едновременно. Лалета и нарциси са токсични за домашни любимци.',plants:[['tulip',24,20],['daffodil',18,20],['hyacinth',12,20],['muscari',30,12],['pansy',16,25]]},
{id:'dry-rock',name:'Нисък сух бордюр с камък',type:'Край алея',light:'Слънце',water:'Ниско след вкореняване',soil:'Много пропусклива, минерална почва; без мокра зимна глина.',region:'София / Кюстендил · само защитено място за делоспермата',months:[5,6,7,8,9],planting:'Пролет, след тежките студове, с време за прихващане.',description:'Ниска композиция за дрениран ръб край чакъл или камък, с розови цветове и различни текстури.',layout:'Синя власатка на групи, карамфил и мащерка между тях, делосперма и дебелец по каменния ръб. Не използвай като настилка за редовно стъпване.',care:'Пази коронките от зимна влага. Следи прихващането и премахвай загнили части. Избери доказано устойчиви местни сортове.',note:'Делоспермата е условна за студени и мокри обекти; при съмнение я замени след оценка на място. Изображението не гарантира зимоустойчивост.',plants:[['delosperma',6,35],['sempervivum',10,20],['dianthus',6,35],['thyme',6,35],['blue-fescue',5,35]]}
,
{"id": "silver-lime", "name": "Сребро и лайм", "type": "Край алея", "light": "Полусянка", "water": "Редовно · равномерна влага", "soil": "Хумусна, влажна, но добре отцедлива почва. Пази от горещо следобедно слънце и суха сянка.", "region": "София и Кюстендилска област · проверка на местните зимни условия", "months": [4, 5, 6, 7, 8, 9], "planting": "Април–май или септември–октомври в незамръзнала почва, извън жеги и при осигурено поливане.", "description": "Многогодишен бордюр с бяло-розови летни хортензии, сребристо напетнени листа и лаймов преден ръб.", "layout": "Пример за ивица около 5 × 2 m: 5 компактни хортензии Polestar в задната част, 10 пулмонарии Trevi Fountain на групи в средата и 16 аюги Gold Chang по предния ръб. Изнеси растенията от настилката според зрелите им ширини. Разстоянията са ориентири между центровете; формата и редовете се уточняват на място.", "care": "Следи влагата в кореновата зона и осигури оттичане. Ограничавай ластуните на аюгата. Подрязвай метличестата хортензия преди пролетния растеж. Почиствай повредените листа на пулмонарията.", "note": "Пролетта акцентът е пулмонарията и аюгата, лятото — хортензията и листата. Общата снимка показва примерен развит летен вид, а не всички растения в едновременен цъфтеж. Бройките и сортовете се потвърждават преди изпълнение.", "plants": [["polestar", 5, 70], ["trevi-fountain", 10, 40], ["ajuga-gold-chang", 16, 30]]},
{"id": "green-purple", "name": "Зелен килим и пурпур", "type": "Край алея", "light": "Слънце", "water": "Ниско след вкореняване", "soil": "Добре дренирана почва; без постоянно мокра глина. Минералният мулч не заменя почвения дренаж.", "region": "София и Кюстендилска област · проверка на дренажа", "months": [8, 9], "planting": "Пролет или ранна есен в незамръзнала почва, с време за вкореняване.", "description": "Ниска композиция от вечнозелени острови и пурпурни туфи с розов къснолетен цъфтеж, подходяща край алея и каменен кът.", "layout": "Пример за 10 m²: 5 хвойни Green Carpet като отделни острови и 12 седума Plum Dazzled на групи между тях и към предния ръб. Остави място за разрастване на хвойните и свободни участъци с чакъл. Не сгъстявай по размера на младите саксийни растения.", "care": "Поливай внимателно до прихващане, след това според просъхването. Не мокри постоянно лехата заедно с тревата. Премахвай повредените клони на хвойната и сухите стъбла на седума преди новия растеж.", "note": "Хвойната е вечнозелена; седумът е със зимен покой. Снимката е примерен развит къснолетен вид. Малкият посадъчен материал ще се нуждае от време, за да достигне показаното покритие.", "plants": [["juniper-green-carpet", 5, 110], ["sedum-plum-dazzled", 12, 45]]}
];
const comboById=id=>GARDEN_COMBOS.find(c=>c.id===id);
const comboImage=c=>'./assets/combinations/'+c.id+'.png';
function comboMonths(c){return c.months.map(m=>['Ян','Фев','Мар','Апр','Май','Юни','Юли','Авг','Сеп','Окт','Ное','Дек'][m-1]).join(' · ')}
function comboBar(c){return `<div class="combo-months" aria-label="Ориентировъчен цъфтеж: ${esc(comboMonths(c))}">${['Я','Ф','М','А','М','Ю','Ю','А','С','О','Н','Д'].map((s,i)=>`<span class="${c.months.includes(i+1)?'bloom':''}" title="${i+1} месец">${s}</span>`).join('')}</div>`}
function comboCard(c){return `<article class="card combo-card"><button type="button" class="combo-image-button" data-action="combo-open" data-id="${c.id}" aria-label="Отвори ${esc(c.name)}"><img src="${comboImage(c)}" alt="Обща концептуална визуализация: ${esc(c.name)}" loading="lazy"></button><div class="combo-copy"><small>${esc(c.type)} · ${c.plants.length} растителни позиции</small><h2>${esc(c.name)}</h2><p>${esc(c.description)}</p><div class="combo-tags"><span>${esc(c.light)}</span><span>${esc(c.water)}</span></div>${comboBar(c)}${btn('Разгледай комбинацията','combo-open','leaf','primary wide',`data-id="${c.id}"`)}</div></article>`}
function combosView(){const light=state.comboLight||'',type=state.comboType||'',rows=GARDEN_COMBOS.filter(c=>(!light||c.light.toLocaleLowerCase('bg').includes(light.toLocaleLowerCase('bg')))&&(!type||c.type===type));return `<section class="card"><h2>Готови лехи и алеи</h2><p>Избери композиция, разгледай растенията и предложи вариант на клиента. Собствени предложения за София и Кюстендилска област.</p><div class="form-grid"><label class="field">Изложение<select id="combo-light"><option value="">Всички</option>${['Слънце','Полусянка'].map(v=>`<option ${v===light?'selected':''}>${v}</option>`).join('')}</select></label><label class="field">Приложение<select id="combo-type"><option value="">Всички</option>${['Леха','Край алея'].map(v=>`<option ${v===type?'selected':''}>${v}</option>`).join('')}</select></label></div><small>Общите изображения са генерирани концептуални визуализации, а не снимки на реализирани обекти. Реалните вид и размер зависят от сорта, сезона и грижите.</small></section><div class="combo-grid">${rows.map(comboCard).join('')||empty()}</div>`}
function comboDetail(){const c=comboById(state.comboId);if(!c)return empty();return `<article class="card combo-card"><img class="combo-hero" src="${comboImage(c)}" alt="Концептуална визуализация: ${esc(c.name)}"><div class="combo-copy"><small>${esc(c.type)} · концептуална визуализация</small><h2>${esc(c.name)}</h2><p>${esc(c.description)}</p><div class="combo-tags"><span>${esc(c.light)}</span><span>${esc(c.water)}</span></div>${comboBar(c)}<h3>Условия и засаждане</h3><p>${esc(c.region)}</p><p>${esc(c.soil)}</p><p>${esc(c.planting)}</p><h3>Подредба</h3><p>${esc(c.layout)}</p><h3>Растения — отвори досие</h3><p>Примерен модул 10 m². Бройките са начална идея и се редактират според сорта и формата.</p>${c.plants.map(([id,qty,spacing],i)=>{const p=encFind(id);return `<button class="list-row combo-plant" type="button" data-action="enc-open" data-id="${id}"><span class="combo-number">${i+1}</span><span class="grow"><strong>${esc(p.name)}</strong><small>${esc(p.latin)} · ${qty} бр. / 10 m² · ${spacing} cm ориентир</small></span>${icon('chevron')}</button>`}).join('')}<h3>Грижи</h3><p>${esc(c.care)}</p><div class="notice">${esc(c.note)}<br>За всяко растение провери отделната оценка за домашни любимци. Липсата на данни не означава безопасност.</div><div class="actions">${btn('Използвай за обект','combo-use','plus','primary wide',`data-id="${c.id}"`)}${btn('Клиентско предложение PDF','combo-pdf','download','secondary wide',`data-id="${c.id}"`)}${btn('Сподели предложение','combo-share','download','secondary wide',`data-id="${c.id}"`)}</div><small>Визуализацията е пример, не обещание за точен резултат. Цената се изготвя отделно след измерване, избор на сортове и наличности.</small></div></article>`}
function comboPlantRows(c,area){const a=gpNum(area,'площ',.1,1e5);return c.plants.map(([plantId,qty,spacing])=>({plantId,qty:Math.max(1,Math.ceil(qty*a/10)),spacing,price:''}))}
function comboUse(id){const c=comboById(id),zones=db.gardenZones.filter(z=>z.active!==false);if(!c)return;if(!zones.length)return modal('Първо добави зона',`<p>От „Градина и планиране“ добави клиентски обект и измерена зона. След това избери готовата комбинация.</p>${btn('Градина и планиране','combo-zones','leaf','primary wide')}`);modal('Комбинация към обект',`<form id="combo-use-form" data-id="${c.id}"><p>${esc(c.name)}. Изборът отваря редактируем план; не записва растения или оферта автоматично.</p><label class="field">Зона<select name="zoneId" required>${zones.map(z=>`<option value="${z.id}" ${z.id===state.gpZone?'selected':''}>${esc(cname(z.clientId)+' · '+z.name+' · '+gpN(z.area)+' m²')}</option>`).join('')}</select></label><p>Бройките се мащабират спрямо измерената площ. При тясна алея и различна форма провери подредбата и зрелите размери.</p><button type="submit" class="primary wide">Отвори план за преглед</button></form>`)}
function comboText(c){return `${c.description}\n\nИЗЛОЖЕНИЕ И ВОДА\n${c.light} · ${c.water}\n${c.soil}\n${c.region}\n\nЗАСАЖДАНЕ\n${c.planting}\nОриентировъчен цъфтеж на състава: ${comboMonths(c)}. Видовете не цъфтят непременно едновременно.\n\nСЪСТАВ — ПРИМЕР ЗА 10 m²\n${c.plants.map(([id,q,s],i)=>`${i+1}. ${encFind(id).name} (${encFind(id).latin}) — ${q} бр.; ориентир ${s} cm`).join('\n')}\n\nПОДРЕДБА\n${c.layout}\n\nГРИЖИ\n${c.care}\n${c.note}\n\nБройките са примерни и се уточняват след измерване, избор на сортове и проверка на наличности. Общото изображение е генерирана концептуална визуализация, а не снимка на изпълнен обект. Цената се предлага отделно. Проверява се рискът за домашни любимци по конкретен вид.`}
async function comboPDF(id,share=false){const c=comboById(id);if(!c)return;toast('Подготвям предложение…');const company=GFTemplates.company({contractorMode:'brand'}),blob=await createPDF(c.name,comboText(c),{company,cover:{image:comboImage(c),title:c.name,price:'Идея за градината',priceLabel:'Концептуална визуализация · цена след уточняване',owner:'GreenForce Озеленяване',facts:[['Приложение',c.type],['Условия',c.light],['Модул','Примерен състав за 10 m²']]}}),name='GreenForce-combination-'+id+'.pdf';if(share)await shareReady(blob,name,'Сподели предложение за озеленяване');else{download(blob,name);toast('Предложението е готово.')}}
function setupCombinations(){schemas.documents.splice(schemas.documents.findIndex(f=>f.key==='coverPhoto'),0,f('comboCoverId','Визуализация на готова комбинация','select',false,GARDEN_COMBOS.map(c=>c.id)));const field=fieldHTML;fieldHTML=function(fld,value){if(fld.key==='comboCoverId')return `<label class="field full">Визуализация на готова комбинация<select name="comboCoverId" id="field-comboCoverId"><option value="">Без готова композиция</option>${GARDEN_COMBOS.map(c=>`<option value="${c.id}" ${value===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select><small>Използва се за корицата. Качена собствена снимка има предимство.</small></label>`;return field(fld,value)};const pdf=documentPDFOptions;documentPDFOptions=function(r){const opts=pdf(r),c=comboById(r.comboCoverId);if(c&&!r.coverPhoto&&opts.cover)opts.cover.image=comboImage(c);return opts};titles.combinations='Готови лехи и алеи';titles['combination-detail']='Комбинация за озеленяване';views.combinations=combosView;views['combination-detail']=comboDetail;const zones=views['garden-tools'];views['garden-tools']=()=>`${!state.gardenTool?btn('Готови лехи и алеи','go','leaf','primary wide','data-page="combinations"'):''}`+zones();const zv=views['garden-zone'];views['garden-zone']=()=>btn('Избери готова комбинация','go','leaf','primary wide','data-page="combinations"')+zv();const quick=views['garden-tools'];views['garden-tools']=()=>state.gardenTool==='combination'?combosView():quick();const original=gpOfferPref;gpOfferPref=(p,rows)=>{const pref=original(p,rows),c=comboById(p.inputs.comboId);if(c){pref.comboCoverId=c.id;pref.scope+='\nКонцепция: '+c.name+'. Общата визуализация е примерна; сортовете и окончателната подредба се уточняват преди изпълнение.';}return pref};document.addEventListener('change',e=>{if(e.target.id==='combo-light'||e.target.id==='combo-type'){state[e.target.id==='combo-light'?'comboLight':'comboType']=e.target.value;render()}});document.addEventListener('submit',e=>{if(e.target.id!=='combo-use-form')return;e.preventDefault();try{const c=comboById(e.target.dataset.id),z=gpZone(e.target.elements.zoneId.value);if(!c||!z||z.active===false)throw Error('Избери активна зона.');const pref={title:c.name+' — '+z.name,inputs:{comboId:c.id,plants:comboPlantRows(c,z.area),notes:c.layout+'\n'+c.note}};gpCloseThen(()=>gpPlanEditor(z.id,'bed','',pref));}catch(err){toast(err.message)}});document.addEventListener('click',async e=>{const b=e.target.closest('[data-action^="combo-"]');if(!b)return;try{switch(b.dataset.action){case'combo-open':go('combination-detail',{comboId:b.dataset.id});break;case'combo-use':comboUse(b.dataset.id);break;case'combo-pdf':await comboPDF(b.dataset.id);break;case'combo-share':await comboPDF(b.dataset.id,true);break;case'combo-zones':gpCloseThen(()=>go('garden-tools'));break}}catch(err){toast('Неуспешно: '+err.message)}})}
