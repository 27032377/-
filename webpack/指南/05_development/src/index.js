import printMe from './print.js';

let btn = document.createElement('button');
btn.innerText = '按钮';
btn.onclick = printMe;

document.body.appendChild(btn);
