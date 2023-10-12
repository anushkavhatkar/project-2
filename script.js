

let emojiContainer = document.getElementById("emoji-container");

let emojiArray = [];
let emojis = ["😊", "😢", "😍", "🥰", "😂", "😁", "😎", "😭", "🙌", "🤔", "🤩", "😡", "🥺", "😏", "😓", "🤯", "🤤", "🤠", "🤫", "🤓", "👍🏼", "💳", "🫶", "💖", "🤍", "❤️‍🔥", "🔒", "🛍️", "🛒", "💲", "🤑", "💸", "🪙"];

function checkIfOverlap(elem1, elem2) {
    const bounds1 = elem1.getBoundingClientRect();
    const bounds2 = elem2.getBoundingClientRect();

    return !(bounds1.right < bounds2.left || 
             bounds1.left > bounds2.right || 
             bounds1.bottom < bounds2.top || 
             bounds1.top > bounds2.bottom);
}

function generatePositions(element) {
    let randomX = Math.floor(Math.random()*(window.innerWidth-75));
    let randomY = Math.floor(Math.random()*(window.innerHeight-75));

    element.style.position = "absolute";
    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

for (i=0; i<20; i++) {
    let emojiGlyph = document.createElement('div');
    emojiGlyph.style.fontFamily = "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol";
    emojiGlyph.style.fontSize = "75px";
    emojiGlyph.innerText = emojis[Math.floor(Math.random() * emojis.length)];  // Assign random emoji
    emojiGlyph.style.filter = "blur(1.5px)";
    emojiGlyph.style.transition = "transform 0.5s ease-in-out";


    let retries = 0;
    const MAX_RETRIES = 50;

    do {
        generatePositions(emojiGlyph);
        retries++;
        if (retries > MAX_RETRIES) break;
    } while (emojiArray.some(existingEmoji => checkIfOverlap(emojiGlyph, existingEmoji)));

    emojiArray.push(emojiGlyph);
}

emojiArray.forEach((emoji) => {
    emojiContainer.appendChild(emoji);
});


for (const emoji of emojiArray) {
    emoji.addEventListener("mouseover", function(){

        emoji.style.cursor = "pointer";

        emoji.style.transform = `translateY(${Math.random()*300 - 100}%) translateX(${Math.random()*300 - 100}%) rotate(${Math.random()*500 - 100}deg)`;

    
    })
}
