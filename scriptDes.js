let listDesafios = [];
const conteudoNoLocalS = window.localStorage.getItem('dbDesafios');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listDesafios = conteudo;

}
exibirNaTela(listDesafios);
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
            var desafio = { nomeP: nome.value };
        listDesafios.push(desafio);
        localStorage.setItem("dbDesafios", JSON.stringify(listDesafios));
        exibirNaTela(listDesafios);
    }
    else {
        nome.value = "";
   
    }
    nome.value = "";
   
}


function exibirNaTela(listDesafios) {
    var elemento = "";
    for (var i = 0; i < listDesafios.length; i++) {
        elemento += "<tr class='linha'><td>" + listDesafios[i].nomeP + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

  document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listDesafios.splice(i, 1);
    localStorage.setItem("dbDesafios", JSON.stringify(listDesafios));
    exibirNaTela(listDesafios);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listDesafios[i].nomeP;
    
  
}

function salvarEdit() {

    listDesafios[index].nomeP = nome.value;
    localStorage.setItem("dbDesafios", JSON.stringify(listDesafios));
    exibirNaTela(listDesafios);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
   
}