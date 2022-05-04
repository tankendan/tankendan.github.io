'use strict'

{
  // profile
  const pro = document.querySelector('.pic img');

  setTimeout(() => {
    pro.classList.remove('hidden');
  }, 4000);

  // info
  const name = document.querySelector('.name img');

  setTimeout(() => {
    name.classList.remove('hidden');
  }, 5000);

  // skill
  const list = document.querySelector('.list img');
  
  setTimeout(() => {
    list.classList.remove('hidden');
  }, 6000);
}