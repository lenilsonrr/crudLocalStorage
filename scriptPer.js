let listPeriodos = [];
const conteudoNoLocalS = window.localStorage.getItem('dbPeriodos');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listPeriodos = conteudo;

}
exibirNaTela(listPeriodos);
const periodo = document.getElementById("periodo");

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

    function salvarPessoas () {
        if (nome.value !="" ) {
            var periodo = { nomeP: nome.value };
        listPeriodos.push(periodo);
        localStorage.setItem("dbPeriodos", JSON.stringify(listPeriodos));
        exibirNaTela(listPeriodos);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listPeriodos) {
    var elemento = "";
    for (var i = 0; i < listPeriodos.length; i++) {
        elemento += "<tr class='linha'><td>" + listPeriodos[i].nomeP + "º</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listPeriodos.splice(i, 1);
    localStorage.setItem("dbPeriodos", JSON.stringify(listPeriodos));
    exibirNaTela(listPeriodos);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listPeriodos[i].nomeP;
    
  
}

function salvarEdit() {

    listPeriodos[index].nomeP = nome.value;
    localStorage.setItem("dbPeriodos", JSON.stringify(listPeriodos));
    exibirNaTela(listPeriodos);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}