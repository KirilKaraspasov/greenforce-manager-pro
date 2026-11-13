'use strict';
// Public price references, consulted 2026-11-13. Not partner-specific prices or live stock.
const IRR_SUPPLIER_CATALOG=[
  {
    "id": "nap-06d017bf3070",
    "name": "DAWN Водовземна скоба самопробивна ф32 х 3/4\"",
    "group": "Други",
    "unit": "бр.",
    "price": 4.5,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ca491da24641",
    "name": "FlexSG 30m Тръба за мека връзка Hunter 30 метра",
    "group": "Други",
    "unit": "ролка",
    "price": 54.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-62d8ff3341f5",
    "name": "FlexSG Тръба за мека връзка Hunter 1 метър",
    "group": "Други",
    "unit": "m",
    "price": 1.92,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4ae9f6ae12d6",
    "name": "HC-075-FLOW-B Водомер електронен Hunter \"HC-075-FLOW\", 3/4\" (20 мм) външна резба BSP, литри",
    "group": "Други",
    "unit": "бр.",
    "price": 288.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-dfed158ae1d3",
    "name": "HC-100-FLOW-B Водомер електронен Hunter \"HC-100-FLOW\", 1\" (25 мм) външна резба BSP, литри",
    "group": "Други",
    "unit": "бр.",
    "price": 330.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ccd3f736b7b5",
    "name": "HSBE-050 Коляно Hunter 1/2\" - коничен накрайник",
    "group": "Други",
    "unit": "бр.",
    "price": 0.42,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-28ef32960f9f",
    "name": "HSBE-075 Коляно Hunter 3/4\" - коничен накрайник",
    "group": "Други",
    "unit": "бр.",
    "price": 0.42,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fa4b4f97c88a",
    "name": "SJ-075 Коляно 3/4\" - коничен накрайник",
    "group": "Други",
    "unit": "бр.",
    "price": 0.6,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a5b95a582fa5",
    "name": "Бърза връзка PE адаптор 16х3/4\" мъжко PN4",
    "group": "Други",
    "unit": "бр.",
    "price": 0.48,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-551f92a1eadc",
    "name": "Бърза връзка PE коляно 16 PN4",
    "group": "Други",
    "unit": "бр.",
    "price": 0.84,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-39e0d48bda4e",
    "name": "Бърза връзка PE муфа 16 PN4",
    "group": "Други",
    "unit": "бр.",
    "price": 0.54,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b334d36f5b5a",
    "name": "Бърза връзка PE тройник 16 PN4",
    "group": "Други",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-61cac1201d02",
    "name": "Водовземна скоба ф20-1/2\"",
    "group": "Други",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-af2a639c9f9c",
    "name": "Водовземна скоба ф25-1/2\"",
    "group": "Други",
    "unit": "бр.",
    "price": 1.2,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0f85494a8f5d",
    "name": "Водовземна скоба ф25-3/4\"",
    "group": "Други",
    "unit": "бр.",
    "price": 1.2,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-dbff1a125330",
    "name": "Водовземна скоба ф32-1/2\"",
    "group": "Други",
    "unit": "бр.",
    "price": 1.26,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4e6b64d8fedc",
    "name": "Водовземна скоба ф32-3/4\"",
    "group": "Други",
    "unit": "бр.",
    "price": 1.26,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6791dfa2a97d",
    "name": "Капа 1\" PP с О-пръстен TAVCF1S",
    "group": "Други",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d5c09cd271d0",
    "name": "Капа с резба Rain Bird RB1348-010",
    "group": "Други",
    "unit": "бр.",
    "price": 2.52,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-bdf1c473cdd6",
    "name": "Капа с резба и О-пръстен",
    "group": "Други",
    "unit": "бр.",
    "price": 1.26,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b977a80c82b7",
    "name": "Ключ за хидрант 3/4\"М",
    "group": "Други",
    "unit": "бр.",
    "price": 2.76,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c92e8a95fca5",
    "name": "Ключ за хидрант Rain Bird P-33DK - 3/4\"М - самозаключващ",
    "group": "Други",
    "unit": "бр.",
    "price": 4.92,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8b047867eb93",
    "name": "Коляно коничен накрайник 3/4“ за самопробивни водовземни скоби SW1413-099",
    "group": "Други",
    "unit": "бр.",
    "price": 0.48,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6ea99f6355c9",
    "name": "Кран сферичен 1\" Ж/Ж",
    "group": "Други",
    "unit": "бр.",
    "price": 15.6,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6f734839d1ba",
    "name": "Кран сферичен 1\" ПЕ Ж/Ж",
    "group": "Други",
    "unit": "бр.",
    "price": 9.6,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-07a61f55c6f1",
    "name": "Кран сферичен 3/4\" ПЕ Ж/Ж",
    "group": "Други",
    "unit": "бр.",
    "price": 7.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8e63193cbac3",
    "name": "Тефлонова лента Pro 12мм. X 12 метра Х 0,10 мм - малка",
    "group": "Други",
    "unit": "бр.",
    "price": 1.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-083c2f4ce747",
    "name": "Тефлонова лента Pro 19мм. X 15 метра Х 0,20 мм",
    "group": "Други",
    "unit": "бр.",
    "price": 2.88,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-589d1f3fb051",
    "name": "Тръба за мека връзка Rain Bird SPX- FLEX 1 метър A82060",
    "group": "Други",
    "unit": "m",
    "price": 1.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0038a6210c25",
    "name": "Тръба за мека връзка Rain Bird SPX-FLEX 30 метра A82060",
    "group": "Други",
    "unit": "ролка",
    "price": 52.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-29db61611ef8",
    "name": "Тръба транспортна 16 mm полиетилен кафява налягане до 3,5 bar, дебелина на стената 1.25 mm, ролка 100 m",
    "group": "Други",
    "unit": "ролка",
    "price": 61.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-463682848565",
    "name": "Флаг маркиращ Rain Bird зелен",
    "group": "Други",
    "unit": "бр.",
    "price": 0.48,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d7f9c6545437",
    "name": "Хидрант за водовземане",
    "group": "Други",
    "unit": "бр.",
    "price": 6.84,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7eb478b20ac5",
    "name": "Хидрант за водовземане Rain Bird P-33",
    "group": "Други",
    "unit": "бр.",
    "price": 24.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-464950ec9f2d",
    "name": "100-DVF 24V Клапан електромагнитен Rain Bird 24V AC 1\" с регулатор на дебита B70311",
    "group": "Капково",
    "unit": "бр.",
    "price": 46.8,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6e90d5809b6c",
    "name": "100-DVF 9V Клапан електромагнитен Rain Bird 1\" 9V с регулатор на дебита B70350",
    "group": "Капково",
    "unit": "бр.",
    "price": 60.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-17847a918775",
    "name": "10A-HE Дюза Hunter + филтър",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-aec77fa7d123",
    "name": "12A-HE Дюза Hunter + филтър",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-230ec3fe836a",
    "name": "15A-HE Дюза Hunter + филтър",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-82850d76cb52",
    "name": "17A-HE Дюза Hunter + филтър",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-719b967c4f0b",
    "name": "5012+PCSAMR Разпръсквач роторен 5012 Plus с височина 30 см. регулируем сектор от 40 до 360 с антидренажен клапан, регулатор на налягане 3.1 bar + дюзи комплект Y66050",
    "group": "Капково",
    "unit": "бр.",
    "price": 66.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-04bf11eb31ab",
    "name": "8A-HE Дюза Hunter + филтър",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f9f21e90dc9a",
    "name": "IPRF100RBY Филтър Rain Bird 75 микрона с вграден регулатор на налягане - 2.8 bar X13013",
    "group": "Капково",
    "unit": "бр.",
    "price": 26.4,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13",
    "conflict": true
  },
  {
    "id": "nap-be55f5d7c001",
    "name": "PGV-101-G-B Клапан електромагнитен Hunter 24V AC / с регулатор на дебита",
    "group": "Капково",
    "unit": "бр.",
    "price": 27.6,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ed6d17dee64a",
    "name": "PGV-101-MM-B Клапан електромагнитен Hunter 24V AC 1\" с регулатор на дебита",
    "group": "Капково",
    "unit": "бр.",
    "price": 27.6,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cc544a7a2ec8",
    "name": "PSI-M25 Регулатор на налягане Rain Bird 1.72 bar 3/4\" A8860025",
    "group": "Капково",
    "unit": "бр.",
    "price": 20.4,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6199dd8b17e8",
    "name": "PSI-M30 Регулатор на налягане Rain Bird 2.1 bar 3/4\" A8860030",
    "group": "Капково",
    "unit": "бр.",
    "price": 20.4,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b984ab099bc1",
    "name": "PSI-M40 Регулатор на налягане Rain Bird 2.8 bar 3/4\" A8860040",
    "group": "Капково",
    "unit": "бр.",
    "price": 20.4,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7dca71476fb5",
    "name": "PUSH Тройник за капково ф16 капков маркуч - ф20 HDPE - ф16 капков маркуч",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5363f061c9a0",
    "name": "PUSH Тройник за капково ф16 капков маркуч - ф25 HDPE - ф16 капков маркуч",
    "group": "Капково",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9fdeb828cf5e",
    "name": "PUSH Тройник за капково ф20 - ф16 капков маркуч - ф20 HDPE",
    "group": "Капково",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d5a88b844bc3",
    "name": "PUSH Тройник за капково ф25 - ф16 капков маркуч - ф25 HDPE",
    "group": "Капково",
    "unit": "бр.",
    "price": 2.52,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d93acf0bd553",
    "name": "XM Tool Инструмент за поставяне на капкоотделители Rain Bird X80100",
    "group": "Капково",
    "unit": "бр.",
    "price": 4.8,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fa949a04553a",
    "name": "Адаптор ( съединител ) за ф16 - лентов маркуч",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.24,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-bdd7d505b340",
    "name": "Външен капкообразувател за капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.15,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-17f71b8c1bbf",
    "name": "Външен капкообразувател регулируем 0-150 л/ч",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.24,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1bad75c7af7f",
    "name": "Външен капкообразувател регулируем 0-40 л/ч",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.12,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4a1ee67f7373",
    "name": "Външен капкообразувател регулируем 0-40 л/ч с КОЛЧЕ",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.24,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-99ce861dc19c",
    "name": "Външен компенсиращ капкообразувател с мембрана",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.24,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d93ade59e7fa",
    "name": "ГОЛЯМ Кръгъл дозатор iCircle™ 250mm (10\") с 8 капкообразувателя",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0d5b8153a160",
    "name": "Замба 3мм. за тръба ф16 ф20 LDPE",
    "group": "Капково",
    "unit": "бр.",
    "price": 7.44,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fee2254961f9",
    "name": "Капков маркуч AZUD PREMIER PC AS GARDENING - 100 м.",
    "group": "Капково",
    "unit": "ролка",
    "price": 90.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a79a27a53b87",
    "name": "Капков маркуч Hunter HDL-22-30-100-COP за подземно капково напояване - 100 м.",
    "group": "Капково",
    "unit": "ролка",
    "price": 162.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9f79de713c66",
    "name": "Капков маркуч Rain Bird XFD за напояване - 1 метър XFD 2333100 X44202",
    "group": "Капково",
    "unit": "m",
    "price": 1.62,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f40139d90660",
    "name": "Капков маркуч Rain Bird XFD за напояване - 100 метра XFD 2333100 X44202",
    "group": "Капково",
    "unit": "бр.",
    "price": 124.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-59ef3f733279",
    "name": "Капков маркуч Rain Bird XFS за подземно капково напояване - 100 м. XFS 2333100 X48201",
    "group": "Капково",
    "unit": "ролка",
    "price": 186.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3badc62b3126",
    "name": "Капков маркуч Rain Bird XFS за подземно капково напояване XFS 2333100 X48201",
    "group": "Капково",
    "unit": "бр.",
    "price": 2.76,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c00824005fab",
    "name": "Капков маркуч многосезонен Junior 16/2,1/30 44 mil ролка 100m",
    "group": "Капково",
    "unit": "ролка",
    "price": 43.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0948eb6aa135",
    "name": "Капков маркуч многосезонен Junior 16/2,1/30 44 mil ролка 25m",
    "group": "Капково",
    "unit": "ролка",
    "price": 15.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-580383b8efea",
    "name": "Капков маркуч многосезонен Junior 16/2,1/30 44 mil ролка 50m",
    "group": "Капково",
    "unit": "ролка",
    "price": 24.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5194db8adb32",
    "name": "Капкообразувател с мембрана Rain Bird Xeri-Bug™ Emitters",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.42,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ce5f1a56ecea",
    "name": "Клапан електромагнитен Hunter PGV-101-MM 9V DC 1\" с регулатор на дебита",
    "group": "Капково",
    "unit": "бр.",
    "price": 44.4,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ac44804c2f94",
    "name": "Клещи замба 3мм. за тръба капкова ф16 ф20 LDPE",
    "group": "Капково",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9eea050049bd",
    "name": "Колче за микротръба 3-4 mm. 45°",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-559b65c1b01e",
    "name": "Колче за микротръба 3-4-5-6-7 mm.",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.12,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a01dc0ee76e5",
    "name": "Колче за микротръба 5-6 mm.",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.12,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-65d40211664f",
    "name": "Колче за тръба ф16 - ЧЕРНО капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-09b532dc4f78",
    "name": "Колче за тръба ф16 20 : капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-756d6b6d2e37",
    "name": "Колче за тръба ф16 20 КАФЯВО : капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cd8ee869052c",
    "name": "Колче за тръба ф16 Azud КАФЯВО - капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ae3028220808",
    "name": "Колче за тръба ф16 Azud Черно - капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ae03962a3c15",
    "name": "Колче за тръба ф16 КАФЯВО - капково напояване",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.18,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8da459a3e2b2",
    "name": "МАЛЪК Кръгъл дозатор iCircle™ 125mm (5\") с 4 капкообразувателя",
    "group": "Капково",
    "unit": "бр.",
    "price": 1.62,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ca6cf5f53270",
    "name": "Маркуч капков 16 mm IREX, ролка 100 m с компенсиращ капкоотделител през 33 cm, дебит 2.4 l/h",
    "group": "Капково",
    "unit": "ролка",
    "price": 90.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a6b3cfa38261",
    "name": "Маркуч капков 16 mm IREX, ролка 50 m с компенсиращ капкоотделител през 33 cm, дебит 2.4 l/h",
    "group": "Капково",
    "unit": "ролка",
    "price": 48.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8c703f4212c1",
    "name": "Регулатор на налягане Hunter Accu-Sync регулируем от 2.0 до 6.9 атм. за всички клапани Hunter",
    "group": "Капково",
    "unit": "бр.",
    "price": 69.0,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-328712930747",
    "name": "Регулатор на налягане Hunter Senninger PMR 1\" max - 2.10 bar - 4.51 m3/h",
    "group": "Капково",
    "unit": "бр.",
    "price": 24.54,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13",
    "conflict": true
  },
  {
    "id": "nap-eeef26b960a5",
    "name": "Регулатор на налягане Hunter Senninger PRL 3/4\" max - 1.72 bar - 1.81 m3/h",
    "group": "Капково",
    "unit": "бр.",
    "price": 16.2,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4897ae6d28a7",
    "name": "Регулатор на налягане Senninger 0,70 bar 0,11-3,40 m3/h 3/4\" (ж/ж) PSR-2",
    "group": "Капково",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f57430b9c397",
    "name": "Регулатор на налягане Senninger 1,03 bar 0,11-3,40 m3/h 3/4\" (ж/ж) PSR-2",
    "group": "Капково",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ab307e302ee3",
    "name": "Регулатор на налягане Senninger 1,40 bar 0,11-3,40 m3/h 3/4\" (ж/ж) PSR2",
    "group": "Капково",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1311e52c40d4",
    "name": "Регулатор на налягане Senninger 1,72 bar 0,11-3,40 m3/h 3/4\" (ж/ж) PSR2",
    "group": "Капково",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d0a56470e227",
    "name": "Регулатор на налягане Senninger 2,40 bar 0,45-4,50 m3/h 1\" (ж/ж) PMR MF",
    "group": "Капково",
    "unit": "бр.",
    "price": 25.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-175a435230b7",
    "name": "Регулатор на налягане Senninger 3,40 bar 0,45-4,50 m3/h 1\" (ж/ж) PMR MF",
    "group": "Капково",
    "unit": "бр.",
    "price": 25.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6ed60a8bf6d2",
    "name": "Скоба(кукичка) за закачане на капков маркуч - тръба капкова",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.12,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cb73e2cd2b19",
    "name": "Тandem Капков маркуч многосезонен Irritec 16/2,1/33 44 mil кафяв 100m",
    "group": "Капково",
    "unit": "бр.",
    "price": 48.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-43937b73759e",
    "name": "Филтър 1\" дисков AZUD 130 микрона",
    "group": "Капково",
    "unit": "бр.",
    "price": 10.2,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13",
    "conflict": true
  },
  {
    "id": "nap-99627bf4427a",
    "name": "Филтър 3/4\" дисков AZUD 130 микрона",
    "group": "Капково",
    "unit": "бр.",
    "price": 9.6,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13",
    "conflict": true
  },
  {
    "id": "nap-4f37d972d69a",
    "name": "Филтър Hunter HFR-100-075-25 с вграден регулатор на налягане - 1.7 bar",
    "group": "Капково",
    "unit": "бр.",
    "price": 48.0,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3e47b9388219",
    "name": "Шило за капкообразуватели за тръба ф16 ф20 LDPE 1 мм.",
    "group": "Капково",
    "unit": "бр.",
    "price": 0.54,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f6ac85603952",
    "name": "100-DV 24V Клапан електромагнитен Rain Bird - 1\" B70211",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 36.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a9434c6086ea",
    "name": "100-DV 9V Клапан електромагнитен Rain Bird 100-DV - 1\" 9V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 78.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-88fad2666087",
    "name": "100-DV MM Клапан електромагнитен Rain Bird 24VAC 1\" външна резба B70500",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 36.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3c8cf144f80f",
    "name": "269200SP Инструмент за регулиране на дебита на клапани Hunter PGV 101",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.88,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cb96d7710676",
    "name": "332100SP Мембрана диафрагма за клапан Hunter PGV 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 12.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-dcec68261007",
    "name": "3504-SAM Разпръсквач Rain Bird 3504 - PC - SAM - + антидр. клапан + дюзи комп. - радиус (4,6-10,7 метра) Y34500",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 28.8,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-87f12b01dcdf",
    "name": "BER17186 Шахта хидрант с кран 3/4\" М Bergo",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 24.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2e8ba99fdb3a",
    "name": "I-20-04-SS Разпръсквач Hunter I-20 - радуис (9,1-14,0 метра) + затв. клапан + стебло метал",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 38.4,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-104b9b2f438c",
    "name": "PGV-100-G-B Клапан електромагнитен Hunter 24V AC",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 27.6,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e62b2a3bb232",
    "name": "PGV-100-G-B-DC Клапан електромагнитен Hunter 1\" без рег.на дебита със соленоид на 9V DC",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 30.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e9604d84402f",
    "name": "PGV-100-MM-B Клапан електромагнитен Hunter 24V AC 1\" външна резба",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 27.6,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6ceea4deb2ec",
    "name": "PGV-101-G-B-DC Клапан електромагнитен Hunter - 1\" с рег.на дебита със соленоид на 9V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 44.4,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6793944c9d04",
    "name": "PGV-151-B Клапан електромагнитен Hunter 1 1/2\" 24V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 78.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-70b200c9c1b5",
    "name": "PGV-201-B Клапан електромагнитен Hunter 2\" 24V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 93.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2a0c268ab9fc",
    "name": "SOLASSG4 Соленоид Rain Bird 24V за клапани серия PGA, PEB и BPES",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 67.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ea9d2173052b",
    "name": "Адаптер(съединител) с холендър за тръба HDPE PN10",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.52,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5725eefc6343",
    "name": "Адаптор за клапани 1\" PP холендров Tavlit TAVSFM1",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 3.96,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3ef2d0068364",
    "name": "Адаптор резба / холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.46,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f014537c55f5",
    "name": "Адаптор холендър / холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 3.24,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4e5b551246b9",
    "name": "Клапан дренажен 3/4\" 3,4л/мин.",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e0ca2fb6fa77",
    "name": "Клапан електромагнитен Hunter PGV 100G-B - 1\" 9V - 20 броя",
    "group": "Клапани и шахти",
    "unit": "комплект",
    "price": 600.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5931b0cfdc34",
    "name": "Клапан електромагнитен Hunter PGV 100G-B - 1\" БЕЗ СОЛЕНОИД",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-02edf0cfe288",
    "name": "Клапан електромагнитен Hunter PGV 101G-B - 1\" БЕЗ СОЛЕНОИД",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-43e92fa7c26b",
    "name": "Клапан електромагнитен Hunter PGV-151-B 9 VDC 1 1/2\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 114.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a2714b27fd5a",
    "name": "Клапан електромагнитен Hunter PGV-201-B 9 VDC 2\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 129.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-573aec15e678",
    "name": "Клапан електромагнитен PGV 101-MM - 1\" БЕЗ СОЛЕНОИД",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-dbf8aded0020",
    "name": "Клапан електромагнитен Rain Bird 100-DV - 1\" без соленоид",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 20.4,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2c181d85a408",
    "name": "Клапан електромагнитен Rain Bird 100-DV MM 9V 1\" външна резба",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 60.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f88e87fbc573",
    "name": "Клапан електромагнитен Rain Bird 150-PGA - 1 1/2\" 24V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 102.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-bb94d1961ad3",
    "name": "Клапан електромагнитен Rain Bird 150-PGA 9V DC - 1 1/2\" 9V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 141.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-528b5c6a2334",
    "name": "Клапан електромагнитен Rain Bird 200-PGA - 2\" 24V B31610",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 153.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c081f855d140",
    "name": "Клапан електромагнитен Rain Bird 200-PGA 9V - 2\" 9V",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 184.8,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-da9d0ea1dfe6",
    "name": "Клапан електромагнитен Rain Bird LFV075 24V X12100 - 3/4\" 24V за нисък дебит",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 38.4,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0accb712077b",
    "name": "Клапан електромагнитен Rain Bird LFV075 9V X12105 - 3/4\" 9V за нисък дебит",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 60.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-49db9761760d",
    "name": "Клапан електромагнитен Rain RN 155 Plus 24V AC 1\"М / холендър без рег. на дебита + Колектор за клапани 4-пътен / холендров 1\"Ж + Кран + Нипел + Тапа + Адаптори",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 162.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-69f41b121c16",
    "name": "Клапан електромагнитен Rain RN 155 Plus 24V AC 1\"М / холендър с рег. на дебита + Колектор за клапани 4-пътен / холендров 1\"Ж",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 90.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d830223380de",
    "name": "Клапан електромагнитен Rain RN 155 Plus 24V AC 1\"М / холендър с рег. на дебита + Колектор за клапани 4-пътен / холендров 1\"Ж + РЕШЕТКА",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 90.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3834493699c0",
    "name": "Клапан електромагнитен Rain RN 155 Plus 9V DC 1\"М / холендър с рег. на дебита + Колектор за клапани 4-пътен / холендров 1\"Ж + решетка",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 114.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cc827d5cce0f",
    "name": "Колектор 2-изхода 1\" PP холендров модел Tavlit TAVSTMF12",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 14.4,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2e4d8b909fe1",
    "name": "Колектор 3-изхода 1\" PP холендров модел Tavlit TAVSTMF13",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 21.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-38b2cfc65adb",
    "name": "Колектор 4-изхода 1\" PP холендров модел Tavlit TAVSTMF14",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 28.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2e4bcbf8a56d",
    "name": "Колектор за клапани 2-пътен / холендров 1\"Ж",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 7.44,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7b674581dae4",
    "name": "Колектор за клапани 3-пътен / холендров 1\"Ж",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 9.84,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1249f052c3f4",
    "name": "Колектор за клапани 4-пътен / холендров 1\"Ж",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 12.24,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c8b4235de15e",
    "name": "Коляно за клапани 1\" PP (1 холендър Ж) х 1\" М Tavlit TAVSEFM1",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 6.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d621b1332c2c",
    "name": "Коляно за клапани 1\" PP холендрово Tavlit TAVSEF1",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 6.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-da45cfe708a8",
    "name": "Коляно резба / холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.76,
    "url": "https://napoqvane.com/accessories?page=2",
    "checked": "2026-11-13",
    "conflict": true
  },
  {
    "id": "nap-555fa3c492cf",
    "name": "Коляно с холендър за тръба HDPE PN10",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.52,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0df0512fad2b",
    "name": "Коляно холендър / холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 3.06,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fa6d200e991e",
    "name": "Кран сферичен 1\" М / 1\" холендър",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 15.3,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-92993fabbc4b",
    "name": "Решетка с 2 бр. държачи за шахта правоъгълна PZR 113 EzOpen ‐ STANDARD 12\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 12.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-17eb5767f995",
    "name": "Решетка с 3 бр. държачи за шахта правоъгълна PZR 115 EzOpen ‐ JUMBO 20\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 15.0,
    "url": "https://napoqvane.com/valves",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-378ed40baa64",
    "name": "Соленоид Hunter 24V АC за всички модели клапани Hunter",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 15.0,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e2340e90b35e",
    "name": "Соленоид Hunter 9V DC за всички модели клапани Hunter",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 26.4,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0b082685fa94",
    "name": "Соленоид Rain Bird 24V АC за DV, DVF и LFV клапани RPKSOLENOI",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 28.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3f6eee3f2c81",
    "name": "Соленоид Rain Bird 24V АC за HV и HVF клапани",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 19.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c74042500fec",
    "name": "Соленоид Rain Bird 9V DC за DV, DVF и LVF клапани K80920",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 46.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fbd9cfdfa7f4",
    "name": "Тройник за клапани 1\" PP (2 холендъра Ж) х 1\" М Tavlit TAVSTMF1",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 7.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3d9ccf75ca03",
    "name": "Тройник/Колектор за клапани 2-пътен / холендров 1\"Ж",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 3.06,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-42031026c9aa",
    "name": "Уплътнение за колектор за клапани 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 0.12,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e93af023544f",
    "name": "Хидроизолираща връзка Blazing BVS-1 за елекромагнитни клапани",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a8f353a458b7",
    "name": "Хидроизолираща връзка за елекромагнитни клапани 50V DBRY-6",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 3.36,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b0fcaf2053e2",
    "name": "Хидроизолираща връзка за елекромагнитни клапани Hunter WC100",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 1.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5ab9ca7fb206",
    "name": "Хидроизолираща връзка за елекромагнитни клапани King",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7e8ed8df289d",
    "name": "Хидроизолираща връзка за елекромагнитни клапани и роботи",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8d26baa80210",
    "name": "Холендър Rain Bird за клапани резба 1\" М / холендър",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 7.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e087f9f28974",
    "name": "Четворник за клапани 1\" PP (3 холендъра Ж) х 1\" М на Tavlit TAVSCFM1",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 10.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-19ff1e50e74b",
    "name": "Четирипътник 1 резба / 3 холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 5.22,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7199aee8edba",
    "name": "Четирипътник 4 холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 5.22,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c09ab7bc3e4d",
    "name": "Четирипътник Rain Bird 1320-010 1 резба / 3 холендър 1\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 14.4,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ab26dffef2d3",
    "name": "Шахта за напояване на дървета Hunter RZWS-10-25 и капак с дюза 0,9 литра/минута 1/2\"",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 25.2,
    "url": "https://napoqvane.com/drip_irrigation",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7ce1fd610d9f",
    "name": "Шахта с кран Rain Bird VBA 17186 ( хидрант ) 3/4\" за градински маркуч",
    "group": "Клапани и шахти",
    "unit": "бр.",
    "price": 34.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-488b5fa69fc1",
    "name": "130900SP Дюзи за разпръсквач Hunter PGP-ADJ",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5972e90f0877",
    "name": "1804 HE-VAN - Разпръсквачи Rain Bird 1804, тип „спрей“ с дюза HE-VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 5.4,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4b9ba61e69fd",
    "name": "233200SP Дюзи за разпръсквач Hunter PGP Нисък ъгъл",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8e307a916418",
    "name": "3504 Разпръсквач Rain Bird 3504 - PC - радиус (4,6-10,7 метра) + дюзи комплект Y34001",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 15.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-20a9f590ec5e",
    "name": "5004 PLUS Разпръсквач Rain Bird 5004-Plus-PC/3.0 - радиус (7,6-15,2 метра) + дюзи комплект Y4510030",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 22.2,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ebe16f4b57aa",
    "name": "5004 Разпръсквач Rain Bird 5004 - PC/3.0 - радиус (7,6-15,2 метра) + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 18.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7099392ceb94",
    "name": "538700SP Дюзи за разпръсквач Hunter PGJ",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7c6d94b79ab6",
    "name": "916400SP Тапа за разпръсквачи Hunter Pro Spray и PS Ultra",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2f6138f19812",
    "name": "I-20-04 Разпръсквач Hunter I-20 - радуис (9,1-14,0 метра)",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 28.8,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-43652e9fd2aa",
    "name": "MP TOOL Ключ за разпръсквачи Hunter MP Rotator",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.8,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7e9e74f85fb2",
    "name": "PGJ Рaзпръсквач Hunter PGJ - радиус (4,6-11,3 метра) + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 15.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-20d5487fc969",
    "name": "PGP ULTRA Разпръсквач Hunter PGP Ultra - радиус (5,2-14,3 метра) + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 17.4,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-18eefeb116f4",
    "name": "PGP Ultra I-20 Short Radius BLACK Дюзи за разпръсквач Hunter PGP Ultra I-20 Short Radius",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ebb2ee6bd197",
    "name": "PGP-ADJ Разпръсквач Hunter PGP - радиус (6,7-15,8 метра) + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 17.4,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6f0be21bd67b",
    "name": "PRB PGP ULTRA Разпръсквач Hunter - радиус (5,2-14,0 метра) + 12 дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 25.2,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5d4dfd5d2a34",
    "name": "PROS-12 Разпръсквач Hunter 30 см. без дюза",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 19.44,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a45c7642ad76",
    "name": "R-VAN-LCS Дюза роторна правоъгълник (ляв ъгъл) с размери 1.5 x 4.6 m A84667",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-eff000616545",
    "name": "R-VAN-RCS Дюза роторна правоъгълник (десен ъгъл) с размери 1.5 x 4.6 m A84668",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-40c08ef302ae",
    "name": "R-VAN-SST Дюза роторна Rain Bird правоъгълник (страна) с размери 1.5 х 9.1 m A84669",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c88bacdd98e1",
    "name": "R-VAN14 Дюза Rain Bird - радиус 2.4 - 4.3 m A84659",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9797149336d8",
    "name": "R-VAN14-360 Дюза Rain Bird - радиус 2.4 - 4.3 m A84664",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-daca2eb3d8b5",
    "name": "R-VAN18 Дюза Rain Bird - радиус 4.0 - 5.5 m A84660",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2c936467feae",
    "name": "R-VAN18-360 Дюза Rain Bird - радиус 4.0 - 5.5 m A84665",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-46871ed5926c",
    "name": "R-VAN24 Дюза Rain Bird - радиус 5.2 - 7.3 m A84661",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d4788c38ff4e",
    "name": "R-VAN24-360 Дюза Rain Bird - радиус 5.2 - 7.3 m A84666",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f53a2bc90b92",
    "name": "SRM Разпръсквач Hunter SRM 10 см , рег. сектор (40~360 º) радиус от 4.6 до 10.7 m + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 14.4,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-56ed65bf68ae",
    "name": "Адаптор Hunter MP ADAPTERSP за манометър, за дюзи MP Rotator и Pro Spray",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 3.6,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-30c92b78b288",
    "name": "Дюза Rain Bird R-VAN Series",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d03e7c2b8d1a",
    "name": "Дюзи Hunter MP Rotator MP 1000",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 10.8,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-aea173486d66",
    "name": "Дюзи Hunter MP Rotator MP 2000",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 10.8,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c3124602f8a4",
    "name": "Дюзи за разпръсквач Hunter I-10, I-20, I-20 Ultra",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4b6d81f4dfa4",
    "name": "Дюзи за разпръсквач Hunter PGP Ultra",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-19302805b88b",
    "name": "Дюзи за разпръсквач Hunter PGP Ultra / I-20 MPR Nozzle",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 0.72,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-68ad7e8bf733",
    "name": "Дюзи за разпръсквач Hunter SRM - НОВ МОДЕЛ",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8544385b4011",
    "name": "Дюзи за разпръсквач Rain Bird 3500 series",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0346c243e8e1",
    "name": "Дюзи за разпръсквач Rain Bird 5000 MPR Nozzle",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.2,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-16a24e9cb0d8",
    "name": "Дюзи за разпръсквач Rain Bird 5000 series",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-21151e0ada3c",
    "name": "Капачка за разпръсквачи Hunter Pro Spray RW 458520SP",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 3.36,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1752832279ea",
    "name": "Капачка затваряща за разпръсквачи Hunter Pro Spray 213600sp",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3230109d718b",
    "name": "Ключ за разпръсквачи Hunter SRM, PGJ, PGP, PGP Ultra и I-20",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 0.6,
    "url": "https://napoqvane.com/accessories",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d4746f2071a4",
    "name": "Рaзпръсквач Hunter PGJ - радиус (4,6-11,3 метра) - 25 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 330.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0daa16eec4f6",
    "name": "Разпръсквач Hunter PGP - радиус (6,7-15,8 метра) - 20 броя + ПОДАРЪК КОЛЯНО HUNTER HSBE-075 - 50 БРОЯ",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 324.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7f2c96052ed7",
    "name": "Разпръсквач Hunter PGP Ultra - радиус (5,2-14,3 метра) - 20 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 342.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5ccf50100e11",
    "name": "Разпръсквач Hunter PS ULTRA 10см + дюза VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 3.36,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9a9e9f22d95d",
    "name": "Разпръсквач Hunter PS Ultra 10см + дюза MP ROTATOR",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 13.8,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-218afe977043",
    "name": "Разпръсквач Hunter Pro Spray 10 см. + дюза High-Efficiency",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 4.8,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4398b40a7e7d",
    "name": "Разпръсквач Hunter Pro Spray 10см + дюза MP ROTATOR",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 13.8,
    "url": "https://napoqvane.com/nozzle",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ad2edef6e0e9",
    "name": "Разпръсквач Hunter Pro Spray 10см + дюза VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 4.8,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8bce728a8fe5",
    "name": "Разпръсквач Hunter Pro Spray PRS40 10см. с дюза MP Rotator",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 22.2,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-acbc312f43fe",
    "name": "Разпръсквач Hunter SRM 10 см , рег. сектор (40~360 º) - 25 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 360.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-75fbaa541ee7",
    "name": "Разпръсквач Rain Bird 3504 - PC - радиус (4,6-10,7 метра) - 20 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 300.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-37914442507a",
    "name": "Разпръсквач Rain Bird 5004 - PC/3.0 - радиус (7,6-15,2 метра) - 20 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 342.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d301bd5c299e",
    "name": "Разпръсквач Rain Bird 5004-Plus-PC/3.0 - радиус (7,6-15,2 метра) - 20 броя",
    "group": "Разпръсквачи",
    "unit": "комплект",
    "price": 420.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-42c5e0bfada8",
    "name": "Разпръсквач Rain Bird 5006 Plus PC - радиус (7,6-15,2 метра) + дюзи комплект",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 30.6,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f20ccac8ead5",
    "name": "Разпръсквач Rain Bird 8005 - радиус (11.9 to 24.7 метра)",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 132.0,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7c0341e9b253",
    "name": "Разпръсквач Rain Bird Uni-Spray с дюза HE-VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 4.8,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-92d44de150c9",
    "name": "Разпръсквач Rain Bird Uni-Spray с дюза VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 5.1,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cd97961e5fa7",
    "name": "Разпръсквачи Rain Bird 1804, тип „спрей“ с дюза VAN",
    "group": "Разпръсквачи",
    "unit": "бр.",
    "price": 5.4,
    "url": "https://napoqvane.com/sprinklers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f431b1f27cf4",
    "name": "PUSH Адаптор 20х1\" М PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.02,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fbf4a3e92b90",
    "name": "PUSH Адаптор 25х1\" М PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.2,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6f789fe5b37d",
    "name": "PUSH Адаптор 32х1\" М PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1e14ded16b58",
    "name": "PUSH Коляно ф20 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.5,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-137b35107e65",
    "name": "PUSH Коляно ф25 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e94e6f2c9955",
    "name": "PUSH Коляно ф32 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ba2d5acf1894",
    "name": "PUSH Кран за директна връзка ф20-ф20",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 4.92,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b4721d11da5d",
    "name": "PUSH Кран за директна връзка ф25-ф25",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 6.24,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-84730332ebb8",
    "name": "PUSH Кран за директна връзка ф32-ф32",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 7.8,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a8b0f2b95b07",
    "name": "PUSH Муфа редуктивна 25х20 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.62,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-daf41a4ca5ea",
    "name": "PUSH Муфа редуктивна 32х25 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.1,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1d94f8c41b75",
    "name": "PUSH Съединител/Муфа ф20 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.32,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6f4447d0048b",
    "name": "PUSH Съединител/Муфа ф25 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.8,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-405f65edb559",
    "name": "PUSH Съединител/Муфа ф32 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-744ede7db8e6",
    "name": "PUSH Тапа ф20 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.14,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-794638056073",
    "name": "PUSH Тапа ф25 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.32,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-33288985c710",
    "name": "PUSH Тапа ф32 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-9a76baf8cfdf",
    "name": "PUSH Тройник 25х3/4\" Ж PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.8,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-92ee3c9dafc6",
    "name": "PUSH Тройник 32х3/4\" Ж PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0106210d515e",
    "name": "PUSH Тройник ф20 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-793698d6cc63",
    "name": "PUSH Тройник ф25 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.76,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-162dd0d54d49",
    "name": "PUSH Тройник ф32 PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 3.6,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-352e05f868c9",
    "name": "Адаптер(съединител) за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.26,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ae8b5c06160d",
    "name": "Адаптер(съединител) за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.84,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-52fc32287714",
    "name": "Адаптер(съединител) с външна резба за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-45822af4ae16",
    "name": "Адаптер(съединител) с външна резба за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.66,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f1be627f5bfa",
    "name": "Адаптер(съединител) с вътрешна резба за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c0c03146c2ed",
    "name": "Адаптер(съединител) с вътрешна резба за тръба HDPE PPN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.72,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cf97974b6f68",
    "name": "Ключ/Инструмент за сваляне PUSH фитинги",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.72,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-61307fe6e6a2",
    "name": "Коляно за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-097cb140d99a",
    "name": "Коляно за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.84,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e496f01583ef",
    "name": "Коляно за тръба с резба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0383a6c4c17e",
    "name": "Коляно с външна резба за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.32,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-20d2a24a5622",
    "name": "Коляно с външна резба за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.84,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7d5a817e6563",
    "name": "Коляно с вътрешна резба за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.32,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ad419b87042c",
    "name": "Коляно с вътрешна резба за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.78,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-435442791daf",
    "name": "Кран 1\" PVC с една гайка и вътрешна резба",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 3.3,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-73f71ab9d9d5",
    "name": "Кран 1\" сферичен метален",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 9.0,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e003015e50b4",
    "name": "Кран 1\" сферичен метален с изпразнител",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 14.4,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c5f8cf39a4b3",
    "name": "Кран 3/4\" PVC с една гайка и вътрешна резба",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 3.3,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b75bfc28d100",
    "name": "Кран 3/4\" сферичен метален",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 7.8,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-2aba1f671541",
    "name": "Кран 3/4\" сферичен метален с изпразнител",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 10.2,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-6f21640bff7d",
    "name": "Намалител(редукция) за тръба HDPE",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.92,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-16c43da10a0c",
    "name": "Острилка за тръби",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 5.52,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-33a70a7e29bd",
    "name": "Тапа за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-81fb724f3d05",
    "name": "Телескопичен съединител NORMA прав за тръби HDPE PN12.5",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 8.4,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-434da5c1c5ab",
    "name": "Тройник за тръба HDPE PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.22,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-707f19dafaae",
    "name": "Тройник за тръба HDPE PN10 BLACK",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 0.84,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-5ecc46ed36d0",
    "name": "Тройник за тръба HDPE редуктивен PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 2.52,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-787d2ed7a2d8",
    "name": "Тройник за тръба HDPE с външна резба PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.62,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d2eef3a4a3c9",
    "name": "Тройник за тръба HDPE с вътрешна резба PN10",
    "group": "Тръби и фитинги",
    "unit": "бр.",
    "price": 1.56,
    "url": "https://napoqvane.com/pipe_hdpe_ppr",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-134fe69c752a",
    "name": "BL-IP1 Програматор 1 станция Solem Bluetooth 9V",
    "group": "Управление",
    "unit": "бр.",
    "price": 102.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c60db9fa749a",
    "name": "BL-IP2 Програматор 2 станциии Solem Bluetooth 9V",
    "group": "Управление",
    "unit": "бр.",
    "price": 135.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7f640c8855de",
    "name": "BL-IP4 Програматор 4 станциии Solem Bluetooth 9V",
    "group": "Управление",
    "unit": "бр.",
    "price": 157.2,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-aa56d8ee597a",
    "name": "BL-IP6 Програматор 6 станциии Solem Bluetooth 9V",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cf360689964e",
    "name": "ELC-401i-E Програматор Hunter 4 станции вътрешен монтаж",
    "group": "Управление",
    "unit": "бр.",
    "price": 66.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-56019be013d5",
    "name": "ELC-601i-E Програматор Hunter 6 станции вътрешен монтаж",
    "group": "Управление",
    "unit": "бр.",
    "price": 72.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7f1f4866721a",
    "name": "ESP-BAT-BT1 Програматор на батерии 1 станция с Bluetooth комуникация IP68 Rain Bird F58571",
    "group": "Управление",
    "unit": "бр.",
    "price": 108.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-299b1922f716",
    "name": "ESP-BAT-BT2 Програматор на батерии 2 станции с Bluetooth комуникация IP68 Rain Bird F58572",
    "group": "Управление",
    "unit": "бр.",
    "price": 144.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8c2b0bf65661",
    "name": "ESP-BAT-BT4 Програматор на батерии 4 станции с Bluetooth комуникация IP68 Rain Bird F58574",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-fb92954e548c",
    "name": "ESP-BAT-BT6 Програматор на батерии 6 станции с Bluetooth комуникация IP68 Rain Bird F58576",
    "group": "Управление",
    "unit": "бр.",
    "price": 192.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e47d89d4be2f",
    "name": "ESP-ME3 Програматор Rain Bird ESP-ME3 F55420 Wi Fi Ready 4 станции (възм. до 22 станции)",
    "group": "Управление",
    "unit": "бр.",
    "price": 276.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4cd5c02c8d01",
    "name": "HCC800PL Програматор \"HCC\", 8 станции, пластмасова кутия, Wi-Fi connection-интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 768.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-cdc482b204b1",
    "name": "PHC1201E Програматор външен монтаж \"PRO-HC-12\", 12 станции, Wi-Fi connection интернет комуникация, Софтуер \"Web based platform Hydrawise\"",
    "group": "Управление",
    "unit": "бр.",
    "price": 588.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-339dfc92098d",
    "name": "PHC2401E Програматор външен монтаж \"PRO-HC-24\", 24 станции, Wi-Fi connection интернет комуникация, Софтуер \"Web based platform Hydrawise\"",
    "group": "Управление",
    "unit": "бр.",
    "price": 912.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4dfb81fa1b2b",
    "name": "PHC601E Програматор външен монтаж \"PRO-HC-6\", 6 станции, Wi-Fi connection интернет комуникация, Софтуер \"Web based platform Hydrawise\"",
    "group": "Управление",
    "unit": "бр.",
    "price": 480.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-46dcba2c6a7b",
    "name": "RC2I4-230 Програматор Rain Bird RC2 4 станции вътрешен монтаж F56154",
    "group": "Управление",
    "unit": "бр.",
    "price": 144.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1a25c41edd00",
    "name": "RC2I6-230 Програматор Rain Bird RC2 6 станции вътрешен монтаж F56156",
    "group": "Управление",
    "unit": "бр.",
    "price": 174.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-1e351197b8dc",
    "name": "RC2I8-230 Програматор Rain Bird RC2 8 станции вътрешен монтаж F56158",
    "group": "Управление",
    "unit": "бр.",
    "price": 192.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-449f7bb3d8b4",
    "name": "SMART-IS-12 Програматор Solem 12 станции, 220/24V с Bluetooth и Wi-Fi управление през интернет",
    "group": "Управление",
    "unit": "бр.",
    "price": 264.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4b2059a90d6e",
    "name": "SMART-IS-4 Програматор Solem 4 станции, 220/24V с Bluetooth и Wi-Fi управление през интернет",
    "group": "Управление",
    "unit": "бр.",
    "price": 162.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-729488e70e6a",
    "name": "SMART-IS-6 Програматор Solem 6 станции, 220/24V с Bluetooth и Wi-Fi управление през интернет",
    "group": "Управление",
    "unit": "бр.",
    "price": 174.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-88de0b426a23",
    "name": "SMART-IS-9 Програматор Solem 9 станции, 220/24V с Bluetooth и Wi-Fi управление през интернет",
    "group": "Управление",
    "unit": "бр.",
    "price": 222.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-732b4d654497",
    "name": "TM2-12S230 Програматор Rain Bird F54232 12 станции/клапана ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 306.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3bbe718f9b15",
    "name": "TM2-4-230 Програматор Rain Bird F54224 4 станции/клапана ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-baee030672b8",
    "name": "TM2-6-230 Програматор Rain Bird F54226 6 станции/клапана ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 216.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-75730e9bb375",
    "name": "TM2-8S230V Програматор Rain Bird F54228 8 станции/клапана ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 240.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-0ad309a748e2",
    "name": "TM2I12-230 Програматор 12 станции за вътрешен монтаж Rain Bird F54242",
    "group": "Управление",
    "unit": "бр.",
    "price": 222.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3877bb1f6307",
    "name": "TM2I4-230 Програматор 4 станции за вътрешен монтаж Rain Bird F54234",
    "group": "Управление",
    "unit": "бр.",
    "price": 144.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c81213f5562c",
    "name": "TM2I6-230 Програматор 6 станции за вътрешен монтаж Rain Bird F54236",
    "group": "Управление",
    "unit": "бр.",
    "price": 168.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-657b49f05738",
    "name": "TM2I8-230 Програматор 8 станции за вътрешен монтаж Rain Bird F54238",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d3cc5ec00760",
    "name": "WAND Модул Hunter Wi-Fi Module for X2 външен Wi‐Fi за връзка с интернет / Hydrawise software",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a31120e3ee7d",
    "name": "WB-1 Програматор Solem 1 станция WooBee",
    "group": "Управление",
    "unit": "бр.",
    "price": 102.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-7bae5a16173b",
    "name": "WB-2 Програматор Solem 2 станции WooBee",
    "group": "Управление",
    "unit": "бр.",
    "price": 162.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d911e07545c5",
    "name": "WB-4 Програматор Solem 4 станции WooBee",
    "group": "Управление",
    "unit": "бр.",
    "price": 186.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e5f0768bab08",
    "name": "WB-6 Програматор Solem 6 станции WooBee",
    "group": "Управление",
    "unit": "бр.",
    "price": 210.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8b1275c7bba0",
    "name": "X21401E Програматор Hunter X2 14 станции външен монтаж, с възможност за Wi‐Fi интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 384.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-58d05a285af0",
    "name": "X2401E Програматор Hunter X2 4 станции външен монтаж, с възможност за Wi‐Fi интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 162.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-bc1e2c26ea76",
    "name": "X2601E Програматор Hunter X2 6 станции външен монтаж, с възможност за Wi‐Fi интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 198.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-acc4e67a95cf",
    "name": "X2801E Програматор Hunter X2 8 станции външен монтаж, с възможност за Wi‐Fi интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 234.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-d7f99d8e2756",
    "name": "Батерия Varta Industrial Pro 1.5V AA",
    "group": "Управление",
    "unit": "бр.",
    "price": 1.08,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-398fd4e8d41e",
    "name": "Батерия Varta Industrial Pro 6LR61, 9V",
    "group": "Управление",
    "unit": "бр.",
    "price": 2.4,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-8259741abc2e",
    "name": "Водомер електронен Hunter HC Flow Meter",
    "group": "Управление",
    "unit": "бр.",
    "price": 288.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ab7ff3c6bfe8",
    "name": "Дистанционно управление Hunter ROAM комплект, за програматори Hunter",
    "group": "Управление",
    "unit": "бр.",
    "price": 276.1,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-12ebc970dd84",
    "name": "Програматор Hunter Eco Logic + Колектор за клапани 4-пътен / холендров 1\"Ж + Клапан електромагнитен Rain RN 155 Plus 24V AC 1\"М / холендър с рег. на дебита 4 броя",
    "group": "Управление",
    "unit": "комплект",
    "price": 156.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-62add11ae910",
    "name": "Програматор Hunter Eco Logic Indoor вътрешен монтаж 4 и 6 станции + Клапан електромагнитен Hunter PGV-100-MM 24V AC 1\" външна резба 24V AC - 4 броя",
    "group": "Управление",
    "unit": "комплект",
    "price": 168.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-4dbccc39bb2c",
    "name": "Програматор Hunter Eco Logic вътрешен монтаж + Клапани + Шахта",
    "group": "Управление",
    "unit": "бр.",
    "price": 174.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-3d68796614b3",
    "name": "Програматор Hunter Eco Logic вътрешен монтаж + датчик за дъжд Mini Clik",
    "group": "Управление",
    "unit": "бр.",
    "price": 114.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-72bcf52c0edc",
    "name": "Програматор Hunter PRO HC външен монтаж Wi‐Fi connection‐интернет комуникация",
    "group": "Управление",
    "unit": "бр.",
    "price": 480.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-268b16a51f2a",
    "name": "Програматор Hunter X-Core - 4 станции - вътрешен монтаж",
    "group": "Управление",
    "unit": "бр.",
    "price": 108.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-bf7aea4f4713",
    "name": "Програматор Hunter X-Core - 6 станции - вътрешен монтаж",
    "group": "Управление",
    "unit": "бр.",
    "price": 120.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-aae68229f196",
    "name": "Програматор Hunter X-Core - 6 станции ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 192.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-08e08e102205",
    "name": "Програматор Hunter X-Core - 8 станции ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 234.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-e4e8ff2d73cf",
    "name": "Програматор Hunter X-Core 8 станции - вътрешен монтаж",
    "group": "Управление",
    "unit": "бр.",
    "price": 144.0,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ed65a90f1f44",
    "name": "Програматор Hunter X-Core външен монтаж + датчик за дъжд Rain Click",
    "group": "Управление",
    "unit": "бр.",
    "price": 234.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a0a2e8dca91d",
    "name": "Програматор Hunter X-Core вътрешен монтаж + датчик за дъжд Rain Click",
    "group": "Управление",
    "unit": "бр.",
    "price": 150.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-a4ad8481e7ba",
    "name": "Програматор Hunter X-core вътрешен монтаж + Клапан електромагнитен Hunter PGV-100-MM 24V AC 1\" външна резба 24V AC - 4 броя",
    "group": "Управление",
    "unit": "комплект",
    "price": 198.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-c10b446381e4",
    "name": "Програматор Rain Bird ESP-TM2 F54234 + Клапан електромагнитен Rain Bird 100-DV-MM - 1\" 24V AC - 4 броя(клапани)",
    "group": "Управление",
    "unit": "комплект",
    "price": 288.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-f00d1fca632e",
    "name": "Програматор Rain Bird ESP-TM2 F54234 + Клапан електромагнитен Rain Bird 100-HV - 1\" 24V AC - 4 броя(клапани)",
    "group": "Управление",
    "unit": "комплект",
    "price": 222.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-35421a7f3551",
    "name": "Програматор Rain Bird ESP-TM2 F54234 LNK Wi Fi Ready - вътрешен монтаж + Сензор за дъжд Rain Bird RSD-BEX",
    "group": "Управление",
    "unit": "бр.",
    "price": 180.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-b7d831203a68",
    "name": "Програматор Rain Bird ESP-TM2 вътрешен монтаж + Модул Rain Bird Lnk2 Wi Fi Modul",
    "group": "Управление",
    "unit": "бр.",
    "price": 294.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-20cb29a302be",
    "name": "Програматор Rain Bird RC2 Indoor + Клапан електромагнитен Rain Bird 100-HV - 1\" 24V AC - 4 броя(клапани)",
    "group": "Управление",
    "unit": "комплект",
    "price": 240.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-17926f662f49",
    "name": "Програматор Rain Bird RC2 Wi Fi Inside - 8 станции ВЪНШЕН МОНТАЖ",
    "group": "Управление",
    "unit": "бр.",
    "price": 248.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-57653ee3b8dc",
    "name": "Програматор Rain Bird RC2 Wi Fi Inside - 8 станции външен монтаж + Клапан електромагнитен Rain Bird 100-HVF - 1\" 24V с рег. дебит - 8 броя",
    "group": "Управление",
    "unit": "комплект",
    "price": 432.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-ea815e790412",
    "name": "Програматор Solem VILLA Wi-Fi управление през интернет и Bluetooth 24 V AC",
    "group": "Управление",
    "unit": "бр.",
    "price": 276.0,
    "url": "https://napoqvane.com/irrigation_controllers",
    "checked": "2026-11-13"
  },
  {
    "id": "nap-271ac92573d8",
    "name": "Сензор за дъжд Hunter Mini-Clik",
    "group": "Управление",
    "unit": "бр.",
    "price": 51.6,
    "url": "https://napoqvane.com/",
    "checked": "2026-11-13"
  }
];
IRR_SUPPLIER_CATALOG.push(...[{"id": "nap-mp3000", "name": "Дюзи Hunter MP Rotator MP 3000", "group": "Разпръсквачи", "unit": "бр.", "price": 10.8, "url": "https://napoqvane.com/Hunter_MP_3000", "checked": "2026-11-13"}, {"id": "nap-pros04", "name": "PROS-04 Разпръсквач Hunter PROS-04 10 см. без дюза", "group": "Разпръсквачи", "unit": "бр.", "price": 3.12, "url": "https://napoqvane.com/hunter_pros-04", "checked": "2026-11-13", "conflict": true}]);

IRR_SUPPLIER_CATALOG.forEach(p=>{p.supplier=p.supplier||'napoqvane.com'});
IRR_SUPPLIER_CATALOG.push(...[
  {
    "id": "angro-pe-20-pn10",
    "name": "PE-HD тръба Ø20 mm PN10",
    "group": "Тръби и фитинги",
    "supplier": "Angro",
    "unit": "m",
    "price": 0.48,
    "regularPrice": 0.59,
    "sku": "PE20005",
    "diameter": 20,
    "pressureClass": "PN10",
    "url": "https://www.angro.bg/polietilenova-trieba-20mm.html",
    "checked": "2026-11-13",
    "note": "Публична онлайн промоционална цена с ДДС за 1 линеен метър. Въведи дължината в метри; няма потвърдена дължина на ролката или минимален отрез. Цената на място и партньорската ти отстъпка се потвърждават отделно. PN10 е клас на тръбата; оразмеряването се проверява според проекта."
  },
  {
    "id": "angro-pe-25-pn10",
    "name": "PE-HD тръба Ø25 mm PN10",
    "group": "Тръби и фитинги",
    "supplier": "Angro",
    "unit": "m",
    "price": 0.69,
    "regularPrice": 0.85,
    "sku": "PE20004",
    "diameter": 25,
    "pressureClass": "PN10",
    "url": "https://www.angro.bg/polietilenova-trieba-25mm.html",
    "checked": "2026-11-13",
    "note": "Публична онлайн промоционална цена с ДДС за 1 линеен метър. Въведи дължината в метри; няма потвърдена дължина на ролката или минимален отрез. Цената на място и партньорската ти отстъпка се потвърждават отделно. PN10 е клас на тръбата; оразмеряването се проверява според проекта."
  },
  {
    "id": "angro-pe-32-pn10",
    "name": "PE-HD тръба Ø32 mm PN10",
    "group": "Тръби и фитинги",
    "supplier": "Angro",
    "unit": "m",
    "price": 0.89,
    "regularPrice": 1.09,
    "sku": "PE20003",
    "diameter": 32,
    "pressureClass": "PN10",
    "url": "https://www.angro.bg/polietilenova-trieba-32mm.html",
    "checked": "2026-11-13",
    "note": "Публична онлайн промоционална цена с ДДС за 1 линеен метър. Въведи дължината в метри; няма потвърдена дължина на ролката или минимален отрез. Цената на място и партньорската ти отстъпка се потвърждават отделно. PN10 е клас на тръбата; оразмеряването се проверява според проекта."
  },
  {
    "id": "angro-pe-40-pn10",
    "name": "PE-HD тръба Ø40 mm PN10",
    "group": "Тръби и фитинги",
    "supplier": "Angro",
    "unit": "m",
    "price": 1.26,
    "regularPrice": 1.55,
    "sku": "PE20001",
    "diameter": 40,
    "pressureClass": "PN10",
    "url": "https://www.angro.bg/polietilenova-trieba-40mm.html",
    "checked": "2026-11-13",
    "note": "Публична онлайн промоционална цена с ДДС за 1 линеен метър. Въведи дължината в метри; няма потвърдена дължина на ролката или минимален отрез. Цената на място и партньорската ти отстъпка се потвърждават отделно. PN10 е клас на тръбата; оразмеряването се проверява според проекта."
  },
  {
    "id": "angro-pe-50-pn10",
    "name": "PE-HD тръба Ø50 mm PN10",
    "group": "Тръби и фитинги",
    "supplier": "Angro",
    "unit": "m",
    "price": 2.07,
    "regularPrice": 2.55,
    "sku": "PE20002",
    "diameter": 50,
    "pressureClass": "PN10",
    "url": "https://www.angro.bg/polietilenova-trieba-50mm.html",
    "checked": "2026-11-13",
    "note": "Публична онлайн промоционална цена с ДДС за 1 линеен метър. Въведи дължината в метри; няма потвърдена дължина на ролката или минимален отрез. Цената на място и партньорската ти отстъпка се потвърждават отделно. PN10 е клас на тръбата; оразмеряването се проверява според проекта."
  }
]);

function irrigationCatalogFields(){return `<details class="zone-card" open><summary>Каталог за поливни системи · ${IRR_SUPPLIER_CATALOG.length} ценови позиции</summary><p>Публични ориентири в евро с ДДС, прегледани на 13.11.2026 г. Част от страниците са кеширани и цените може да са променени. Доставчици: napoqvane.com и Angro. Това не е партньорският ти ценоразпис. Потвърди наличност, вариант, ценова единица и доставка.</p>${irrigationSupplierSelect('irr-catalog-supplier','Доставчик на артикула')}<label class="field">Търси артикул<input id="irr-catalog-search" placeholder="MP 1000, Hunter, клапан…"></label><label class="field">Група артикули<select id="irr-catalog-group"><option value="">Всички</option>${[...new Set(IRR_SUPPLIER_CATALOG.map(p=>p.group))].map(g=>`<option>${esc(g)}</option>`).join('')}</select></label><label class="field">Артикул от партньора<select id="irr-catalog-pick">${irrigationCatalogOptions('','')}</select></label><div id="irr-catalog-info"></div><label class="field">Точен размер / вариант<input id="irr-catalog-variant" maxlength="150" placeholder="Напр. MP100090, 90–210°"></label><label class="field">Количество<input id="irr-catalog-qty" type="number" min="0.01" step="any" value="1"></label><label class="field">Ценова единица<input id="irr-catalog-unit" maxlength="30" value="бр."></label><label class="field">Потвърдена публична ед. цена с ДДС (€)<input id="irr-catalog-price" type="number" min="0" step="0.01"></label><label class="quote-check"><input id="irr-catalog-confirm" type="checkbox">Потвърдих точния вариант, единица и цена за сметката</label><label class="quote-check"><input id="irr-catalog-cost" type="checkbox" checked>Попълни собствената единична цена</label><label class="quote-check"><input id="irr-catalog-sale" type="checkbox">Използвай тази цена и за клиента</label><small>Покупната и офертната цена се редактират поотделно след добавяне. Не се начислява автоматично надценка или втори ДДС. Ролки и комплекти не се превръщат автоматично в метри или бройки.</small><button type="button" class="secondary wide" data-action="irr-catalog-add">Добави избрания артикул</button><p id="irr-catalog-feedback" role="status" aria-live="polite"></p></details>`}
function irrigationCatalogOptions(query,group,supplier=''){const q=query.trim().toLocaleLowerCase('bg'),rows=IRR_SUPPLIER_CATALOG.filter(p=>(!supplier||p.supplier===supplier)&&(!group||p.group===group)&&(!q||(p.name+' '+p.supplier+' '+(p.sku||'')).toLocaleLowerCase('bg').includes(q)));return '<option value="">Избери артикул… ('+rows.length+')</option>'+rows.slice(0,100).map(p=>`<option value="${p.id}">${esc(p.name)} · ${esc(p.supplier)} · ${money(p.price)}/${esc(p.unit)}${p.conflict?' · провери цената':''}</option>`).join('')}
function refreshIrrigationCatalog(){const pick=$('#irr-catalog-pick');if(!pick)return;pick.innerHTML=irrigationCatalogOptions($('#irr-catalog-search').value,$('#irr-catalog-group').value,$('#irr-catalog-supplier').value);$('#irr-catalog-info').textContent='Показват се до 100 резултата. Стесни търсенето при нужда.';$('#irr-catalog-confirm').checked=false;$('#irr-catalog-price').value='';}
function chooseIrrigationCatalog(){const p=IRR_SUPPLIER_CATALOG.find(p=>p.id===$('#irr-catalog-pick').value);$('#irr-catalog-confirm').checked=false;if(!p)return;$('#irr-catalog-unit').value=p.unit;$('#irr-catalog-price').value=p.price;$('#irr-catalog-variant').value='';$('#irr-catalog-info').innerHTML=`<p>${esc(p.name)}<br>Доставчик: ${esc(p.supplier)}${p.sku?' · Код: '+esc(p.sku):''}<br>Публичен ориентир: ${money(p.price)}/${esc(p.unit)} с ДДС${p.conflict?' · Открити са различни цени в публичните страници. Провери преди използване.':''}</p><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Отвори категорията / източника ↗</a><p>${esc(p.note||'Избери точния вариант в магазина. Посочената цена може да е за базов размер; отбележи мярката и опаковката.')}</p>`;}
function irrigationCatalogBuildItem(p,input){if(!p||!input.confirmed)throw Error('Потвърди точния вариант, единицата и цената.');const qty=Number(input.qty),price=Number(input.price),unit=String(input.unit||'').trim(),variant=String(input.variant||'').trim();if(!Number.isFinite(qty)||qty<=0||qty>1e8||!Number.isFinite(price)||price<0||price>1e8||!unit||unit.length>30||/[|\r\n]/.test(unit+variant))throw Error('Провери количество, цена, вариант и мярка.');const name=p.name+(variant?' — '+variant:'');if(name.length>300)throw Error('Съкрати описанието на варианта.');return {name,group:p.group,unit,qty,cost:input.copyCost?price:0,price:input.copySale?price:0,includeInPrice:true,supplierId:p.id,supplierName:p.supplier||'napoqvane.com',sourceURL:p.url,sourceChecked:p.checked,referencePrice:p.price,confirmedPrice:price,priceConfirmed:true};}
function addIrrigationCatalogItem(){readBuildRows();if(irrigationBuildDraft.length>=200)throw Error('До 200 позиции в един проект.');const p=IRR_SUPPLIER_CATALOG.find(p=>p.id===$('#irr-catalog-pick').value);const r=irrigationCatalogBuildItem(p,{confirmed:$('#irr-catalog-confirm').checked,qty:$('#irr-catalog-qty').value,price:$('#irr-catalog-price').value,unit:$('#irr-catalog-unit').value,variant:$('#irr-catalog-variant').value,copyCost:$('#irr-catalog-cost').checked,copySale:$('#irr-catalog-sale').checked});irrigationBuildDraft.push(r);paintBuildRows();revealBuildItem();toast('Артикулът е добавен. Прегледай офертната цена и запази проекта.');}
function irrigationCatalogView(){const q=state.irrCatalogQuery||'',g=state.irrCatalogGroup||'',rows=irrigationFilteredCatalog(q,g,state.irrCatalogSupplier||'');return `<section class="card"><h2>Артикули и цени за поливни системи</h2><p>${IRR_SUPPLIER_CATALOG.length} публични ценови позиции. Ориентири с ДДС; варианти и наличности се потвърждават. Доставчици: napoqvane.com и Angro. Не е автоматична връзка със склада или партньорския ти профил.</p>${irrigationSupplierSelect('irr-public-supplier','Доставчик',state.irrCatalogSupplier||'')}<label class="field">Търси в каталога<input id="irr-public-search" value="${esc(q)}" placeholder="Hunter, MP, шахта…"></label><label class="field">Група<select id="irr-public-group"><option value="">Всички</option>${[...new Set(IRR_SUPPLIER_CATALOG.map(p=>p.group))].map(x=>`<option ${x===g?'selected':''}>${esc(x)}</option>`).join('')}</select></label><p>За сметка: отвори проект → Редакция → Части, консумативи и работи → Каталог за поливни системи.</p><div id="irr-public-results">${irrigationCatalogResults(rows)}</div></section>`}
function irrigationCatalogResults(rows){return `<p>${rows.length} резултата · показани до 60</p>`+rows.slice(0,60).map(p=>`<article class="zone-card"><h3>${esc(p.name)}</h3><p>${esc(p.supplier)} · ${esc(p.group)}<br>${money(p.price)}/${esc(p.unit)} с ДДС${p.regularPrice?' · Промоционална онлайн цена':''}<br>Публичен ценови ориентир, преглед 13.11.2026 г.${p.conflict?'<br>Различни публични цени — провери актуалната.':''}${p.sku?'<br>Код: '+esc(p.sku):''}</p>${p.note?'<p>'+esc(p.note)+'</p>':''}<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${p.supplier==='Angro'?'Артикул в Angro':'Категория в магазина'} ↗</a></article>`).join('')}
function setupIrrigationCatalog(){views['irrigation-catalog']=irrigationCatalogView;titles['irrigation-catalog']='Каталог за поливни системи';document.addEventListener('change',e=>{if(['irr-catalog-group','irr-catalog-supplier'].includes(e.target.id))refreshIrrigationCatalog();if(e.target.id==='irr-catalog-pick')chooseIrrigationCatalog();if(e.target.closest('#irrigation-build')&&['irr-catalog-unit','irr-catalog-price','irr-catalog-variant'].includes(e.target.id))$('#irr-catalog-confirm').checked=false;if(e.target.id==='irr-public-supplier'){state.irrCatalogSupplier=e.target.value;updateIrrigationCatalogResults();}if(e.target.id==='irr-public-group'){state.irrCatalogGroup=e.target.value;updateIrrigationCatalogResults();}});document.addEventListener('input',e=>{if(e.target.id==='irr-catalog-search')refreshIrrigationCatalog();if(['irr-catalog-unit','irr-catalog-price','irr-catalog-variant'].includes(e.target.id))$('#irr-catalog-confirm').checked=false;if(e.target.id==='irr-public-search'){state.irrCatalogQuery=e.target.value;updateIrrigationCatalogResults();}});}
function updateIrrigationCatalogResults(){$('#irr-public-results').innerHTML=irrigationCatalogResults(irrigationFilteredCatalog(state.irrCatalogQuery||'',state.irrCatalogGroup||'',state.irrCatalogSupplier||''));}
function irrigationFilteredCatalog(query='',group='',supplier=''){const q=query.toLocaleLowerCase('bg');return IRR_SUPPLIER_CATALOG.filter(p=>(!supplier||p.supplier===supplier)&&(!group||p.group===group)&&(p.name+' '+p.supplier+' '+(p.sku||'')).toLocaleLowerCase('bg').includes(q));}
function irrigationSupplierSelect(id,label,selected=''){return `<label class="field">${label}<select id="${id}"><option value="">Всички доставчици</option>${[...new Set(IRR_SUPPLIER_CATALOG.map(p=>p.supplier))].map(x=>`<option ${x===selected?'selected':''}>${esc(x)}</option>`).join('')}</select></label>`}
