let container = document.getElementById("cards");


let images = [
    {
      "number": 1,
      "age": "10 DAYS OLD",
      "item": "Onitsuka Tiger Sneakers",
      "price": "$120"
    },
    {
      "number": 2,
      "age": "300 DAYS OLD",
      "item": "Good Luck Hat",
      "price": "$36"
    },
    {
      "number": 3,
      "age": "1 DAY OLD",
      "item": "Wideboy Alarm Clock",
      "price": "$59"
    },
    {
      "number": 4,
      "age": "2 DAYS OLD",
      "item": "Kids Insulated Lunch Box",
      "price": "$40"
    },
    {
      "number": 5,
      "age": "45 DAYS OLD",
      "item": "Sweet or Sour Tee",
      "price": "$30"
    },
    {
      "number": 6,
      "age": "60 DAYS OLD",
      "item": "The Beauty Bag",
      "price": "$40"
    },
    {
      "number": 7,
      "age": "5 DAYS OLD",
      "item": "The Heart Tee",
      "price": "$68"
    },
    {
      "number": 8,
      "age": "7 DAYS OLD",
      "item": "Mid Century Flip Clock",
      "price": "$95"
    },
    {
      "number": 9,
      "age": "20 DAYS OLD",
      "item": "Rizzoli Book",
      "price": "$30"
    },
    {
      "number": 10,
      "age": "90 DAYS OLD",
      "item": "Gazelle Indoor Shoes",
      "price": "$150"
    },
    {
      "number": 11,
      "age": "100 DAYS OLD",
      "item": "New York Sweater",
      "price": "$148"
    },
    {
      "number": 12,
      "age": "27 DAYS OLD",
      "item": "Studio 54 Baby Tee",
      "price": "$30"
    },
    {
      "number": 13,
      "age": "45 DAYS OLD",
      "item": "Stussy Sweater",
      "price": "$78"
    },
    {
      "number": 14,
      "age": "4 DAYS OLD",
      "item": "Navy Star Sweater",
      "price": "$40"
    },
    {
      "number": 15,
      "age": "2 DAYS OLD",
      "item": "Icon Pattern Skirt",
      "price": "$15"
    },
    {
      "number": 16,
      "age": "365 DAYS OLD",
      "item": "Define Jacket",
      "price": "$100"
    },
    {
      "number": 17,
      "age": "33 DAYS OLD",
      "item": "Lucina Mini Dress",
      "price": "$2,100"
    },
    {
      "number": 18,
      "age": "44 DAYS OLD",
      "item": "Chanel Flap Bag",
      "price": "$7,000"
    },
    {
      "number": 19,
      "age": "11 DAYS OLD",
      "item": "Green Botsy Baguette Bag",
      "price": "$860"
    },
    {
      "number": 20,
      "age": "13 DAYS OLD",
      "item": "UO Paillette Bag",
      "price": "$20"
    },
    {
      "number": 21,
      "age": "78 DAYS OLD",
      "item": "Cozy Holiday PJs",
      "price": "$67"
    },
    {
      "number": 22,
      "age": "100 DAYS OLD",
      "item": "Cleo Cami",
      "price": "$120"
    },
    {
      "number": 23,
      "age": "200 DAYS OLD",
      "item": "Dainty Star Earrings",
      "price": "$17"
    },
    {
      "number": 24,
      "age": "50 DAYS OLD",
      "item": "Print Crop Top",
      "price": "$40"
    }
  ];

function createCards() {

for (i=0; i<10; i++) {


  // 1. Create the parent card container.
let card = document.createElement('div');


let randomX = Math.floor(Math.random() * (window.innerWidth - (window.innerWidth * 0.2)));

let randomY = Math.floor(Math.random()*(window.innerHeight*2));

    card.style.position = "absolute";
    card.style.left = randomX + "px";
    card.style.top = randomY + "px";

card.className = 'wishlist-card';


// 2. Create the child elements.

let cardAge = document.createElement('div');
let cardImage = document.createElement('div');
let itemTitle = document.createElement('div');
let itemPrice = document.createElement('div');



// 3. Set the content and class names for the child elements.



cardAge.className = 'card-age';
cardAge.textContent = images[i].age;  // This can be dynamic, for example: `${days} DAYS OLD`

cardImage.className = 'card-image';
cardImage.style.backgroundImage = `url(/assets/${i}.jpeg)`;

// Optionally, if you want to add an image inside the cardImage div:
// cardImage.style.backgroundImage = "url('path_to_your_image.jpg')";

itemTitle.className = 'item-title';
itemTitle.textContent = images[i].item; // This can be dynamic

itemPrice.className = 'item-price';
itemPrice.textContent = images[i].price;  // This can be dynamic


// 4. Append the child elements to the parent card container.

card.appendChild(cardAge);
card.appendChild(cardImage);
card.appendChild(itemTitle);
card.appendChild(itemPrice);


document.getElementById('cards').appendChild(card);

}



};

createCards();


// Make the DIV element draggable:
dragElement(document.querySelector('.wishlist-card'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}