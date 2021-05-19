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

export default slider;