import './styles.css';
import loadHomePage from './home';'./home.js';

let homeBtn = document.querySelector('#homeBtn');
let menuBtn = document.querySelector('#menuBtn');
let aboutBtn = document.querySelector('#aboutBtn');

document.addEventListener('DOMContentLoaded', loadHomePage);