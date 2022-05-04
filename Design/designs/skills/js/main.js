'use strict';

{
      // anim
    const svg = document.getElementById('anim');

    const svgItem = bodymovin.loadAnimation({
      wrapper: svg,
      animType: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_nss1rfwu.json'
    });
}