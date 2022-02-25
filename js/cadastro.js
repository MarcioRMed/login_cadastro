
//ver senha 

let btn = document.querySelector('#verSenha')
let btnConfirmSenha = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')


nome.addEventListener('keyup' , () => {
  if(nome.value.length <= 2 ){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
  }else{
    labelNome.setAttribute('style' , 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
  }
})

usuario.addEventListener('keyup' , () => {
  if(usuario.value.length <= 4 ){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
  }else{
    labelUsuario.setAttribute('style' , 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    nome.setAttribute('style', 'border-color: green')
  }
})

senha.addEventListener('keyup' , () => {
  if(senha.value.length <= 5 ){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
  }else{
    labelSenha.setAttribute('style' , 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
  }
})


confirmSenha.addEventListener('keyup' , () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
  }else{
    labelConfirmSenha.setAttribute('style' , 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
  }
})




function cadastrar(){
  


}





btn.addEventListener('click', ()=>{ 

  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type' , 'password')
  }
})

// confirm senha

btnConfirmSenha.addEventListener('click', ()=>{  

  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  }else{
    inputConfirmSenha.setAttribute('type' , 'password')
  }
})