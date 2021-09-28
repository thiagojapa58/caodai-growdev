var nome = "Thiago - Aluno Growdev";
var cargo = "Estudante - developer";

var nomeHTml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHTml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos() {
    console.log("Cilcou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("Cilcou no botão sobre");
    texto2.style.display = "none";
    texto1.style.display = "block";
}

colocarNomeNoHtml(nome);
colocarNomeNoHtml(cargo);