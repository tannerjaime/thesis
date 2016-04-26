var request = require('request'); // npm install request
var async = require('async');
var fs = require('fs');

var natureRequest = 'http://www.nature.com/opensearch/request?query=';
var plantsANDpubs = [];

var obj = JSON.parse(fs.readFileSync('cycadopsida.json', 'utf8'));
console.log(obj);

//578

async.forEachOfSeries(obj, function(object, i, callback) {
    var name1 = obj[i].classification.genus; 
    var name2 = obj[i].species;
    var natureRequest = 'http://www.nature.com/opensearch/request?query=' + name1 + "+" + name2 + '&httpAccept=application/json';

    console.log(natureRequest);

    request(natureRequest, function(err, resp, body) {
        if (err) {
            console.log(body);
            throw err;
        }
        console.log(JSON.parse(body).feed['opensearch:totalResults']);
        obj[i].natureCount = JSON.parse(body).feed['opensearch:totalResults']; 
        //plantsANDpubs.push(object);
        
    });
    setTimeout(callback, 150);
    fs.writeFileSync("./cycadopsidaNature.json", JSON.stringify(obj));
});
        //         seedPlant.sciName = JSON.parse(body).results[i].species;
        //         console.log(seedPlant.sciName);
        //         if (seedPlant.sciName == "Juniperus saltuaria"){console.log("Check sub=" + checkSub.length + "array length=" + plants.length + "nopes length=" + nopes.length);}
        //         //if there is no species listed, skip

        //         if (typeof seedPlant.sciName === 'undefined' || 'spec.') {
        //             console.log("not a species");
        //         }
        //         else {
        //             if (seedPlant.sciName.length < 5) {
        //                 console.log("too short");
        //             }
        //             else {
        //                 //check against running list of species to see if it is a repeat
        //                 if (checkSub.indexOf(seedPlant.sciName) == -1) {
        //                     //arr.indexOf('Jaime') 0 , if its not there, its -1
        //                     var space = seedPlant.sciName.indexOf(" ");
        //                     var species = seedPlant.sciName.substr(space + 1, 50);
        //                     seedPlant.species = species;
        //                     seedPlant.kingdom = JSON.parse(body).results[i].kingdom;
        //                     seedPlant.phylum = JSON.parse(body).results[i].phylum;
        //                     seedPlant.class = JSON.parse(body).results[i].class;
        //                     seedPlant.order = JSON.parse(body).results[i].order;
        //                     seedPlant.family = JSON.parse(body).results[i].family;
        //                     seedPlant.genus = JSON.parse(body).results[i].genus;
        //                     checkSub.push(seedPlant.sciName);
        //                     plants.push({
        //                         sciName: seedPlant.sciName,
        //                         species: seedPlant.species,
        //                         classification: {
        //                             kingdom: seedPlant.kingdom,
        //                             phylum: seedPlant.phylum,
        //                             'class': seedPlant.class,
        //                             order: seedPlant.order,
        //                             family: seedPlant.family,
        //                             genus: seedPlant.genus
        //                         }
        //                     });
        //                 }
        //                 else {
        //                     nopes.push(seedPlant.sciName);
        //                 }
        //             }
        //         }



        //     console.log("Check sub=" + checkSub.length + "array length=" + plants.length + "nopes length=" + nopes.length);
        //     gbifDONE = true;
