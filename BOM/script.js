// const myStorage = window.localStorage;
// const obj = {
//     a: 'haha',
//     b: 'zzz'
// }

// localStorage.setItem('prvi', 'Krava');

// const nekiItem = myStorage.getItem('prvi');
// console.log(nekiItem);

// // localStorage.removeItem('prvi');

// sessionStorage.setItem('objekat', JSON.stringify(obj));
// console.log(sessionStorage.getItem('objekat'));

function saveToStorage (typeOfStorage, key, value) {
if (typeof value === 'object') {
    const data = JSON.stringify(value);
    typeOfStorage.setItem(key, data);
    console.log(JSON.parse(typeOfStorage.getItem(key)));
}else {
    typeOfStorage.setItem(key, value);
    console.log(typeOfStorage.getItem(key));
}
}
saveToStorage(localStorage, 'bla', {a: 'haha',  b: 'zzz'});

function clearStorage (typeOfStorage) {
typeOfStorage.clear();
}
clearStorage(localStorage);