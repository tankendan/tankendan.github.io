'use strict'
{
  // header
  // bar
  const openBar = document.getElementById('openBar');
  const clsBar = document.getElementById('clsBar')
  const nav = document.querySelector('header nav');

  openBar.addEventListener('click', () => {
    nav.classList.remove('hidden');
    openBar.classList.add('hidden');
    clsBar.classList.remove('hidden');
  });
  clsBar.addEventListener('click', () => {
    nav.classList.add('hidden');
    openBar.classList.remove('hidden');
    clsBar.classList.add('hidden');
  });

  // work
  const ul = document.querySelector('.work .container ul');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const comment1 = document.getElementById('portlink');
  const comment2 = document.getElementById('designlink');
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
    comment1.classList.add('hidden');
    comment2.classList.remove('hidden');
    });
    
  left.addEventListener('click', () => {
    currentIndex--;
    checkBtn();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    comment2.classList.add('hidden');
    comment1.classList.remove('hidden');
    });



    // portfolio
    // svg
}