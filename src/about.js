export default function loadAboutPage(){
    let divContent = document.querySelector('#content');

    let aboutPage = create('div');
    aboutPage.classList.add('about-page');
    divContent.appendChild(aboutPage);

    let container = create('div');
    container.classList.add('container');
    aboutPage.appendChild(container);

    let h1 = create('h1');
    h1.textContent = 'Ramen - Staurant';
    container.appendChild(h1);

    let container2 = create('div');
    container2.classList.add('container');
    aboutPage.appendChild(container2);

    let h2 = create('h2');
    h2.textContent = 'Ramen - Staurant is a simple restaurant featuring our favorite ramens in hope to spread the love of ramens worldwide. Support us by sharing and buying ramens from our restaurant.'
    container2.appendChild(h2);

    let h22 = create('h2');
    h22.textContent = 'Thank You';
    container2.appendChild(h22);
}

function create(type){
    let dummy = document.createElement(type);
    return dummy;
}
