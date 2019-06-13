
var div = document.createElement('div');
div.className = 'dropdown';
document.body.appendChild(div);

var button = document.createElement('button');
button.className = 'dropbtn';
button.textContent = 'Dropdown';
div.appendChild(button);

var divMenu = document.createElement('div');
divMenu.className = 'dropdown-content';
div.appendChild(divMenu);

var link1 = document.createElement('a');
link1.textContent = 'Link1';
var link2 = document.createElement('a');
link2.textContent = 'Link2';
divMenu.appendChild(link1);
div.appendChild(link2);





