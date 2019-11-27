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
});