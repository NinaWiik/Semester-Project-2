async function getCharacters(id) {
    var url = 'https://anapioficeandfire.com/api/characters/' + id;
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

var characterArya;

getCharacters(148).then(function(data) {
    characterArya = data;
    console.log(characterArya);
    document.getElementById('arya').innerHTML += '<p><b>Name:</b> ' + characterArya.name + '</p><p><b>Gender:</b> ' + characterArya.gender + '</p><p><b>Culture:</b> ' + characterArya.culture + '</p><p><b>Born:</b> ' + characterArya.born + '</p>'; 
});

var characterJon;

getCharacters(583).then(function(data) {
    characterJon = data;
    console.log(characterJon);
    document.getElementById('jon').innerHTML += '<p><b>Name:</b> ' + characterJon.name + '</p><p><b>Gender:</b> ' + characterJon.gender + '</p><p><b>Culture:</b> ' + characterJon.culture + '</p><p><b>Born:</b> ' + characterJon.born + '</p>'; 
});

var characterDaenerys;

getCharacters(271).then(function(data) {
    characterDaenerys = data;
    console.log(characterDaenerys);
    document.getElementById('daenerys').innerHTML += '<p><b>Name:</b> ' + characterDaenerys.name + '</p><p><b>Gender:</b> ' + characterDaenerys.gender + '</p><p><b>Title:</b> ' + characterDaenerys.titles[0] + '</p><p><b>Born:</b> ' + characterDaenerys.born + '</p>'; 
});

var characterTheon;

getCharacters(1022).then(function(data) {
    characterTheon = data;
    console.log(characterTheon);
    document.getElementById('theon').innerHTML += '<p><b>Name:</b> ' + characterTheon.name + '</p><p><b>Gender:</b> ' + characterTheon.gender + '</p><p><b>Culture:</b> ' + characterTheon.culture + '</p><p><b>Born:</b> ' + characterTheon.born + '</p>'; 
});

var characterTyrion;

getCharacters(1052).then(function(data) {
    characterTyrion = data;
    console.log(characterTyrion);
    document.getElementById('tyrion').innerHTML += '<p><b>Name:</b> ' + characterTyrion.name + '</p><p><b>Gender:</b> ' + characterTyrion.gender + '</p><p><b>Aliases:</b> ' + characterTyrion.aliases[0] + ', ' + characterTyrion.aliases[1] + ', ' + characterTyrion.aliases[9] + ', ' + characterTyrion.aliases[10] +'</p><p><b>Born:</b> ' + characterTyrion.born + '</p>'; 
});