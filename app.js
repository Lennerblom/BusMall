'use strict';

Product.imageName = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

Product.allPics = [];
Product.container = document.getElementById('imageContainer');
Product.pics = [document.getElementById('pic1'), document.getElementById('pic2'),document.getElementById('pic3')];
Product.justShown = [];
Product.tally = document.getElementById('researchLog');
Product.totalClicks = 0;


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath; //'img/' + name + '.jpg'; // || '.gif';
  this.clicks = 0;
  this.shown = 0;
  Product.allPics.push(this);
}
//for(var i = 0; i < Product.imageName.length; i++) {
//new Product(Product.imageName[i]);
//}
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine', 'img/wine-glass.jpg');

//console.log(Product.allPics.length);
//console.log(Product.allPics.name);//DOESN'T WORK
//for(var i = 0; i < Product.allPics.length; i++){
//var imageName = Product.name[i];
//}
//console.log(imageName);

// var imageName = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','tauntaun','unicorn','usb','water-can','wine'];


// for(var i = 0; i < imageName.length; i++){



//   var img1El = document.getElementById('pic1');
//   var img2El = document.getElementById('pic2');
//   var img3El = document.getElementById('pic3');

//GLOBAL RANDOM NUMBER GENERATOR
function randomIndex() {
  var ranNum = Math.floor(Math.random() * Product.allPics.length);
  return ranNum;
}


function displayPics() {
  var currentlyShowing = [];
  currentlyShowing[0] = randomIndex();
  while(Product.justShown.indexOf(currentlyShowing[0]) !== -1){
    console.error('duplicate, or in prior view! re run');
    currentlyShowing[0] = randomIndex();
  }
  console.log(currentlyShowing);
  currentlyShowing[1] = randomIndex();
  while(currentlyShowing[0] === currentlyShowing[1] || Product.justShown.indexOf(currentlyShowing[1]) !== -1) {
    console.error('duplicate, or in prior view! re run');
    currentlyShowing[1] = randomIndex();
  }
  currentlyShowing[2] = randomIndex();
  while(currentlyShowing[0] === currentlyShowing[2] || currentlyShowing[1] === currentlyShowing[2]|| Product.justShown.indexOf(currentlyShowing[2]) !== -1) {
    console.error('duplicate, or in prior view! re run');
    currentlyShowing[2] = randomIndex();
  }
  console.log(currentlyShowing);
  for(var i = 0; i < 3; i++) {
    Product.pics[i].id = Product.allPics[currentlyShowing[i]].name;
    Product.pics[i].src = Product.allPics[currentlyShowing[i]].filepath;
    Product.allPics[currentlyShowing[i]].shown += 1;
    Product.justShown[i] = currentlyShowing[i];
  }
}
function handleClick(event) {
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    showTally();
  }
  if (event.target.id === 'imageContainer') {
    return alert('Keep clicking till your done');
  }
  Product.totalClicks += 1;
  for(var i =0; i < Product.name.length; i++) {
    if(event.target.id === Product.allPics.name) {
      Product.allPics[i].clicks += 1;
      console.log(event.target.id + ' has ' + Product.allPics[i].clicks + ' votes in ' + Product.allPics[i] + ' views.');

    }
  }
}
displayPics();

function showTally() {
  for(var i = 0; Product.allPics.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.allPics[i].name + ' has ' + Product.allPics[i].clicks + ' votes in ' + Product.allPics[i] + ' views.';
    Product.tally.appendChild(liEl);
  }
}
//event listener
Product.container.addEventListener('click', handleClick);
displayPics();

var ctx = document.getElementById('chart').getContext('2d');

// var myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       datasets: [{
//           label: 'Number of Clicks',
//           data: 
//   options: {
//     scales: {
//       xAxes: [{
//         gridLines: {
//           offsetGridLines: true
//         }
//       }]
//     }
//   }

// });




















/*function randomPic() {
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
  olEl = document.getElementById('researchLog');
  liOneEl = document.createElement('li');
  //SETTING RANDOM IMAGES TO DISPLAY AND ADDING COUNTER
  img1El.src = Product.allPics[randNum1].filepath;
  liOneEl = Product.allPics[randNum1].name;
  //olEl.appendChild(liOneEl);
  imageName[randNum1];
  console.log(img1El.src);
  console.log(liOneEl);
  //console.log(imageName[randNum1]);//  duplicate
  clicks++;

  img2El.src = Product.allPics[randNum2].filepath;
  liTwoEl = Product.allPics[randNum2].name;
  totalClicks = Product.allPics[randNum2].clicks++;
  console.log(img2El.src);
  console.log(liTwoEl);
  console.log(totalClicks);
  clicks++;

  img3El.src = Product.allPics[randNum3].filepath;
  liThreeEl = Product.allPics[randNum3].name;
  totalClicks = Product.allPics[randNum3].clicks++;
  console.log(img3El.src);
  console.log(liThreeEl);
  console.log(totalClicks);
  clicks++;

  totalClicks += clicks;
  console.log(totalClicks);
  //for(var i = 0; i < 25; i++) {
  //Product.clicks = parseInt(Product.clicks++);
  //console.log(Product.clicks);
  //}
}
randomPic();
/*
Product.clicks = 0;
function clickCounter() {
  Product.clicks++;
  console.log(Product.clicks++);
}
*/
//clickCounter1();

//if(totalClicks >= 25) {
//img1El.addEventListener('click', randomPic);
//img2El.addEventListener('click', randomPic);
//img3El.addEventListener('click', randomPic);

//totalClicks += Product.clicks;
//}
//else {
// img1El.removeEventListener('click', randomPic);
//img2El.removeEventListener('click', randomPic);
//img3El.removeEventListener('click', randomPic);
//}
/*Product.clicks += 1;
  //console.log(randomIndex);
  img2El.src = Product.allPics[randomIndex2].filepath;
  if(img2El.src === img1El.src) {
    img2El.src = Product.allPics[randomIndex3].filepath;
    console.log(img2El.src);
    //console.log(randomIndex);
  }
  img3El.src = Product.allPics[Math.floor(Math.random() * Product.allPics.length -1)].filepath;
  if(img3El.src === img1El.src || img3El.src === img2El.src) {
    img3El.src = Product.allPics[Math.floor(Math.random() * Product.allPics.length -1)].filepath;
    console.log(img3El.src);
    //console.log(randomIndex);
  }
}
randomPic();
console.log(Product.clicks);

//function timesClicked() {








function randomPic2() {
  var randomIndex = Math.floor(Math.random() * Product.allPics.length);
  img2El.src = Product.allPics[randomIndex].filepath;
}
randomPic2();
function randomPic3() {
  var randomIndex = Math.floor(Math.random() * Product.allPics.length);
  img3El.src = Product.allPics[randomIndex].filepath;
}
*/