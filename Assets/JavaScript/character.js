async function getCharacters(id) {
    var url = 'https://anapioficeandfire.com/api/characters/' + id;
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

var characterArya;

getCharacters(148).then(function (data) {
    characterArya = data;
    console.log(characterArya);
    document.getElementById('arya').innerHTML += '<p><b>Name:</b> ' + characterArya.name + '</p><p><b>Gender:</b> ' + characterArya.gender + '</p><p><b>Culture:</b> ' + characterArya.culture + '</p><p><b>Born:</b> ' + characterArya.born + '</p>';
});

var characterJon;

getCharacters(583).then(function (data) {
    characterJon = data;
    console.log(characterJon);
    document.getElementById('jon').innerHTML += '<p><b>Name:</b> ' + characterJon.name + '</p><p><b>Gender:</b> ' + characterJon.gender + '</p><p><b>Culture:</b> ' + characterJon.culture + '</p><p><b>Born:</b> ' + characterJon.born + '</p>';
});

var characterDaenerys;

getCharacters(271).then(function (data) {
    characterDaenerys = data;
    console.log(characterDaenerys);
    document.getElementById('daenerys').innerHTML += '<p><b>Name:</b> ' + characterDaenerys.name + '</p><p><b>Gender:</b> ' + characterDaenerys.gender + '</p><p><b>Title:</b> ' + characterDaenerys.titles[0] + '</p><p><b>Born:</b> ' + characterDaenerys.born + '</p>';
});

var characterTheon;

getCharacters(1022).then(function (data) {
    characterTheon = data;
    console.log(characterTheon);
    document.getElementById('theon').innerHTML += '<p><b>Name:</b> ' + characterTheon.name + '</p><p><b>Gender:</b> ' + characterTheon.gender + '</p><p><b>Culture:</b> ' + characterTheon.culture + '</p><p><b>Born:</b> ' + characterTheon.born + '</p>';
});

var characterTyrion;

getCharacters(1052).then(function (data) {
    characterTyrion = data;
    console.log(characterTyrion);
    document.getElementById('tyrion').innerHTML += '<p><b>Name:</b> ' + characterTyrion.name + '</p><p><b>Gender:</b> ' + characterTyrion.gender + '</p><p><b>Aliases:</b> ' + characterTyrion.aliases[0] + ', ' + characterTyrion.aliases[1] + ', ' + characterTyrion.aliases[9] + '</p><p><b>Born:</b> ' + characterTyrion.born + '</p>';
});

var characterMargaery;

getCharacters(16).then(function (data) {
    characterMargaery = data;
    console.log(characterMargaery);
    document.getElementById('margaery').innerHTML += '<p><b>Name:</b> ' + characterMargaery.name + '</p><p><b>Gender:</b> ' + characterMargaery.gender + '</p><p><b>Culture:</b> ' + characterMargaery.culture + '</p><p><b>Born:</b> ' + characterMargaery.born + '</p>';
});

var characterJoffrey;

getCharacters(565).then(function (data) {
    characterJoffrey = data;
    console.log(characterJoffrey);
    document.getElementById('joffrey').innerHTML += '<p><b>Name:</b> ' + characterJoffrey.name + '</p><p><b>Gender:</b> ' + characterJoffrey.gender + '</p><p><b>Aliases:</b> ' + characterJoffrey.aliases[0] + '</p><p><b>Born:</b> ' + characterJoffrey.born + '</p>';
});

var characterOberyn;

getCharacters(1770).then(function (data) {
    characterOberyn = data;
    console.log(characterOberyn);
    document.getElementById('oberyn').innerHTML += '<p><b>Name:</b> ' + characterOberyn.name + '</p><p><b>Gender:</b> ' + characterOberyn.gender + '</p><p><b>Culture:</b> ' + characterOberyn.culture + '</p><p><b>Born:</b> ' + characterOberyn.born + '</p>';
});

var characterCatelyn;

getCharacters(232).then(function (data) {
    characterCatelyn = data;
    console.log(characterCatelyn);
    document.getElementById('catelyn').innerHTML += '<p><b>Name:</b> ' + characterCatelyn.name + '</p><p><b>Gender:</b> ' + characterCatelyn.gender + '<p><b>Culture: </b>' + characterCatelyn.culture + '</p><p><b>Born:</b> ' + characterCatelyn.born + '</p>';
});

var characterCersey;

getCharacters(238).then(function (data) {
    characterCersey = data;
    console.log(characterCersey);
    document.getElementById('cersey').innerHTML += '<p><b>Name:</b> ' + characterCersey.name + '</p><p><b>Gender:</b> ' + characterCersey.gender + '<p><b>Culture: </b>' + characterCersey.culture + '</p><p><b>Born:</b> ' + characterCersey.born + '</p>';
});