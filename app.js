'use strict';

ImageGetter.allPics = [];

function ImageGetter(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.shown = 0;
  ImageGetter.allPics.push(this);
}

new ImageGetter('bag', 'img/bag.jpg');
new ImageGetter('banana', 'img/banana.jpg');
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
new ImageGetter('wine', 'img/wine-glass.jpg');

console.log(ImageGetter.allPics.length);

var img1El = document.getElementById('pic1');
var img2El = document.getElementById('pic2');
var img3El = document.getElementById('pic3');

function randomPic() {

  function randomIndex() {
    var ranNum = Math.floor(Math.random() * ImageGetter.allPics.length);
    return ranNum;
  }

  var randNum1 = randomIndex();
  console.log(randNum1);

  var randNum2 = randomIndex();
  while(randNum1 === randNum2) {
    randNum2 = randomIndex();
  }
  console.log(randNum2);

  var randNum3 = randomIndex();
  while(randNum2 === randNum3 || randNum1 === randNum3) {
    randNum3 = randomIndex();
  }
  console.log(randNum3);

  img1El.src = ImageGetter.allPics[randNum1].filepath;
  console.log(img1El.src);

  img2El.src = ImageGetter.allPics[randNum2].filepath;
  console.log(img2El.src);

  img3El.src = ImageGetter.allPics[randNum3].filepath;
  console.log(img3El.src);
}
randomPic();

img1El.addEventListener('click', randomPic);
img2El.addEventListener('click', randomPic);
img3El.addEventListener('click', randomPic);

/*ImageGetter.clicks += 1;
  //console.log(randomIndex);
  img2El.src = ImageGetter.allPics[randomIndex2].filepath;
  if(img2El.src === img1El.src) {
    img2El.src = ImageGetter.allPics[randomIndex3].filepath;
    console.log(img2El.src);
    //console.log(randomIndex);
  }
  img3El.src = ImageGetter.allPics[Math.floor(Math.random() * ImageGetter.allPics.length -1)].filepath;
  if(img3El.src === img1El.src || img3El.src === img2El.src) {
    img3El.src = ImageGetter.allPics[Math.floor(Math.random() * ImageGetter.allPics.length -1)].filepath;
    console.log(img3El.src);
    //console.log(randomIndex);
  }
}
randomPic();
console.log(ImageGetter.clicks);

//function timesClicked() {
 







function randomPic2() {
  var randomIndex = Math.floor(Math.random() * ImageGetter.allPics.length);
  img2El.src = ImageGetter.allPics[randomIndex].filepath;
}
randomPic2();
function randomPic3() {
  var randomIndex = Math.floor(Math.random() * ImageGetter.allPics.length);
  img3El.src = ImageGetter.allPics[randomIndex].filepath;
}
*/