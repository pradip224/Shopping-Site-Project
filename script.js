const cardContainer = document.getElementsByClassName('js-card-container')[0];

let trendingCard;


fetch('https://fakestoreapi.com/products')
.then(res=> res.json())
.then(data => {
    trendingCard = data;
    renderCards(trendingCard);
});

function renderCards(data) {
    cardContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
  
    //traverse through the array of objects and creates the card components as per the matched search string
    data.forEach((e) => {
        
        const card = createCard(e.id,e.image,e.title,e.description,e.price);
        fragment.appendChild(card);
      
    });
    //renders the card components onto the card-container DOM 
    cardContainer.appendChild(fragment);
  }



  function createCard(id, image, title, desc, price) {
    // create the card element
    const card = document.createElement("div");
    card.classList.add("card", "d-flex");
  
    // create the image element and set its source
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Product Image";
    card.appendChild(img);
  
    // create the card-info element
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    card.appendChild(cardInfo);
  
    // create the title element and set its text
    const titleNode = document.createTextNode(title);
    const titleElem = document.createElement("div");
    titleElem.classList.add("card-title", "ellipsis");
    titleElem.appendChild(titleNode);
    cardInfo.appendChild(titleElem);
  
    // create the description element and set its text
    const descNode = document.createTextNode(desc);
    const descElem = document.createElement("div");
    descElem.classList.add("card-desc", "ellipsis");
    descElem.appendChild(descNode);
    cardInfo.appendChild(descElem);
  
    // create the price element and set its text
    let priceFormat = price*80;
    const priceNode = document.createTextNode(`RS. ${priceFormat.toFixed(2)}`);
    const priceElem = document.createElement("div");
    priceElem.classList.add("card-price");
    priceElem.appendChild(priceNode);
    cardInfo.appendChild(priceElem);
  
    // create the add-to-cart button and set its text
    const addToCartNode = document.createTextNode("Add to Cart");
    const addToCartElem = document.createElement("div");
    addToCartElem.classList.add("add-to-cart");
    addToCartElem.appendChild(addToCartNode);
    cardInfo.appendChild(addToCartElem);
  
    // set the card's id
    card.id = id;
  
    // return the card element
    return card;
  }
  



function main(){

}


document.addEventListener('DOMContentLoaded',main);