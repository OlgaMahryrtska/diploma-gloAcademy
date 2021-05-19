
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
export default scrollUp;