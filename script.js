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

//accordion
const showAccordeon =()=>{
   let accordeon = document.querySelector('.accordeon'); 
   let accItems = accordeon.querySelectorAll('.element');  
   
  for(let i=0;i< accItems.length; i++){    
     accItems[i].addEventListener('click', (e)=>{
       e.preventDefault();
            accItems.forEach((elems)=>{
              if(elems.nextElementSibling && elems.nextElementSibling.className==='element active'){
               elems.nextElementSibling.classList.remove('active');
               elems.nextElementSibling.children[1].style.display='none'
              }
            })

         accItems[i].classList.toggle('active');
        if(accItems[i].className ==='element active'){
        
          let accElement =accItems[i].children[1];
            accElement.style.display='block'; 
        }else{
            let accElement =accItems[i].children[1];
           accElement.style.display='none'; 
        }              
      
     })
   }
 }
 
showAccordeon();
// send form
const sendForm =()=>{
  const errorMes = 'Произошла ошибка...',
  loadMessage = ' Загрузка...',
  successMes = ' Спасибо!Вам скоро перезвонят!';
const forms = document.getElementsByTagName('form');
const statusMess = document.createElement('div');
statusMess.textContent ="";
statusMess.style.cssText="font-size:2rem; color:black";


for(let item of forms){
  item.addEventListener('submit', (e)=>{
    e.preventDefault();
    item.appendChild(statusMess);
    statusMess.textContent= loadMessage;
    const formData = new FormData(item);
    let body ={};
    for(let val of formData.entries()){
      body[val]=val[1];
    }
    postData(body)
    .then((response)=>{
      if(response.status !==200){
        throw new Error('status network is not 200');
      }
      statusMess.textContent=successMes;
      
    })
    .catch((error)=>{
      statusMess.textContent= errorMes;
      console.log(error)
    })
  })
}
  

}
const postData =(body)=>{
  return fetch('./server.php',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
}

sendForm()
// check 
const checkInputs =()=>{
  const tel = document.querySelectorAll('.tel');
const name = document.querySelectorAll('.name');
name.forEach((names)=>{
  names.addEventListener('input', (e)=>{
    e.preventDefault();
   names.value=names.value.replace(/[a-z]/gi, "");

  })
})
tel.forEach((phones)=>{
  phones.addEventListener('input', (e)=>{
    e.preventDefault();
  phones.value = phones.value.replace(/[^0-9\-+]/g, "")
  })
  
})

}
checkInputs();


 

//slider
const slider =()=>{
  const slide = document.querySelectorAll('.item'),
      slider = document.querySelector('.top-slider'),
       title = document.querySelectorAll('.big');
   
    
  let currentSlide = 0,
  interval;
  const prevSlide =(elem, index)=>{
    elem[index].style.display="none";
  }

  const NextSlide =(elem, index)=>{
    elem[index].style.display="block";

  }

  const autoPlaySlide =()=>{
    prevSlide(slide, currentSlide);
    currentSlide++;
    if(currentSlide >=slide.length){
      currentSlide =0;
    }
    NextSlide(slide, currentSlide);
  }
  const startSlide =(time=3000)=>{
    interval = setInterval(autoPlaySlide, time)
  }
 

 startSlide(3000)
  
}
 slider();
});



