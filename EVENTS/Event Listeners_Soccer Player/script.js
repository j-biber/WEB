const $playerImage = document.querySelector('.player');
const $button = document.querySelector('button');
const $fieldImage = document.querySelector('.background-image');

let x;
let y;

let isMoving = true;

function movePlayer (event) {
 x = event.clientX;
 y = event.clientY;
 $playerImage.style.left = x - 70 + 'px';
 $playerImage.style.top = y - 70 + 'px';
}

$fieldImage.addEventListener('click', movePlayer);

function stopMoving () {
if (isMoving){
    $fieldImage.removeEventListener('click', movePlayer);
    isMoving = false;
    $button.innerHTML = 'Start Moving';
    console.log($button)
}else {
    $fieldImage.addEventListener('click', movePlayer);
    isMoving = true;
    $button.innerHTML = 'Stop Moving';
}
}

$button.addEventListener('click', stopMoving);

