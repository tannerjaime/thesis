var request = require('request'); // npm install request
//var async = require('async'); // npm install async
var fs = require('fs');

var GBIFapiRequest = 'http://api.gbif.org/v1/species/search?q=Magnoliophyta&rank=SPECIES&limit=1000';
var NATUREapiRequest;
var seedPlant = new Object;
var plants = [];
var plantsANDpubs = [];
var checkSub = [];
var nopes = [];
var gbifDONE = false;

//  Request all Cycadophyta species from the GBIF API 
fs.readFile('cycadopsida0.json', 'utf8', function(err, data) {
    if (err) throw err;
    //obj = JSON.parse(data);

    for (var i = 0; i < 1000; i++) {
        seedPlant.sciName = JSON.parse(data).results[i].species;

        //if there is no species listed, skip
        if (typeof seedPlant.sciName === 'undefined') {
            //console.log("not a species");
            nopes.push(seedPlant.sciName);
        }
        else {
            if (seedPlant.sciName.length < 4) {
                //console.log("too short");
                nopes.push(seedPlant.sciName);
            }
            else {
                //check against running list of species to see if it is a repeat
                if (checkSub.indexOf(seedPlant.sciName) == -1) {
                    //arr.indexOf('Jaime') 0 , if its not there, its -1
                    var space = seedPlant.sciName.indexOf(" ");
                    var species = seedPlant.sciName.substr(space + 1, 50);

                    if (species == "spec." || species === "environmental sample" || typeof species === 'undefined') {
                        nopes.push(seedPlant.sciName);
                    }
                    else {
                        console.log(seedPlant.sciName);
                        seedPlant.species = species;
                        seedPlant.kingdom = JSON.parse(data).results[i].kingdom;
                        seedPlant.phylum = JSON.parse(data).results[i].phylum;
                        seedPlant.class = JSON.parse(data).results[i].class;
                        seedPlant.order = JSON.parse(data).results[i].order;
                        seedPlant.family = JSON.parse(data).results[i].family;
                        seedPlant.genus = JSON.parse(data).results[i].genus;
                        checkSub.push(seedPlant.sciName);
                        plants.push({
                            sciName: seedPlant.sciName,
                            species: seedPlant.species,
                            classification: {
                                kingdom: seedPlant.kingdom,
                                phylum: seedPlant.phylum,
                                'class': seedPlant.class,
                                order: seedPlant.order,
                                family: seedPlant.family,
                                genus: seedPlant.genus
                            }
                        });
                    }
                }
                else {
                    nopes.push(seedPlant.sciName);
                }
            }
        }
    }
    console.log("Check sub=" + checkSub.length + "  array length=" + plants.length + "  nopes length=" + nopes.length);
    fs.readFile('cycadopsida1000.json', 'utf8', function(err, data) {
        if (err) throw err;
        //obj = JSON.parse(data);

        for (var i = 0; i < 1000; i++) {
            seedPlant.sciName = JSON.parse(data).results[i].species;

            //if there is no species listed, skip
            if (typeof seedPlant.sciName === 'undefined') {
                //console.log("not a species");
                nopes.push(seedPlant.sciName);
            }
            else {
                if (seedPlant.sciName.length < 4) {
                    //console.log("too short");
                    nopes.push(seedPlant.sciName);
                }
                else {
                    //check against running list of species to see if it is a repeat
                    if (checkSub.indexOf(seedPlant.sciName) == -1) {
                        //arr.indexOf('Jaime') 0 , if its not there, its -1
                        var space = seedPlant.sciName.indexOf(" ");
                        var species = seedPlant.sciName.substr(space + 1, 50);

                        if (species == "spec." || species === "environmental sample" || typeof species === 'undefined') {
                            nopes.push(seedPlant.sciName);
                        }
                        else {
                            console.log(seedPlant.sciName);
                            seedPlant.species = species;
                            seedPlant.kingdom = JSON.parse(data).results[i].kingdom;
                            seedPlant.phylum = JSON.parse(data).results[i].phylum;
                            seedPlant.class = JSON.parse(data).results[i].class;
                            seedPlant.order = JSON.parse(data).results[i].order;
                            seedPlant.family = JSON.parse(data).results[i].family;
                            seedPlant.genus = JSON.parse(data).results[i].genus;
                            checkSub.push(seedPlant.sciName);
                            plants.push({
                                sciName: seedPlant.sciName,
                                species: seedPlant.species,
                                classification: {
                                    kingdom: seedPlant.kingdom,
                                    phylum: seedPlant.phylum,
                                    'class': seedPlant.class,
                                    order: seedPlant.order,
                                    family: seedPlant.family,
                                    genus: seedPlant.genus
                                }
                            });
                        }
                    }
                    else {
                        nopes.push(seedPlant.sciName);
                    }
                }
            }
        }
        console.log("Check sub=" + checkSub.length + "  array length=" + plants.length + "  nopes length=" + nopes.length);
        fs.readFile('cycadopsida2000.json', 'utf8', function(err, data) {
            if (err) throw err;
            //obj = JSON.parse(data);

            for (var i = 0; i < 154; i++) {
                seedPlant.sciName = JSON.parse(data).results[i].species;

                //if there is no species listed, skip
                if (typeof seedPlant.sciName === 'undefined') {
                    //console.log("not a species");
                    nopes.push(seedPlant.sciName);
                }
                else {
                    if (seedPlant.sciName.length < 4) {
                        //console.log("too short");
                        nopes.push(seedPlant.sciName);
                    }
                    else {
                        //check against running list of species to see if it is a repeat
                        if (checkSub.indexOf(seedPlant.sciName) == -1) {
                            //arr.indexOf('Jaime') 0 , if its not there, its -1
                            var space = seedPlant.sciName.indexOf(" ");
                            var species = seedPlant.sciName.substr(space + 1, 50);

                            if (species == "spec." || species === "environmental sample" || typeof species === 'undefined') {
                                nopes.push(seedPlant.sciName);
                            }
                            else {
                                console.log(seedPlant.sciName);
                                seedPlant.species = species;
                                seedPlant.kingdom = JSON.parse(data).results[i].kingdom;
                                seedPlant.phylum = JSON.parse(data).results[i].phylum;
                                seedPlant.class = JSON.parse(data).results[i].class;
                                seedPlant.order = JSON.parse(data).results[i].order;
                                seedPlant.family = JSON.parse(data).results[i].family;
                                seedPlant.genus = JSON.parse(data).results[i].genus;
                                checkSub.push(seedPlant.sciName);
                                plants.push({
                                    sciName: seedPlant.sciName,
                                    species: seedPlant.species,
                                    classification: {
                                        kingdom: seedPlant.kingdom,
                                        phylum: seedPlant.phylum,
                                        'class': seedPlant.class,
                                        order: seedPlant.order,
                                        family: seedPlant.family,
                                        genus: seedPlant.genus
                                    }
                                });
                            }
                        }
                        else {
                            nopes.push(seedPlant.sciName);
                        }
                    }
                }
            }
            console.log("Check sub=" + checkSub.length + "  array length=" + plants.length + "  nopes length=" + nopes.length);

            fs.writeFileSync("./cycadopsida.json", JSON.stringify(plants));
        });
    });
});


//     async.forEachOfSeries(plants, function(object, i, callback) {
//         var NATUREapiRequest = 'http://www.nature.com/opensearch/request?queryType=searchTerms&query=' + plants[i].sciName.replace(/ /g, "%20") + '&httpAccept=application/json';

//         console.log(NATUREapiRequest);

// request(NATUREapiRequest, function(err, resp, body) {
//     if (err) {
//         console.log(body);
//         throw err;
//     }

//     plants[i].article = "cool";
//     plantsANDpubs.push(object);

// });
//         setTimeout(callback, 150);
//     });
// }
// console.log(plantsANDpubs);