window.addEventListener("DOMContentLoaded", () => {

const modal = document.querySelector('.modal-callback'),
      modalOverlay = document.querySelector('.modal-overlay'),
      modalClose = document.querySelector('.modal-close'),
      callbackBtn = document.querySelectorAll('.callback-btn');
      

  callbackBtn.forEach(elem => {
  elem.addEventListener('click', (event)=>{
    event.preventDefault();
    modal.style.display='block'
    modalOverlay.style.display='block'
  })
   
 });
 modalClose.addEventListener('click',()=>{
   modal.style.display="none";
   modalOverlay.style.display='none'
 })
 modalOverlay.addEventListener('click', ()=>{
   modal.style.display='none';
   modalOverlay.style.display='none'
 })





});

