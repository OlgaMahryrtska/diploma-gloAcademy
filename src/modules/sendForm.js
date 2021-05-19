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
 export default sendForm;