let listHorarios = [];

const conteudoNoLocalS = window.localStorage.getItem('dbHorarios');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listHorarios = conteudo;

}
exibirNaTela(listHorarios);
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

    function salvarPessoas () {
        if (nome.value !="" ) {
            var horario = { nomeP: nome.value };
        listHorarios.push(horario);
        localStorage.setItem("dbHorarios", JSON.stringify(listHorarios));
        exibirNaTela(listHorarios);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listHorarios) {
    var elemento = "";
    for (var i = 0; i < listHorarios.length; i++) {
        elemento += "<tr class='linha'><td>" + listHorarios[i].nomeP + " horas</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listHorarios.splice(i, 1);
    localStorage.setItem("dbHorarios", JSON.stringify(listHorarios));
    exibirNaTela(listHorarios);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listHorarios[i].nomeP;
    
  
}

function salvarEdit() {

    listHorarios[index].nomeP = nome.value;
    localStorage.setItem("dbHorarios", JSON.stringify(listHorarios));
    exibirNaTela(listHorarios);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}