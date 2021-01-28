/*
JS - linguagem de script e multiplataforma. Roda no lado do cliente (browser)
e iterage com o HTML
DOM - modelo de padrão e interface que define propriedades, metódos e eventos dos
elementos da página
*/
function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

function clicou() {
    // alert("obrigado por clicar");
    // abri uma nova janela
    console.log(document.getElementById("agradecimento"));
    // muda a janela
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!!</b>";
}

function trocar(){
    // alert("trocar texto");
    document.getElementById("mousemove").innerHTML = "novo texto";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocarGenerico(elemento){
    elemento.innerHTML = "Trocar Genérico";
}

function voltarGenerico(elemento){
    elemento.innerHTML = "Passe o mouse aqui Genérico";
}


function redirecionar() {
    window.open("https://d3js.org/");
    window.location.href = "https://oestatistico.com.br/";
}

function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
         validar = false;
    }
    return validar;
}

var nome = "Ricardo";
var idade = 46;
//alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade);
//var time = prompt("Pra qual time você torce?");
var time = "palmeiras";
console.log(time.toUpperCase());
var lista = ["maça","pera", "laranja"];
console.log(lista);
console.log(lista[2]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista);
console.log("Dicionário");
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);

console.log("Lista de Dicionario");
var frutas = [{nome: "uva",cor:"roxa"},{nome:"maçã",cor:"vermelha"}];
console.log(frutas);
console.log(frutas[1]);
console.log("Cor da primeira fruta da lista: " + frutas[0].cor);

console.log("Estruturas de Condicional");
var idade = prompt("Qual sua idade? " );
if (idade >= 21) {
    alert("Maior de Idade!!!")
} else {
    alert("Menor de idade");
}


console.log("Estrutura de Repetição - while");
var count = 0;
while (count <= 5 ) {
    console.log(count);
    count++;
}

console.log("Estrutura de Repetição - for");
for  (ct=0; ct <= 5; ct++ ) {
    console.log(ct);
}

console.log("DATAS");
var d = new Date();
console.log(d.getMonth()); // sempre começa no 0
console.log(d.getMinutes());
console.log(d.getDay());

console.log("Funções de Usuário");
console.log(soma(5,2));

console.log(setReplace("Santos campeão!!!", "Santos", "Palmeiras"));
// atentar ao escopo da variavel (local/global)
console.log("A idade é valida? " + validaIdade(idade));
