import '../assets/style/public.css';

let element = document.createElement('div');
element.innerText = process.env.NODE_ENV;

document.body.appendChild(element);