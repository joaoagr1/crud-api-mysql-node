

loginCadastrado = "admin";
senhaCadastrada = "admin";

botao.addEventListener("click",function(){
    event.preventDefault();
    console.log("sucess");

botao = document.querySelector("#botao");
login = document.querySelector("#username");
senha = document.querySelector("#password");
})

if (login == loginCadastrado && senha == senhaCadastrada) {
    console.log("sucesso")
    
}