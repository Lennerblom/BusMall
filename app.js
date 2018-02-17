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
  this.filepath = filepath;
  this.clicks = 0;
  this.shown = 0;
  Product.allPics.push(this);
}

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
    //Product.allPics[currentlyShowing[i]].clicks += 1;
    Product.justShown[i] = currentlyShowing[i];
  }
}
function handleClick(event) {
  if (event.target.id === 'imageContainer') {
    return alert('Keep clicking till your done');
  }
  Product.totalClicks ++;
  for(var i =0; i < Product.imageName.length; i++) {
    if(event.target.id === Product.allPics[i].name) {
      Product.allPics[i].clicks ++;
      console.log(event.target.id + ' has ' + Product.allPics[i].clicks + ' votes in ' + Product.allPics[i] + ' views.');
    }
  }
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    showTally();
  }
  displayPics();
}
// function showTally() {
//   for(var i = 0; Product.allPics.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = Product.allPics[i].name + ' has ' + Product.allPics[i].clicks + ' votes in ' + Product.allPics[i].shown + ' views.';
//     Product.tally.appendChild(liEl);
//   }
// }

Product.container.addEventListener('click', handleClick);
displayPics();

var clicks = [];
for(var i = 0; i < Product.allPics.length; i++) {
  clicks.push(Product.allPics[i].clicks);
}

var shown = [];
for(var j = 0; j < Product.allPics.length; j++) {
  shown.push(Product.allPics[j].shown);
}

var itemName = [];
for(var k = 0; k < Product.allPics.length; k++) {
  itemName.push(Product.allPics[k].name);
}
var ctx = document.getElementById('chart').getContext('2d');

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [itemName],
    datasets: [{
      label: 'Number of Clicks',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: clicks,
    },
    { label: 'Times Shown',
      data: shown,

    }]
  }
});
Product.tally.appendChild(ctx);
myBarChart;