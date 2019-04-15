import printMe from './print.js';

let element = document.createElement('div');
element.innerText = 'manage output';

let button = document.createElement('button');
button.innerText = '按钮';
button.onclick = printMe;

element.appendChild(button);

document.body.appendChild(element);