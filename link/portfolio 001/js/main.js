'use strict'

{
  const btn = document.getElementById('cardboard');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');

  btn.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
  })
  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  })
  close.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  })
}