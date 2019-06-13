const $playerImage = $('.player');
const $button = $('button');
const $fieldImage = $('.background-image');

let x;
let y;

let isMoving = true;

function movePlayer (event) {
 x = event.clientX;
 y = event.clientY;
 $playerImage.css("left", `${x - 70}px`);
 $playerImage.css("top", `${y - 70}px`);
}

$fieldImage.on('click', movePlayer);

function stopMoving () {
if (isMoving){
    $fieldImage.off('click', movePlayer);
    isMoving = false;
    $button.text('Start Moving');
    console.log($button)
}else {
    $fieldImage.on('click', movePlayer);
    isMoving = true;
    $button.text('Stop Moving');
}
}

$button.on('click', stopMoving);

