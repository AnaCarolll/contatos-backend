
const emailEsperado = "eu@gmail.com.br";
const senhaEsperada = "12345";
//capturar todos os elemestos de interesse na página
const form = document.getElementById("form");

const inputEmail = document.querySelector("#form input[type=email]");
inputEmail.value = emailEsperado;

const inputSenha = document.querySelector("#form input[type=password]");
inputSenha.style.backgraudcolor = "red"

const buttonEntrar = document.querySelector("#form button[type=submit]");
buttonEntrar.innerHTML = "start :)";

form.addEventListener(
    'submit',
    (evento) => {
        // inibir o envio do formulario
        evento.preventDefault()

        //Verificar se o email digitado é igual ao emailEsperado
        if(inputEmail.value != emailEsperado){
            alert("Falha no login");
            return
        }
        // Verificar se a senha digitada é igual senhaEsperada

        //Se estiver ok, emitir mensagem de sucesso
        alert("login deu certo!")
    }
);
let link = document.getElementById("link");
link.addEventListener(
  'click',
  evt => {
    
  }
)

//adicionar um escutador de evento
//inputEmail.addEventListener(
  //  'blur',
    //() => {
  //if(inputSenha.value == "" || inputEmail.value == "")
  //alert("Ops, campo vazio, \npreencha-o!")
    //});

//#label{
 ///   boder: solid 3px pink;
//};
//input.style.color = "black"