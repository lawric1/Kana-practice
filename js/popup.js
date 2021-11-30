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
var wordList = wordList;

var romajiToHiragana = romajiToHiragana;

var currentList = hiraganaAlphabet;
displayText.innerHTML = currentList.rand();

function getTextToDisplay() {
    while (true) {
        var word = currentList.rand()
        if (word.length <= 6) {
            return word
        }
    }
}

hiraganaTab.addEventListener('click', () => {
    currentList = hiraganaAlphabet;
    displayText.innerHTML = getTextToDisplay();
}, false)

katakanaTab.addEventListener('click', () => {
    currentList = katakanaAlphabet;
    displayText.innerHTML = getTextToDisplay();
}, false)

wordsTab.addEventListener('click', () => {
    currentList = wordList;
    displayText.innerHTML = getTextToDisplay();
}, false)

function handleInput() {
    var input = inputField.value.toLowerCase();
    var regex = new RegExp(Object.keys(romajiToHiragana).join("|"),"gi");


    var hiraganaMatch = input.replace(regex, function(matched){
        return romajiToHiragana[matched];
    });

    var katakanaMatch = hiraganaMatch.replace(regex, function(matched){
        return romajiToHiragana[matched];
    });
    
    if (hiraganaMatch === displayText.innerHTML) {
        inputField.value = '';
        displayText.innerHTML = getTextToDisplay();
    }

    if (katakanaMatch === displayText.innerHTML) {
        inputField.value = '';
        displayText.innerHTML = getTextToDisplay();
    }
}

inputField.addEventListener('input', handleInput, false);
