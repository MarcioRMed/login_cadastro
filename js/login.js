
// Ver senha

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {

  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar() {
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')

  let listaUser = []


  //pegar o localstorage
  let userValid = {
    nome: 'null',
    user: 'null',
    senha: 'null'
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  console.log('localStorage' ,listaUser)

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
      
    }
    })

    console.log('forEach - cadastrado' ,userValid)

    if(usuario.value == userValid.user && senha.value == userValid.senha){
      
      window.location.href = 'main.html'

          //cria um numero aletorio de hexdecimal substring - conta apartir 2 casa
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

      
      localStorage.setItem('token', token)

      console.log(token)

      localStorage.setItem('userLogado', JSON.stringify(userValid))




    }else{
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')

      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')

      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuario ou senha incorretos'
      usuario.focus()

    }


    
  }

  