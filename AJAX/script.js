const $gallery = document.querySelector('.cats');
const $button = document.querySelector('button');

function getCat () { 
    
const request = new XMLHttpRequest();
request.open('GET', 'https://api.thecatapi.com/v1/images/search');
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
    //console.log(request.responseText)
    const data = JSON.parse(request.responseText);
    //console.log(data[0])
    //const $img = document.createElement('img');
    //console.log($img)
    //$img.setAttribute('src', data[0].url);
    //$gallery.appendChild($img);

    $gallery.innerHTML = `<img src="${data[0].url}">`;
}
}
request.send()
}

$button.addEventListener('click', getCat);