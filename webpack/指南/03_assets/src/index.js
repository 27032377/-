import './index.css';
import img from './001.jpg';

let app = document.querySelector('#app');
let element = document.createElement('div');
element.innerText = 'Assets Management';
let nice = new Image();
nice.src = img;

element.appendChild(nice);
app.appendChild(element);