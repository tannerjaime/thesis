//current output from thesis.js 
[ { species: 'collina',
    sciName: 'Cycas collina',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } },
  { species: 'calocoma',
    sciName: 'Microcycas calocoma',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Zamiaceae',
       genus: 'Microcycas' } },
  { species: 'rumphii',
    sciName: 'Cycas rumphii',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } },
  { species: 'edule',
    sciName: 'Dioon edule',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Zamiaceae',
       genus: 'Dioon' } },
  { species: 'mexicana',
    sciName: 'Ceratozamia mexicana',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Zamiaceae',
       genus: 'Ceratozamia' } },
  { species: 'maconochiei',
    sciName: 'Cycas maconochiei',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } },
  { species: 'canalis',
    sciName: 'Cycas canalis',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } },
  { species: 'szechuanensis',
    sciName: 'Cycas szechuanensis',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } },
  { species: 'barteri',
    sciName: 'Encephalartos barteri',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Zamiaceae',
       genus: 'Encephalartos' } },
  { species: 'aquilina',
    sciName: 'Alethopteris aquilina',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: undefined,
       family: 'Medullosaceae',
       genus: 'Alethopteris' } } ]
       
       
       
//desired thesis.js structure
[ { species: 'collina',
    sciName: 'Cycas collina',
    classification: 
     { kingdom: 'Plantae',
       phylum: 'Cycadophyta',
       class: 'Cycadopsida',
       order: 'Cycadales',
       family: 'Cycadaceae',
       genus: 'Cycas' } ,
    natureCounts : 2,
    natureDOI : ['http://dx.doi.org/10.1038/scientificamerican0858-117', 'http://dx.doi.org/10.1038/scientificamerican0858-117']
} ]