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
export default checkInputs;