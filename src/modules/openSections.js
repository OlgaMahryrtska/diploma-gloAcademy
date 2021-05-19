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

 export  default goToSections;