'use strict'

{
  // profile
  setTimeout(() => {
    const pic = document.getElementById('pic');
  
    function downPic(){
      pic.classList.remove('hidden');
    }
    const picObserver = new IntersectionObserver(downPic);
    picObserver.observe(pic)
  }, 3000);


  // info
  setTimeout(() => {
    const list = document.getElementById('list');
  
    function upList(){
      list.classList.remove('hidden');
    }
    const listObserver = new IntersectionObserver(upList);
    listObserver.observe(list);
  }, 3000);
}