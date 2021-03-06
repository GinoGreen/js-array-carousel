// Vettori
const images = [
   'img/01.jpg',
   'img/02.jpg',
   'img/03.jpg',
   'img/04.jpg',
   'img/05.jpg'
];

const title = [
   'Svezia',
   'Svizzera',
   'Gran Bretagna',
   'Germania',
   'Paradise'
];

const text = [
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
   'Lorem ipsum',
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');
let contatore = 0;
// vettore immagini preview active 
const itemsPreview = document.getElementsByClassName('item-mini');

// stampa div innerHTML
for (let i = 0; i < images.length; i++) {

   const item = document.createElement('div');
   const itemMini = document.createElement('div');
   sliderLeft.append(item);
   sliderRight.append(itemMini);
   item.className = 'item';
   itemMini.className = 'item-mini';

   // il primo elemento avra la classe active di deafult
   if (i === contatore) {
      item.classList.add('active');
      itemMini.classList.add('active');
      itemsPreview[contatore].classList.add('active');
   }

   item.innerHTML = `
      <img src="${images[i]}" alt="">
      <div class="text-over-img">
         <h1>${title[i]}</h1>
         <p>${text[i]}</p>
      </div>
   `;
   itemMini.innerHTML = ` <img src="${images[i]}" alt=""> `;

   console.log(item);
}



//********** */ carosello by clicking ********
// costanti e vettore item
const items = document.getElementsByClassName('item');

console.log('items',items);

const upArrow = document.createElement('div');
const downArrow = document.createElement('div');
upArrow.className = 'up_arrow';
downArrow.className = 'down_arrow';
upArrow.innerHTML = '&uarr;';
downArrow.innerHTML = '&darr;';
sliderRight.append(upArrow, downArrow);

// evento click freccia in su
upArrow.addEventListener('click', function() {
   
   items[contatore].classList.remove('active');
   itemsPreview[contatore].classList.remove('active');
   contatore--;

   if (contatore < 0) {
      contatore = items.length - 1;
   }

   console.log('contatore',contatore);

   items[contatore].classList.add('active');
   itemsPreview[contatore].classList.add('active');

   console.log('item selezionato con contatore', items[contatore]);

});

// evento click freccia in gi??
downArrow.addEventListener('click', function() {
   
   items[contatore].classList.remove('active');
   itemsPreview[contatore].classList.remove('active');
   contatore++;

   if (contatore > items.length - 1) {
      contatore = 0;
   }

   console.log('contatore',contatore);

   items[contatore].classList.add('active');
   itemsPreview[contatore].classList.add('active');

   console.log('item selezionato con contatore', items[contatore]);

});