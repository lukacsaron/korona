exports.allRegions = [{
    name: "World",
    sheetName: "Global",
    placeholder: "Világ",
    startKey: "OTHER PLACES",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "USA",
    sheetName: "USA",
    startKey: "UNITED STATES",
    totalKey: "U.S. TOTAL",
    scraper: "bno"
  },
  {
    name: "China",
    sheetName: "China",
    placeholder: "Kína",
    startKey: "MAINLAND CHINA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Canada",
    sheetName: "Canada",
    placeholder: "Kanada",
    startKey: "CANADA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Australia",
    sheetName: "Australia",
    placeholder: "Ausztrália",
    startKey: "AUSTRALIA",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Latin America",
    sheetName: "LatinAmerica",
    placeholder: "Dél-Amerika",
    startKey: "Mundo Hispano",
    totalKey: "TOTAL",
    scraper: "bno"
  },
  {
    name: "Europe",
    placeholder: "Európa",
    sheetName: "Europe",
    scraper: "coronatracker"
  }
];

exports.displayOrder = [
  "Global",
  "USA",
  "Europe",
  "China",
  "Canada",
  "Australia",
  "LatinAmerica"
];

exports.countryLists = {
  Europe: [
    "Albania",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Czechia",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "United Kingdom"
  ]
};

exports.AlternativeLabelNames = {
    "Bosnia": "Bosznia-Hercegovina",
    "Global": "Globális",
    "Albania": "Albánia",
    "Austria": "Ausztria",
    "Belarus": "Fehéroroszország",
    "Belgium": "Belgium",
    "Brazil": "Brazília",
    "Bosnia and Herzegovina": "Bosznia-Hercegovina",
    "Bulgaria": "Bulgária",
    "Czechia": "Csehország",
    "Canada": "Kanada",
    "China": "Kína",
    "Croatia": "Horvátország",
    "Cyprus": "Ciprus",
    "Czech Republic": "Csehország",
    "Egypt": "Egyiptom",
    "Denmark": "Dánia",
    "Estonia": "Észtország",
    "Iceland": "Izland",
    "Israel": "Izrael",
    "Finland": "Finnország",
    "France": "Franciaország",
    "Germany": "Németország",
    "Greece": "Görögország",
    "Pakistan": "Pakisztán",
    "Hungary": "Magyarország",
    "Thailand": "Thaiföld",
    "Ireland": "Írország",
    "Italy": "Olaszország",
    "Latvia": "Lettország",
    "Lithuania": "Litvánia",
    "Luxembourg": "Luxemburg",
    "Malta": "Málta",
    "Norway": "Norvégia",
    "Malaysia": "Malájzia",
    "Netherlands": "Hollandia",
    "Poland": "Lengyelország",
    "Philippines": "Fülöp-szigetek",
    "Portugal": "Portugália",
    "Romania": "Románia",
    "San Marino": "San Marino",
    "Serbia": "Szerbia",
    "Singapore": "Szingapúr",
    "South Korea": "Dél-Korea",
    "Slovakia": "Szlovákia",
    "Slovenia": "Szlovénia",
    "Spain": "Spanyolország",
    "Sweden": "Svédország",
    "Switzerland": "Svájc",
    "United Kingdom": "Egyesült Királyság",
    "United States": "USA"
}

exports.regionStructure = {
  regionName: "",
  regions: [],
  regionTotal: {}
};

exports.countryStructure = {
  country: "TOTAL",
  cases: "",
  deaths: "",
  recovered: "",
  serious: "",
  critical: ""
};
