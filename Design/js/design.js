'use strict';

{
 // anim
  const svg = document.getElementById('svg');

  const svgItem = bodymovin.loadAnimation({
    wrapper: svg,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_mjr11zfo.json'
  });
  

  // box
  const firstContainer = document.getElementById('box1');
  const secondContainer = document.getElementById('box2');
  const thirdContainer = document.getElementById('box3');

  // btn
  const firstBtn = document.getElementById('btn1');
  const secondBtn = document.getElementById('btn2');
  const thirdBtn = document.getElementById('btn3');

  // inside
  const inside1 = document.getElementById('inside1');
  const inside2 = document.getElementById('inside2');
  const inside3 = document.getElementById('inside3');


  // first
  const firstItem = bodymovin.loadAnimation({
    wrapper: firstContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_Qj7TCg.json'
  })
  
  firstBtn.addEventListener('click', () => {
    if(firstBtn.classList.contains('open')){
      firstBtn.classList.remove('open');
      inside1.classList.remove('appear');
      setTimeout(() => {
        firstItem.setDirection(-1);
        firstItem.play();
      }, 400);
      setTimeout(() => {
        firstBtn.textContent = "Open!";
      }, 2000);
    }else{
      firstBtn.classList.add('open');
      firstItem.setDirection(1);
      firstItem.play();
      setTimeout(() => {
        inside1.classList.add('appear');
      }, 1500);
      setTimeout(() => {
        firstBtn.textContent = 'Close';
      }, 2000);
    }
  });


  // second
  const secondItem = bodymovin.loadAnimation({
    wrapper: secondContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_Qj7TCg.json'
  })

  secondBtn.addEventListener('click', () => {
    if(secondBtn.classList.contains('open')){
      secondBtn.classList.remove('open');
      inside2.classList.remove('appear');
      setTimeout(() => {
        secondItem.setDirection(-1);
        secondItem.play();
      }, 400);
      setTimeout(() => {
        secondBtn.textContent = "Open!";
      }, 2000);
    }else{
      secondBtn.classList.add('open');
      secondItem.setDirection(1);
      secondItem.play();
      setTimeout(() => {
        inside2.classList.add('appear');
      }, 1500);
      setTimeout(() => {
        secondBtn.textContent = 'Close';
      }, 2000);
    }
  });


  // third
  const thirdItem = bodymovin.loadAnimation({
    wrapper: thirdContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_Qj7TCg.json'
  })

  thirdBtn.addEventListener('click', () => {
    if(thirdBtn.classList.contains('open')){
      thirdBtn.classList.remove('open');
      inside3.classList.remove('appear');
      setTimeout(() => {
        thirdItem.setDirection(-1);
        thirdItem.play();
      }, 400);
      setTimeout(() => {
        thirdBtn.textContent = "Open!";
      }, 2000);
    }else{
      thirdBtn.classList.add('open');
      thirdItem.setDirection(1);
      thirdItem.play();
      setTimeout(() => {
        inside3.classList.add('appear');
      }, 1500);
      setTimeout(() => {
        thirdBtn.textContent = 'Close';
      }, 2000);
    }
  });

  // left right
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const ul = document.querySelector('.list ul');
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

  // responsive
  const mediaQuery = window.matchMedia('(min-width: 414px) and (max-width: 1023px)')
  const li = document.querySelectorAll('li');

  if(mediaQuery.matches){

    function callback(entries){
      if(!entries[0].isIntersecting){
        return;
      }

      setTimeout(() => {
        li[0].classList.add('appear');
      }, 1500);
      setTimeout(() => {
        li[1].classList.add('appear');
      }, 2000);
      setTimeout(() => {
        li[2].classList.add('appear');
      }, 2500);
    }

    const options = {
      threshold: 1,
    }
    
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ul);
  }

  const iosQuery = window.matchMedia('(min-width: 320px) and (max-width: 413px)')

  if(iosQuery.matches){

    function callback(entries){
      if(!entries[0].isIntersecting){
        return;
      }
        li[0].classList.add('appear');
        li[1].classList.add('appear');
        li[2].classList.add('appear');
    }

    const options = {
      threshold: 1,
    }
    
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ul);
  }

}