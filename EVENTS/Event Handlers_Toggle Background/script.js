
// var button = document.querySelector('button');

// function toggleBackground () {
    
//     document.querySelector('body').classList.toggle('buttonChangeColor');
// }

// button.addEventListener('click', toggleBackground);

const $toggleButton = document.querySelector('.toggle');
const $toggleOffButton = document.querySelector('.toggleOff');

function toggleBackground () {
    
    document.querySelector('body').classList.toggle('buttonChangeColor');
}

let intervalID;

function setIntervalToggle () {
    if (intervalID) {
        clearInterval(intervalID);
        console.log(intervalID)
    }
    intervalID = window.setInterval(toggleBackground, 1500);
}

function clearIntervalToggle () {
    clearInterval(intervalID)
}

$toggleButton.addEventListener('click', setIntervalToggle);
$toggleOffButton.addEventListener('click', clearIntervalToggle);