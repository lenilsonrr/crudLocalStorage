let listaProfessores = [];
const conteudoNoLocalS = window.localStorage.getItem('dbProfessores');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listaProfessores = conteudo;
}
exibirNaTela(listaProfessores);
const nome = document.getElementById("nome");

const modal = document.getElementById("box-modal");
var index;


function abrirModal() {
    
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        
    } else {
        modal.style.display = 'block';
        nome.focus();
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

    function salvarProfessor () {
        if (nome.value !="" ) {
            var professor = { nomeP: nome.value };
        listaProfessores.push(professor);
        localStorage.setItem("dbProfessores", JSON.stringify(listaProfessores));
        exibirNaTela(listaProfessores);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listaProfessores) {
    var elemento = "";
    for (var i = 0; i < listaProfessores.length; i++) {
        elemento += "<tr class='linha'><td>" + listaProfessores[i].nomeP + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listaProfessores.splice(i, 1);
    localStorage.setItem("dbProfessores", JSON.stringify(listaProfessores));
    exibirNaTela(listaProfessores);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listaProfessores[i].nomeP;
    
  
}

function salvarEdit() {

    listaProfessores[index].nomeP = nome.value;
    localStorage.setItem("dbProfessores", JSON.stringify(listaProfessores));
    exibirNaTela(listaProfessores);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}