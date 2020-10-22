'use strict';

const booksCard = document.querySelectorAll('.book');

booksCard[0].before(booksCard[1]);
booksCard[5].after(booksCard[2]);
booksCard[4].after(booksCard[3]);

let bgImage = document.querySelector('body');
bgImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let allBooksTitles = document.querySelectorAll('.book > h2');
allBooksTitles[2].textContent = 'Книга 3. this и Прототипы Объектов';
allBooksTitles[2].setAttribute('style', 'color: darkkhaki;');

let adv = document.querySelector('.adv');
adv.remove();

let itemsBook2 = booksCard[0].querySelectorAll('ul > li');
itemsBook2[2].before(itemsBook2[3]);
itemsBook2[2].before(itemsBook2[6]);
itemsBook2[4].before(itemsBook2[8]);
itemsBook2[10].before(itemsBook2[2]);

let itemsBook5 = booksCard[5].querySelectorAll('ul > li');
itemsBook5[3].before(itemsBook5[9]);
itemsBook5[5].after(itemsBook5[2]);
itemsBook5[7].after(itemsBook5[5]);

let itemsBook6 = booksCard[2].querySelectorAll('ul > li');

let ulBook6 = booksCard[2].querySelector('ul');
ulBook6.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');

let newItemsBook6 = booksCard[2].querySelectorAll('ul > li');
newItemsBook6[9].before(newItemsBook6[10]);
