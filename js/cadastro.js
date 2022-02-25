
//ver senha 

let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{  

  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type' , 'password')
  }
})


// confirm senha


let btnConfirmSenha = document.querySelector('#verConfirmSenha')

btnConfirmSenha.addEventListener('click', ()=>{  

  let inputConfirmSenha = document.querySelector('#ConfirmSenha')

  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  }else{
    inputConfirmSenha.setAttribute('type' , 'password')
  }
})