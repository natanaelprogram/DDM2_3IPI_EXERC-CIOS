Função Nomeada:
Uma função nomeada é uma função que possui um nome específico.

function saudacao() {
    console.log("Olá! Bem-vindo à nossa página.");
}

saudacao(); // Chamando a função

Função Nomeada com Argumento:

function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado); // Saída: 8


Função com Contras:

var multiplicacao = new Function('a', 'b', 'return a * b');

var resultado = multiplicacao(5, 3);
console.log(resultado); // Saída: 15



Função Literal (Variável):

var divisao = function(a, b) {
    return a / b;
};

var resultado = divisao(10, 2);
console.log(resultado); // Saída: 5



Função de Flecha (Funções de seta):
As funções de seta são uma forma mais concisa de escrever

var quadrado = (x) => {
    return x * x;
};

console.log(quadrado(4)); // Saída: 16




