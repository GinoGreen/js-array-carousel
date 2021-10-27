// Vettori
const items = [
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

for (let i = 0; i < items.length; i++) {

   const item = document.createElement('div');
   sliderLeft.append(item);
   item.className = 'item';

   // il primo elemento avra la classe active di deafult
   if (i === contatore) {
      item.classList.add('active');
   }

   item.innerHTML = `
      <img src="${items[i]}" alt="">
      <div class="text-over-img">
         <h1>${title[i]}</h1>
         <p>${text[i]}</p>
      </div>
   `;
   console.log(item);
}