// Selecionando o botão e o elemento de contador no HTML
var botao = document.getElementById("botaoContador");
var contadorElemento = document.getElementById("contador");

// Inicializando a variável de contador
var contador = 0;

// Adicionando um ouvinte de evento de clique ao botão
botao.addEventListener("click", function() {
    // Incrementando o contador
    contador++;
    // Atualizando o texto do elemento de contador com o novo valor
    contadorElemento.textContent = "Número de cliques: " + contador;
});
