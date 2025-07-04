import shoyuramen from './images/shoyu-ramen.jpg';
import shiyoramen from './images/shio-ramen.jpg';
import teriyakimisoramen from './images/teriyaki-miso-ramen.jpg';
import tonkotsuramen from './images/tonkotsu-ramen.jpg';
import tantanmenramen from './images/tantanmen-ramen.jpg';

export default function loadMenuPage(){
    let divContent = document.querySelector('#content');
    let menuPage = create('div');
    menuPage.classList.add('menu-page');
    divContent.appendChild(menuPage);
    
    let menu = create('div');
    menu.classList.add('menu');
    menuPage.appendChild(menu);
    
    let shoyuRamen = create('img');
    shoyuRamen.src = shoyuramen;
    shoyuRamen.width = 250;
    shoyuRamen.height = 250;
    menu.appendChild(shoyuRamen);
    
    let description = create('div');
    description.classList.add('description');
    menu.appendChild(description);

    let h2 = create('h2');
    h2.textContent = '$12,99 - Shoyu (Soy Sauce) Ramen';
    description.appendChild(h2);

    let p = create('p');
    p.textContent = 'Originating in the bustling metropolis of Tokyo, shoyu ramen epitomizes the fusion of simplicity and sophistication. Its clear, umami-rich broth is delicately seasoned with soy sauce, creating a harmonious blend of flavors. Crafting this elegant base is a meticulous process that involves simmering a combination of chicken and pork bones. Although not traditional, minor ingredients such as ginger root, scallions or garlic can be added to this stock. Once the stock is simmered and strained of impurities, soy sauce is added to achieve a savory and aromatic profile. Although simple, this Japanese ramen broth carries the show with its caramel-colored hue and earthy saltiness.';
    description.appendChild(p);

    let menu2 = create('div');
    menu2.classList.add('menu');
    menuPage.appendChild(menu2);
    
    let shioRamen = create('img');
    shioRamen.src = shiyoramen;
    shioRamen.width = 250;
    shioRamen.height = 250;
    menu2.appendChild(shioRamen);
    
    let description2 = create('div');
    description2.classList.add('description');
    menu2.appendChild(description2);

    let h22 = create('h2');
    h22.textContent = '$19,79 - Shio (Salt) Ramen';
    description2.appendChild(h22);

    let p2 = create('p');
    p2.textContent = 'In the heart of Hokkaido, shio ramen stands as another testament to the art of subtlety. This refreshing ramen variety boasts a clear, salt-seasoned broth that allows the essence of the sea to shine with utmost clarity. The broth begins with either chicken or pork bones, chosen for their mild and complementary flavors.';
    description2.appendChild(p2);

    let menu3 = create('div');
    menu3.classList.add('menu');
    menuPage.appendChild(menu3);
    
    let teriyakiMisoRamen = create('img');
    teriyakiMisoRamen.src = teriyakimisoramen;
    teriyakiMisoRamen.width = 250;
    teriyakiMisoRamen.height = 250;
    menu3.appendChild(teriyakiMisoRamen);
    
    let description3 = create('div');
    description3.classList.add('description');
    menu3.appendChild(description3);

    let h23 = create('h2');
    h23.textContent = '$14.99 - Teriyaki Miso Ramen';
    description3.appendChild(h23);

    let p3 = create('p');
    p3.textContent = 'Also hailing from Hokkaido, miso ramen offers a departure from the transparent broths, diving into a world of robust, cloudy umami. Crafting this bold flavor profile entails the use of fermented soybean paste, or miso, which imparts an earthy, rich depth to the broth. The broth is prepared by simmering pork or chicken bones, with a seasoned miso paste added to create a thick, flavorful base.';
    description3.appendChild(p3);

    let menu4 = create('div');
    menu4.classList.add('menu');
    menuPage.appendChild(menu4);
    
    let tonkotsuRamen = create('img');
    tonkotsuRamen.src = tonkotsuramen;
    tonkotsuRamen.width = 250;
    tonkotsuRamen.height = 250;
    menu4.appendChild(tonkotsuRamen);
    
    let description4 = create('div');
    description4.classList.add('description');
    menu4.appendChild(description4);

    let h24 = create('h2');
    h24.textContent = '$13,99 - Tonkotsu Ramen';
    description4.appendChild(h24);

    let p4 = create('p');
    p4.textContent = "Venture to Fukuoka, and tonkotsu ramen, renowned for its creamy, milky-white broth, reigns supreme. The secret behind its lush consistency is the meticulous process of simmering pork bones for an extended period, extracting every ounce of flavor and creaminess from the bones. The result is a broth that's rich, hearty and almost velvety in texture.";
    description4.appendChild(p4);

    let menu5 = create('div');
    menu5.classList.add('menu');
    menuPage.appendChild(menu5);
    
    let tantanmenRamen = create('img');
    tantanmenRamen.src = tantanmenramen;
    tantanmenRamen.width = 250;
    tantanmenRamen.height = 250;
    menu5.appendChild(tantanmenRamen);
    
    let description5 = create('div');
    description5.classList.add('description');
    menu5.appendChild(description5);

    let h25 = create('h2');
    h25.textContent = '$11,99 - Tantanmen (Sesame-Based) Ramen';
    description5.appendChild(h25);

    let p5 = create('p');
    p5.textContent = "Tantanmen, while not native to Japan, has found its place in the country's ramen culture. This spicy and creamy broth draws inspiration from Sichuan cuisine, resulting in a fiery culinary adventure that carries a touch of its Chinese heritage. Tantanmen's origins trace back to the Sichuan province of China, where the dish is known as dan dan noodles. In its traditional Chinese form, this dish features a rich and spicy sauce made from ground Sichuan peppercorns, chile oil, sesame paste and minced pork. The heat and complexity of Sichuan flavors shine through, providing a robust, fiery and aromatic dressing for the noodles.";
    description5.appendChild(p5);
}       


function create(type){
    let dummy = document.createElement(type);
    return dummy;
}