const images = [
  "1.jpg",
  "2.jpg",
  "4.jpg",
];
const grayimages = [
  "5.jpg",
  "6.jpg",
  "7.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.classList.add('background-image');
document.body.style.backgroundImage = `url('img/${chosenImage}')`;

const chosengrayImage = grayimages[Math.floor(Math.random() * grayimages.length)];