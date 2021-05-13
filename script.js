window.addEventListener("DOMContentLoaded", () => {

const modal = document.querySelector('.modal-callback'),
      modalOverlay = document.querySelector('.modal-overlay'),
      modalClose = document.querySelector('.modal-close'),
      callbackBtn = document.querySelectorAll('.callback-btn'),
      btnServices = document.querySelector('.button-services');       
      

  callbackBtn.forEach(elem => {
  elem.addEventListener('click', (event)=>{
    event.preventDefault();
    openModal();   
  })
   
 });
   const closeModal=()=>{
    modal.style.display="none";
    modalOverlay.style.display='none'
 }
 const openModal =()=>{
    modal.style.display='block'
    modalOverlay.style.display='block'
 }
 btnServices.addEventListener('click', openModal);
 modalClose.addEventListener('click',closeModal);
 modalOverlay.addEventListener('click',closeModal);

 // open sections using menu
 const goToSections =()=>{
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
 }
 goToSections();
 

// button scroll up
const scrollUp =()=>{
  const scrollBtn = document.querySelector('.up');
  scrollBtn.style.display ='none';

  window.onscroll = function(){ hideScrollBtn()}
 const hideScrollBtn =()=>{
  if(document.body.scrollTop >60 || document.documentElement.scrollTop >60){
    scrollBtn.style.display="block"
  }else{
    scrollBtn.style.display='none'
  }
}
    scrollBtn.addEventListener('click', (e)=>{
    e.preventDefault();   
    document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
  })

  
}
scrollUp();


});

