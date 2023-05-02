let listaSalas = [];
const conteudoNoLocalS = window.localStorage.getItem('dbSalas');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listaSalas = conteudo;

}


exibirNaTela(listaSalas);
const nome = document.getElementById("nome");

const modal = document.getElementById("box-modal");
var index;


function abrirModal() {
    
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

function fecharModal() {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }
    nome.value = "";
  
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
}

    function salvarSala () {
        if (nome.value !="" ) {
            var sala = { nomeP: nome.value };
        listaSalas.push(sala);
        localStorage.setItem("dbSalas", JSON.stringify(listaSalas));
        exibirNaTela(listaSalas);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listaSalas) {
    var elemento = "";
    for (var i = 0; i < listaSalas.length; i++) {
        elemento += "<tr class='linha'><td>" + listaSalas[i].nomeP + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listaSalas.splice(i, 1);
    localStorage.setItem("dbSalas", JSON.stringify(listaSalas));
    exibirNaTela(listaSalas);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listaSalas[i].nomeP;
    
  
}

function salvarEdit() {

    listaSalas[index].nomeP = nome.value;
    localStorage.setItem("dbSalas", JSON.stringify(listaSalas));
    exibirNaTela(listaSalas);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}