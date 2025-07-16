import shoyuramen from "./images/shoyu-ramen.jpg";
import shiyoramen from "./images/shio-ramen.jpg";
import teriyakimisoramen from "./images/teriyaki-miso-ramen.jpg";
import tonkotsuramen from "./images/tonkotsu-ramen.jpg";
import tantanmenramen from "./images/tantanmen-ramen.jpg";

let images = [
  shoyuramen,
  shiyoramen,
  teriyakimisoramen,
  tonkotsuramen,
  tantanmenramen,
];
let descs = [
  "Originating in the bustling metropolis of Tokyo, shoyu ramen epitomizes the fusion of simplicity and sophistication. Its clear, umami-rich broth is delicately seasoned with soy sauce, creating a harmonious blend of flavors. Crafting this elegant base is a meticulous process that involves simmering a combination of chicken and pork bones. Although not traditional, minor ingredients such as ginger root, scallions or garlic can be added to this stock. Once the stock is simmered and strained of impurities, soy sauce is added to achieve a savory and aromatic profile. Although simple, this Japanese ramen broth carries the show with its caramel-colored hue and earthy saltiness.",
  "In the heart of Hokkaido, shio ramen stands as another testament to the art of subtlety. This refreshing ramen variety boasts a clear, salt-seasoned broth that allows the essence of the sea to shine with utmost clarity. The broth begins with either chicken or pork bones, chosen for their mild and complementary flavors.",
  "Also hailing from Hokkaido, miso ramen offers a departure from the transparent broths, diving into a world of robust, cloudy umami. Crafting this bold flavor profile entails the use of fermented soybean paste, or miso, which imparts an earthy, rich depth to the broth. The broth is prepared by simmering pork or chicken bones, with a seasoned miso paste added to create a thick, flavorful base.",
  "Venture to Fukuoka, and tonkotsu ramen, renowned for its creamy, milky-white broth, reigns supreme. The secret behind its lush consistency is the meticulous process of simmering pork bones for an extended period, extracting every ounce of flavor and creaminess from the bones. The result is a broth that's rich, hearty and almost velvety in texture.",
  "Tantanmen, while not native to Japan, has found its place in the country's ramen culture. This spicy and creamy broth draws inspiration from Sichuan cuisine, resulting in a fiery culinary adventure that carries a touch of its Chinese heritage. Tantanmen's origins trace back to the Sichuan province of China, where the dish is known as dan dan noodles. In its traditional Chinese form, this dish features a rich and spicy sauce made from ground Sichuan peppercorns, chile oil, sesame paste and minced pork. The heat and complexity of Sichuan flavors shine through, providing a robust, fiery and aromatic dressing for the noodles.",
];

let titles = [
  "$12,99 - Shoyu (Soy Sauce) Ramen",
  "$19,79 - Shio (Salt) Ramen",
  "$14.99 - Teriyaki Miso Ramen",
  "$13,99 - Tonkotsu Ramen",
  "$11,99 - Tantanmen (Sesame-Based) Ramen",
];

let totalMenu = 5;

export default function loadMenuPage() {
  let divContent = document.querySelector("#content");
  let menuPage = create("div");
  menuPage.classList.add("menu-page");
  divContent.appendChild(menuPage);

  for (let i = 0; i < totalMenu; i++){
    let menu = create("div");
    menu.classList.add("menu");
    menuPage.appendChild(menu);

    let img = create("img");
    img.src = images[i];
    img.width = 250;
    img.height = 250;
    menu.appendChild(img);

    let description = create("div");
    description.classList.add("description");
    menu.appendChild(description);

    let h2 = create("h2");
    h2.textContent = titles[i];
    description.appendChild(h2);

    let p = create("p");
    p.textContent = descs[i];
    description.appendChild(p);
  }
}

function create(type) {
  let dummy = document.createElement(type);
  return dummy;
}
