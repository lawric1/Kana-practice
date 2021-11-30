Array.prototype.rand = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var hiraganaTab = document.getElementById('hiraganaTab');
var katakanaTab = document.getElementById('katakanaTab');
var wordsTab    = document.getElementById('wordsTab');

var displayText = document.getElementById('displayText');
var inputField = document.getElementById('inputField');

var hiraganaAlphabet = hiraganaAlphabet;
var katakanaAlphabet = katakanaAlphabet;
var romajiToHiragana = romajiToHiragana;

var currentList = hiraganaAlphabet;

displayText.innerHTML = currentList.rand();

hiraganaTab.addEventListener('click', () => {
    currentList = hiraganaAlphabet;
    displayText.innerHTML = currentList.rand();
}, false)

katakanaTab.addEventListener('click', () => {
    currentList = katakanaAlphabet;
    displayText.innerHTML = currentList.rand();
}, false)

// wordsTab.addEventListener('click', () => {
// }, false)


inputField.addEventListener('input', handleInput, false);

function handleInput() {
    var input = inputField.value.toLowerCase();
    var regex = new RegExp(Object.keys(romajiToHiragana).join("|"),"gi");


    var hiraganaMatch = input.replace(regex, function(matched){
        return romajiToHiragana[matched];
    });

    var katakanaMatch = hiraganaMatch.replace(regex, function(matched){
        return romajiToHiragana[matched];
    });
    
    if (hiraganaMatch == displayText.innerHTML) {
        inputField.value = '';
        displayText.innerHTML = currentList.rand();
    }

    if (katakanaMatch == displayText.innerHTML) {
        inputField.value = '';
        displayText.innerHTML = currentList.rand();
    }
}