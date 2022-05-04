'use strict';

{
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const ul = document.querySelector('.topic ul');
  const slides = ul.children;
  let currentIndex = 0;


  function checkBtn (){
    left.classList.remove('hidden');
    right.classList.remove('hidden');

    if(currentIndex === 0){
      left.classList.add('hidden');
    }else if(currentIndex === slides.length - 1){
      right.classList.add('hidden');
    }
  }


  checkBtn();

  right.addEventListener('click', () => {
    currentIndex++;
    checkBtn();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  left.addEventListener('click', () => {
    currentIndex--;
    checkBtn();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  const open = document.getElementById('open');
  const cls = document.getElementById('cls');
  const menu = document.querySelector('.menu');

  open.addEventListener('click', () => {
    menu.classList.remove('hidden');
    open.classList.add('hidden');
    cls.classList.remove('hidden');
  })
  cls.addEventListener('click', () => {
    menu.classList.add('hidden');
    open.classList.remove('hidden');
    cls.classList.add('hidden');
  })
}