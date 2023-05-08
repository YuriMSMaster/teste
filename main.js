// array para armazenar os nomes
var nomes = [];

// função para adicionar um nome à lista de nomes
function adicionarNome() {
    // obter o nome digitado pelo usuário
    var novoNome = document.getElementById("novo-nome").value;
    
    // verificar se o nome é válido e adicioná-lo à lista de nomes
    if (novoNome) {
        nomes.push(novoNome);
        document.getElementById("novo-nome").value = "";
        
        // atualizar a tabela de nomes
        atualizarTabela();
    }
}

// função para remover um nome da lista de nomes
function removerNome(index) {
    // remover o nome do array de nomes
    nomes.splice(index, 1);
    
    // atualizar a tabela de nomes
    atualizarTabela();
}

// função para atualizar a tabela de nomes
function atualizarTabela() {
    // obter a tabela de nomes e limpar as linhas existentes
    var tabela = document.getElementById("tabela-nomes");
    tabela.innerHTML = "";

    // adicionar as novas linhas com os nomes
    for (var i = 0; i < nomes.length; i++) {
        var linha = document.createElement("tr");
        
        var nomeCelula = document.createElement("td");
        nomeCelula.textContent = nomes[i];
        linha.appendChild(nomeCelula);
        
        var removerCelula = document.createElement("td");
        var botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = (function(index) {
            return function() {
                removerNome(index);
            };
        })(i);
        removerCelula.appendChild(botaoRemover);
        linha.appendChild(removerCelula);
        
        tabela.appendChild(linha);
    }
}