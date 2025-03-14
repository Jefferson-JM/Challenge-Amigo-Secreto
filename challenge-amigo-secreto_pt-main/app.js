//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Alerta inicial ao carregar a página
alert("Por favor, insira um nome válido!");

// Lista de nomes
let listaAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    listaAmigos.push(nome);

    // Limpar o campo de texto
    inputNome.value = "";

    // Atualizar a lista exibida na tela
    atualizarLista();
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista para evitar duplicações

    listaAmigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        listaElement.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indexAleatorio];

    // Exibir o resultado na tela
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
