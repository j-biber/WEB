const $button = document.querySelector('button');
const $chatBox = document.querySelector('.chat-box');


function typeMsg() {
    const textMsg = document.createElement('p');
    let inputValue = document.querySelector('input').value;

    textMsg.innerHTML = inputValue;
    $chatBox.appendChild(textMsg);
    document.querySelector('input').value = '';
}

$button.addEventListener('click', typeMsg);