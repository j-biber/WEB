// $(function() {
//     console.log('Hello world!');
// });

$('li:first').addClass('bottom-border');
$('li').css('text-transform', 'uppercase');
$('li.active a').addClass('font-color');

const index = ($('li').length-1)/2;
console.log(index)
// $(`li:eq(${index})`).addClass('background');
$('li').eq(index).addClass('background');