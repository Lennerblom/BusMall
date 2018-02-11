'use strict';

ImageGetter.allPics = [];
var totalClicks = 0;

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
for(var i = 0; i < ImageGetter.length; i++){
  var imageName = [ImageGetter.name[i]];
}
console.log(imageName);

var img1El = document.getElementById('pic1');
var img2El = document.getElementById('pic2');
var img3El = document.getElementById('pic3');


//GLOBAL RANDOM NUMBER GENERATOR
function randomIndex() {
  var ranNum = Math.floor(Math.random() * ImageGetter.allPics.length);
  return ranNum;
}
function randomPic() {
//LOCAL RANDOM 1ST, 2ND, 3RD
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

  var olEl = document.getElementById('researchLog');
  var liOneEl = document.createElement('li');
  var liTwoEl = document.createElement('li');
  var liThreeEl = document.createElement('li');

  //SETTING RANDOM IMAGES TO DISPLAY AND ADDING COUNTER
  img1El.src = ImageGetter.allPics[randNum1].filepath;
  liOneEl = ImageGetter.allPics[randNum1].name;
  //olEl.appendChild(liOneEl);
  totalClicks = ImageGetter.allPics[randNum1].clicks++;
  console.log(img1El.src);
  console.log(liOneEl);
  console.log(totalClicks);

  img2El.src = ImageGetter.allPics[randNum2].filepath;
  liTwoEl = ImageGetter.allPics[randNum2].name;
  totalClicks = ImageGetter.allPics[randNum2].clicks++;
  console.log(img2El.src);
  console.log(liTwoEl);
  console.log(totalClicks);

  img3El.src = ImageGetter.allPics[randNum3].filepath;
  liThreeEl = ImageGetter.allPics[randNum3].name;
  totalClicks = ImageGetter.allPics[randNum3].clicks++;
  console.log(img3El.src);
  console.log(liThreeEl);
  console.log(totalClicks);

  //for(var i = 0; i < 25; i++) {
  ImageGetter.clicks = parseInt(ImageGetter.clicks++);
  console.log(ImageGetter.clicks);
  //}
}
randomPic();

img1El.addEventListener('click', randomPic);
img2El.addEventListener('click', randomPic);
img3El.addEventListener('click', randomPic);

totalClicks += ImageGetter.clicks;

if(totalClicks >= 25) {
  img1El.removeEventListener('click', randomPic);
  img2El.removeEventListener('click', randomPic);
  img3El.removeEventListener('click', randomPic);
}
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