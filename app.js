const products = [
  {
    id: 1,
    title: "Nike Blazer Mid '77",
    price: "$110",
    category: "Men's shoes",
    colors: "1 colors",
    image: "./image 6.png"
  },
  {
    id: 2,
    title: "Nike SB x Run the Jewels Dunk",
    price: "$140",
    category: "Men's shoes",
    colors: "3 colors",
    image: "./goluboy-krosovok.png"
  },
  {
    id: 3,
    title: "Nike Air Force 1 High '07 PRM",
    price: "$160",
    category: "Men's shoes",
    colors: "2 colors",
    image: "./seri.png"
  },
  {
    id: 4,
    title: "Jordan 1 Retro Spider-Man",
    price: "$170",
    category: "Men's shoes",
    colors: "1 colors",
    image: "./image 6 (1).png"
  },
  {
    id: 5,
    title: "Nike SB Zoom Blazer Low",
    price: "$140",
    category: "Men's shoes",
    colors: "5 colors",
    image: "./jinsovie-krosovki.png"
  },
  {
    id: 6,
    title: "Nike Air Force 1 Low Unity",
    price: "$120",
    category: "Men's shoes",
    colors: "4 colors",
    image: "./image 6 (2).png"
  },
  {
    id: 7,
    title: "Nike Air Force 1 GTX",
    price: "$110",
    category: "Men's shoes",
    colors: "1 colors",
    image: "./nnkrosovok.png"
  },
  {
    id: 8,
    title: "Nike WMNS Air Force 1 '07 LX",
    price: "$140",
    category: "Men's shoes",
    colors: "2 colors",
    image: "./image 6 (3).png"
  }
];

const productContainer = document.querySelector('.product');

products.forEach(product => {
  productContainer.insertAdjacentHTML('beforeend', `
    <div class="card">
        <div class="image-box">
             <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="details">
            <div class="row">
                <h3 class="title">${product.title}</h3>
                <span class="price">${product.price}</span>
            </div>
            <div class="row sub-row">
                <p class="category">${product.category}</p>
                <p class="colors">${product.colors}</p>
            </div>
        </div>
    </div>
  `);
});