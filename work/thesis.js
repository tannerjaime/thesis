var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiRequest = 'http://api.gbif.org/v1/species/search?q=Cycadophyta&rank=SPECIES&limit=10';
var seedPlant = new Object;
var plants = [];


// request(apiRequest, function(err, resp, body) {
//     if (err) {
//         throw err;
//     }
//     if (JSON.parse(body).status != "ZERO_RESULTS") {
//         for (var i = 0; i < 10; i++) {
//             seedSpecies.species = JSON.parse(body).results[i].species;
//             //console.log(seedSpecies);
//             plants.push(seedSpecies);
//         }
//     }
//     else {
//         console.log(apiRequest);
//     }
// });
// console.log(plants[2]);
//////
var counter = 0;


request(apiRequest, function(err, resp, body) {
    if (err) {
        throw err;
    }
        for (var i = 0; i < 10; i++) {
        seedPlant.species = JSON.parse(body).results[i].species;
        seedPlant.kingdom= JSON.parse(body).results[i].kingdom;
        seedPlant.phylum= JSON.parse(body).results[i].phylum;
        seedPlant.class= JSON.parse(body).results[i].class;
        seedPlant.order= JSON.parse(body).results[i].order;
        seedPlant.family= JSON.parse(body).results[i].family;
        seedPlant.genus= JSON.parse(body).results[i].genus;
        plants.push
            ({species: seedPlant.species,
            classification: 
                {
                    kingdom: seedPlant.kingdom,
                    phylum:seedPlant.phylum,
                    'class':seedPlant.class,
                    order:seedPlant.order,
                    family: seedPlant.family,
                    genus:seedPlant.genus
                }
            });
        
        }

        console.log(plants[2].classification.kingdom);
});