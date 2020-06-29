const email=document.querySelector("#email");
const btn= document.querySelector('form').querySelector('input[type="submit"]');
const erroMessage=document.querySelector('small')
const checkEmail=email=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
const callBackFunction=e=>{
  const emailValue= email.value;
  if(!(checkEmail(emailValue))|| emailValue==''){
    email.classList.add('error');
    erroMessage.style.display='inline';
    e.preventDefault();
  }
  else{
    email.classList.remove('error');
    erroMessage.style.display='none'; 
  }
}
btn.addEventListener('mouseover',callBackFunction)
btn.addEventListener('click',callBackFunction)
