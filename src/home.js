import ramensimple from './images/ramen-simple.jpg';
import ramenbanner from './images/ramen-banner.jpg';
import ramencomplex from './images/ramen-complex.jpg';

function loadHomePage(){
    let divContent = document.querySelector('#content');
    let homepage = create('div');
    homepage.classList.add('home-page');
    divContent.appendChild(homepage);
    
    let headline = create('div');
    headline.classList.add('headline');
    homepage.appendChild(headline);
    
    let ramenSimple = create('img');
    ramenSimple.src = ramensimple;
    ramenSimple.width = 300;
    ramenSimple.height = 300;
    headline.appendChild(ramenSimple);
    
    let text = create('div');
    text.classList.add('text');
    headline.appendChild(text);
    
    let h2 = create('h2');
    h2.textContent = 'Simple Ramens for Vibes';
    text.appendChild(h2);
    
    let p = create('p');
    p.textContent = 'My cooking might cause confusion, but the laughs are guaranteed. Accept this lunch invitation message and brace yourself for culinary surprises and comedy.';
    text.appendChild(p);
    
    let banner = create('div');
    banner.classList.add('banner');
    homepage.appendChild(banner);
    
    let ramenBanner = create('img');
    ramenBanner.src = ramenbanner;
    ramenBanner.width = 300;
    ramenBanner.height = 600;
    banner.appendChild(ramenBanner);
    
    let subHeadline = create('div');
    subHeadline.classList.add('sub-headline');
    homepage.appendChild(subHeadline);
    
    let text2 = create('div');
    text2.classList.add('text');
    subHeadline.appendChild(text2);
    
    let h22 = create('h2');
    h22.textContent = 'Complex Ramens for Buds';
    text2.appendChild(h22);
    
    let p2 = create('p');
    p2.textContent = 'Recognizing that food is more than sustenance—it is an expression of culture, heritage, and creativity.';
    text2.appendChild(p2);
    
    let ramenComplex = create('img');
    ramenComplex.src = ramencomplex;
    ramenComplex.width = 300;
    ramenComplex.height = 300;
    subHeadline.appendChild(ramenComplex);

    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.classList.add('active');
}


function create(type){
    let dummy = document.createElement(type);
    return dummy;
}

export default loadHomePage;

