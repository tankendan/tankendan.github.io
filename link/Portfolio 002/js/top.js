'use strict'
{
  // ダンボール
  const img = document.querySelector('.pic img');

  setTimeout(() => {
    img.classList.remove('hidden');
  }, 4000);

  // コメント
  const com = document.querySelector('.info img');
  setTimeout(() => {
    com.classList.remove('hidden');
  }, 5000);

  // menu

  const modal = document.getElementById('menu');
  const cls = document.getElementById('cls');
  img.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  cls.addEventListener('click', () => {
    modal.classList.add('hidden');
  })
  
}