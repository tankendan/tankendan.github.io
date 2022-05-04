'use strict';

{
  // anim
  const svg = document.getElementById('svg');

  const svgItem = bodymovin.loadAnimation({
    wrapper: svg,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/packages/lf20_7pzyukmv.json'
  });


  // carousel
  const firstImgs = document.querySelectorAll('.list .container .first img');
  let firstIndex = 0;

  setInterval(() => {
    firstImgs[firstIndex].classList.remove('current');
    firstIndex++;
    if(firstIndex === firstImgs.length){
      firstIndex = 0;
      firstImgs[firstIndex].classList.add('current');
    }else{
      firstImgs[firstIndex].classList.add('current');
    }
  }, 2000);

  const secondImgs = document.querySelectorAll('.list .container .second img');
  let secondIndex = 0;

  setInterval(() => {
    secondImgs[secondIndex].classList.remove('current');
    secondIndex++;
    if(secondIndex === secondImgs.length){
      secondIndex = 0;
      secondImgs[secondIndex].classList.add('current');
    }else{
      secondImgs[secondIndex].classList.add('current');
    }
  }, 3000);

  // firstovserve
  const ful = document.querySelector('.first ul');

  function firstback(fentris){
    if(!fentris[0].isIntersecting){
      return;
    }
    console.log('fire');
    ful.classList.add('appear');
  }

  const foptions = {
    threshold: 1,
  }

  const firstObserver = new IntersectionObserver(firstback, foptions);
  firstObserver.observe(ful);

  // secondovserve
  const sul = document.querySelector('.second ul');

  function secondback(sentries){
    if(!sentries[0].isIntersecting){
      return;
    }
    console.log('fire');
    sul.classList.add('appear');
  }

  const soptions = {
    threshold: 1,
  }

  const secondObserver = new IntersectionObserver(secondback, soptions);
  secondObserver.observe(sul);

}