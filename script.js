"use strict";
const data = [
  {
    id: 0,
    productName: "Fresh Avocados",
    image: "🥑",
    from: "Spain",
    nutrients: "Vitamin B, Vitamin K",
    quantity: "4 🥑",
    price: "6.50",
    organic: true,
    description:
      "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.",
  },
  {
    id: 1,
    productName: "Goat and Sheep Cheese",
    image: "🧀",
    from: "Portugal",
    nutrients: "Vitamin A, Calcium",
    quantity: "250g",
    price: "5.00",
    organic: false,
    description:
      "Creamy and distinct in flavor, goat cheese is a dairy product enjoyed around the world. Goat cheese comes in a wide variety of flavors and textures, from soft and spreadable fresh cheese to salty, crumbly aged cheese. Although it’s made using the same coagulation and separation process as cheese made from cow’s milk, goat cheese differs in nutrient content.",
  },
  {
    id: 2,
    productName: "Apollo Broccoli",
    image: "🥦",
    from: "Portugal",
    nutrients: "Vitamin C, Vitamin K",
    quantity: "3 🥦",
    price: "5.50",
    organic: true,
    description:
      "Broccoli is known to be a hearty and tasty vegetable which is rich in dozens of nutrients. It is said to pack the most nutritional punch of any vegetable. When we think about green vegetables to include in our diet, broccoli is one of the foremost veggies to come to our mind. Broccoli is a cruciferous vegetable and part of the cabbage family, which includes vegetables such as Brussel sprouts and kale. Although the tastes are different, broccoli and these other vegetables are from the same family.",
  },
  {
    id: 3,
    productName: "Baby Carrots",
    image: "🥕",
    from: "France",
    nutrients: "Vitamin A, Vitamin K",
    quantity: "20 🥕",
    price: "3.00",
    organic: true,
    description:
      "The carrot is a root vegetable that is often claimed to be the perfect health food. It is crunchy, tasty and highly nutritious. Carrots are a particularly good source of beta-carotene, fiber, vitamin K, potassium and antioxidants. Carrots have a number of health benefits. They are a weight loss friendly food and have been linked to lower cholesterol levels and improved eye health.",
  },
  {
    id: 4,
    productName: "Sweet Corncobs",
    image: "🌽",
    from: "Germany",
    nutrients: "Vitamin C, Magnesium",
    quantity: "2 🌽",
    price: "2.00",
    organic: false,
    description:
      "Also known as maize, corn is one of the most popular cereal grains in the world. Popcorn and sweet corn are commonly eaten varieties, but refined corn products are also widely consumed, frequently as ingredients in foods. These include tortillas, tortilla chips, polenta, cornmeal, corn flour, corn syrup, and corn oil. Whole-grain corn is as healthy as any cereal grain, rich in fiber and many vitamins, minerals, and antioxidants.",
  },
];
//   {
//     "id": 2,
//     "productName": "Apollo Broccoli",
//     "image": "🥦",
//     "from": "Portugal",
//     "nutrients": "Vitamin C, Vitamin K",
//     "quantity": "3 🥦",
//     "price": "5.50",
//     "organic": true,
//     "description": "Broccoli is known to be a hearty and tasty vegetable which is rich in dozens of nutrients. It is said to pack the most nutritional punch of any vegetable. When we think about green vegetables to include in our diet, broccoli is one of the foremost veggies to come to our mind. Broccoli is a cruciferous vegetable and part of the cabbage family, which includes vegetables such as Brussel sprouts and kale. Although the tastes are different, broccoli and these other vegetables are from the same family."
//   }
const cardsContainer = document.querySelector(".cards-container");
const backBtn = document.querySelector(".product__back");
const productContainer = document.querySelector(".container-product");
const cardLink = document.querySelector(".card__link");

// backBtn.addEventListener("click", function () {
//   cardsContainer.classList.remove("hidden");
//   productContainer.classList.add("hidden");
// });

console.log(cardsContainer);

function loadData() {}

data.forEach((el) => {
  const html = `

   <figure class="card" >
   <div class="card__emoji">${el.image}${el.image}</div>

   <div class="card__title-box">
     <h2 class="card__title">${el.productName}</h2>
   </div>

   <div class="card__details">
     <div class="card__detail-box">
       <h6 class="card__detail card__detail--organic">${
         el.organic ? "Organic!" : " "
       }</h6>
     </div>

     <div class="card__detail-box">
       <h6 class="card__detail">${el.quantity} per 📦</h6>
     </div>

     <div class="card__detail-box">
       <h6 class="card__detail card__detail--price">${el.price}€</h6>
     </div>
   </div>

   <a class="card__link" href="#" data-id="${el.id}">
     <span data-id="${el.id}"> Detail<i class="emoji-right" data-id="${
    el.id
  }">👉</i></span>
   </a>
 </figure>
    `;

  cardsContainer.insertAdjacentHTML("beforeend", html);
});

function loadProduct(product) {
  productContainer.innerHTML = " ";

  let html;

  html = `
    
    <figure class="product">
    <div class="product__organic ${
        product.organic ? " " : "not-organic"
      }"><h5>${
      product.organic ? "Organic" : " "
    }</h5></div>
    <a href="#" class="product__back">
      <span class="emoji-left">👈</span>Back
    </a>
    <div class="product__hero">
      <span class="product__emoji product__emoji--1">${product.image}</span>
      <span class="product__emoji product__emoji--2">${product.image}</span>
      <span class="product__emoji product__emoji--3">${product.image}</span>
      <span class="product__emoji product__emoji--4">${product.image}</span>
      <span class="product__emoji product__emoji--5">${product.image}</span>
      <span class="product__emoji product__emoji--6">${product.image}</span>
      <span class="product__emoji product__emoji--7">${product.image}</span>
      <span class="product__emoji product__emoji--8">${product.image}</span>
      <span class="product__emoji product__emoji--9">${product.image}</span>
    </div>
    <h2 class="product__name">${product.productName}</h2>
    <div class="product__details">
      <p><span class="emoji-left">🌍</span> ${product.from}</p>
      <p><span class="emoji-left">❤️</span> ${product.nutrients}</p>
      <p><span class="emoji-left">📦</span> ${product.quantity} 🥑</p>
      <p><span class="emoji-left">🏷</span> ${product.price}€</p>
    </div>

    <a href="#" class="product__link">
      <span class="emoji-left">🛒</span>
      <span>Add to shopping card (${product.price}€)</span>
    </a>

    <p class="product__description">
    ${product.description}
    </p>
  </figure>
    
    `;

  productContainer.insertAdjacentHTML("afterbegin", html);
}

cardsContainer.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);

  if (
    e.target.classList.contains("card__link") ||
    e.target.textContent.trim() === "Detail👉" ||
    e.target.textContent.trim() === "👉"
  ) {
    console.log(e.target.dataset.id);
    const productId = e.target.dataset.id;
    const product = data[productId];

    console.log(product);

    cardsContainer.classList.add("hidden");

    productContainer.classList.remove("hidden");

    loadProduct(product);
  }
});

productContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("product__back")) {
    cardsContainer.classList.remove("hidden");

    productContainer.classList.add("hidden");
  }
});
