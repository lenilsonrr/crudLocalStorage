let listCursos = [];
const conteudoNoLocalS = window.localStorage.getItem('dbCursos');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listCursos = conteudo;

}
exibirNaTela(listCursos);
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

    function salvarCurso () {
        if (nome.value !="" ) {
            var curso = { nomeP: nome.value };
        listCursos.push(curso);
        localStorage.setItem("dbCursos", JSON.stringify(listCursos));
        exibirNaTela(listCursos);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listCursos) {
    var elemento = "";
    for (var i = 0; i < listCursos.length; i++) {
        elemento += "<tr class='linha'><td>" + listCursos[i].nomeP + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listCursos.splice(i, 1);
    localStorage.setItem("dbCursos", JSON.stringify(listCursos));
    exibirNaTela(listCursos);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listCursos[i].nomeP;
    
  
}

function salvarEdit() {

    listCursos[index].nomeP = nome.value;
    localStorage.setItem("dbCursos", JSON.stringify(listCursos));
    exibirNaTela(listCursos);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}