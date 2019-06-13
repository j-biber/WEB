function textToAlert () {
var text = document.querySelector('ul').lastElementChild.previousElementSibling.textContent;
alert(text);
}
textToAlert();

function replaceText (textReplacement) {
document.querySelector('ul').lastElementChild.textContent = textReplacement;
}
replaceText('hello');
