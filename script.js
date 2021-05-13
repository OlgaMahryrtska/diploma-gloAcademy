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
 const closeModal=()=>{
  modal.style.display="none";
   modalOverlay.style.display='none'
 }
 modalClose.addEventListener('click',closeModal)
 modalOverlay.addEventListener('click',closeModal)

 const links = document.querySelectorAll('a[href^="#"]');
  for(let elems of links){
  elems.addEventListener('click', (e)=>{
    e.preventDefault();    
    const id =elems.getAttribute('href');  
    document.querySelector(id).scrollIntoView({
      behavior:'smooth',
      block: 'start'

    })
    
  })
}



});

