const $gallery = $('<div class="gallery"></div>');

const imgUrls = [
    'https://via.placeholder.com/400/00FF00	',
    'https://via.placeholder.com/500x600/008000',
    'https://via.placeholder.com/300x150/00FFFF',
    'https://via.placeholder.com/600/008080',
    'https://via.placeholder.com/200x500/800000',
    'https://via.placeholder.com/300/800080',
    'https://via.placeholder.com/450x600/FFFF00'
];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i=0; i < imgUrls.length; i++) {
    const $img = $(`<img src="${imgUrls[i]}">`);
    $gallery.append($img);
}

$('body').prepend($gallery);

const $title = $('<h1>Nasa galerija</h1>');
$('body').prepend($title);

$('img').each(function(index, el) {
    const imgHeight = getRandomArbitrary(100, 210);
    $(el).height(imgHeight);
    //console.log( $(el).height())
});

$('img').each(function (index, element){
  if ($(element).height()<200) {
    $(element).css('border', '5px solid green');
  }else {
      return false;
  }
})