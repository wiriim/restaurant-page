import './styles.css';
import loadHomePage from './home.js';
import  loadMenuPage  from './menu.js';
import  loadAboutPage  from './about.js';

let homeBtn = document.querySelector('#homeBtn');
let menuBtn = document.querySelector('#menuBtn');
let aboutBtn = document.querySelector('#aboutBtn');

let divContent = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', loadHomePage);

homeBtn.addEventListener('click', ()=>{
    divContent.innerHTML = '';
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    loadHomePage();
});

menuBtn.addEventListener('click', ()=>{
    divContent.innerHTML = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.add('active');
    aboutBtn.classList.remove('active');
    loadMenuPage();
});

aboutBtn.addEventListener('click', ()=>{
    divContent.innerHTML = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.add('active');
    loadAboutPage();
});