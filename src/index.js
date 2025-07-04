import './styles.css';
import loadHomePage from './home';'./home.js';
import  loadMenuPage  from './menu-page';

let homeBtn = document.querySelector('#homeBtn');
let menuBtn = document.querySelector('#menuBtn');
let aboutBtn = document.querySelector('#aboutBtn');

let divContent = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', loadHomePage);

menuBtn.addEventListener('click', ()=>{
    divContent.innerHTML = '';
    homeBtn.classList.toggle('active');
    menuBtn.classList.toggle('active');
    loadMenuPage();
});