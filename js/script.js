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
let contatore = 0;
// vettore immagini preview active 
const itemsPreview = document.getElementsByClassName('item-mini');

// stampa div innerHTML
for (let i = 0; i < images.length; i++) {

   const item = document.createElement('div');
   sliderLeft.append(item);
   item.className = 'item';

   // il primo elemento avra la classe active di deafult
   if (i === contatore) {
      item.classList.add('active');
      itemsPreview[contatore].classList.add('active');
   }

   item.innerHTML = `
      <img src="${images[i]}" alt="">
      <div class="text-over-img">
         <h1>${title[i]}</h1>
         <p>${text[i]}</p>
      </div>
   `;

   console.log(item);
}

//********** */ carosello by clicking ********
// costanti e vettore item
const items = document.getElementsByClassName('item');

console.log('items',items);

const upArrow = document.getElementById('up_arrow');
const downArrow = document.getElementById('down_arrow');

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

// evento click freccia in giú
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