const images = ["1.jpg","2.jpg","3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];
const chosenImage = images[1];
const bgImage = document.createElement("img");
bgImage.classList.add("background");
bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;