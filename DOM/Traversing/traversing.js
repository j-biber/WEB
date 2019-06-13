function changeClass () {

    var $element = document.querySelector('.active');
    $element.classList.remove('active');

    $element.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.add('active');
}
changeClass();