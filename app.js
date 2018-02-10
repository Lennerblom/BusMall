'use strict';

ImageGetter.allPics = [];

function ImageGetter(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  ImageGetter.allPics.push(this);
}

new ImageGetter('bag', 'img/bag.jpg');
new ImageGetter('banana', 'img/banang.jpg');
new ImageGetter('bathroom', 'img/bathroom.jpg');
new ImageGetter('boots', 'img/boots.jpg');
new ImageGetter('breakfast', 'img/breakfast.jpg');
new ImageGetter('bubblegum', 'img/bubblegum.jpg');
new ImageGetter('chair', 'img/chair.jpg');
new ImageGetter('cthulhu', 'img/cthulhu.jpg');
new ImageGetter('dog-duck', 'img/dog-duck.jpg');
new ImageGetter('dragon', 'img/dragon.jpg');
new ImageGetter('pen', 'img/pen.jpg');
new ImageGetter('pet-sweep', 'img/pet-sweep.jpg');
new ImageGetter('tauntaun', 'img/tauntaun.jpg');
new ImageGetter('unicorn', 'img/unicorn.jpg');
new ImageGetter('usb', 'img/usb.gif');
new ImageGetter('water-can', 'img/water-can.jpg');
new ImageGetter('wine', 'img/wine.jpg');

var img1El = document.getElementById('pic1');
var img2El = document.getElementById('pic2');
var img3El = document.getElementById('pic3');

img1El.addEventListener('click', randomPic);
img2El.addEventListener('click', randomPic);
img3El.addEventListener('click', randomPic);


function randomPic() {
  var randomIndex = Math.floor(Math.random() * ImageGetter.allPics.length -1);
  img1El.src = ImageGetter.allPics[randomIndex].filepath;
  img2El.src = ImageGetter.allPics[randomIndex].filepath;
  if(img2El.src === img1El.src) {
    img2El.src = ImageGetter.allPics[randomIndex].filepath;
  }
  img3El.src = ImageGetter.allPics[randomIndex].filepath;
  if(img3El.src === img1El.src || img3El.src === img2El.src) {
    img3El.src = ImageGetter.allPics[randomIndex].filepath;
  }
}
randomPic();
/*function randomPic2() {
  var randomIndex = Math.floor(Math.random() * ImageGetter.allPics.length);
  img2El.src = ImageGetter.allPics[randomIndex].filepath;
}
randomPic2();
function randomPic3() {
  var randomIndex = Math.floor(Math.random() * ImageGetter.allPics.length);
  img3El.src = ImageGetter.allPics[randomIndex].filepath;
}
randomPic3();
*/