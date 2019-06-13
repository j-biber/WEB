function changeBackgroundColor () {
    document.getElementById('list2').className = 'backgroundColor';
} 
changeBackgroundColor();

function changeListItemBackgroundColor () {
var $allListItems = document.querySelectorAll('li');
//console.log($allListItems)
for (var i = 0; i < $allListItems.length; i++) {
    $allListItems[i].className = 'backgroundColorListItems';
}
}
changeListItemBackgroundColor();

function changeList3ListItems () {
var $list3 = document.querySelector('ul').nextElementSibling.nextElementSibling.children;
//console.log($list3)
for (var i = 0; i < $list3.length; i++) {
    $list3[i].className = 'list3BackgroundColor';
    $list3[i].setAttribute("style", "text-transform: uppercase;");
}
}
changeList3ListItems();
