  'use strict';
  
  import scrollUp from './modules/scrollUp';
  import showAccordeon from './modules/accordeon';
  import sendForm from './modules/sendForm';
  import checkInputs from './modules/checkInputs';
  import slider from './modules/slider';
  import goToSections from './modules/openSections';


  
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
 
 goToSections();
 

// button scroll up

scrollUp();

//accordion

 
showAccordeon();
// send form


sendForm()
// check 

checkInputs();


 

//slider

 slider();




