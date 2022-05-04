'use strict';

{
    // anim
  const svg = document.getElementById('anime');

  const svgItem = bodymovin.loadAnimation({
    wrapper: svg,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets8.lottiefiles.com/packages/lf20_j2d6owpx.json'
  });


  const li = document.querySelectorAll('li');
  for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
      this.classList.toggle('appear');
    });
  }
}