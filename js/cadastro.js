

let btn = document.querySelector('#verSenha')
let btnConfirmSenha = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//verifica o nome
nome.addEventListener('keyup' , () => {
  if(nome.value.length <= 2 ){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  }else{
    labelNome.setAttribute('style' , 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

//verifica o usuario
usuario.addEventListener('keyup' , () => {
  if(usuario.value.length <= 4 ){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  }else{    
    labelUsuario.setAttribute('style' , 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

//verifica a senha
senha.addEventListener('keyup' , () => {
  if(senha.value.length <= 5 ){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  }else{
    labelSenha.setAttribute('style' , 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

//verifica o confirmação de senha
confirmSenha.addEventListener('keyup' , () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  }else{
    labelConfirmSenha.setAttribute('style' , 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})


//validando o cadastro
function cadastrar() {
  if(validNome && validUsuario && validSenha && validConfirmSenha){
  
    //Json.parse transforma em json
    //pegar o localStorege - listaUser ou array vazio
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || ' []')

    listaUser.push(
      { nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
    }
    )

    //criar um novo registro no localStorege
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Cadastrado Usuário...'
    msgError.setAttribute('style' , 'display: none')
    msgError.innerHTML = ''

    //espera 3seg. 
    setTimeout(()=>{
      window.location.href = '/login.html'
    },3000)

  }else{
    msgError.setAttribute('style' , 'display: block')
    msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
    

    // console.log(validNome)
    // console.log(validUsuario)
    // console.log(validSenha)
    // console.log(validConfirmSenha)
  }

}

//ver senha 
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



// ------------------------------------------------
// aula 3 - 28min 39segundo - localstorage
//https://www.youtube.com/watch?v=THQujIyE7Tg


//aula 4 
// https://www.youtube.com/watch?v=jze3TasX5DA&t=800s&ab_channel=ThiCode



