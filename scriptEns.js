let listaProfessores = [];
const conteudoPro = window.localStorage.getItem('dbProfessores');
listaProfessores = JSON.parse(conteudoPro);

let listaSalas = [];
const conteudoSal = window.localStorage.getItem('dbSalas');
listaSalas = JSON.parse(conteudoSal);

let listPeriodos = [];
const conteudoPer = window.localStorage.getItem('dbPeriodos');
listPeriodos = JSON.parse(conteudoPer);

let listCursos = [];
const conteudoCur = window.localStorage.getItem('dbCursos');
listCursos = JSON.parse(conteudoCur);

let listDesafios = [];
const conteudoDes = window.localStorage.getItem('dbDesafios');
listDesafios = JSON.parse(conteudoDes);

let listHorarios = [];
const conteudoHor = window.localStorage.getItem('dbHorarios');
listHorarios = JSON.parse(conteudoHor);



const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const selectDia = document.getElementById('nomeDias');
const selectPro = document.getElementById('nomeProfesores');
const selectSal = document.getElementById('nomeSalas');
const selectPer = document.getElementById('nomePeriodos');
const selectCur = document.getElementById('nomeCursos');
const selectDes = document.getElementById('nomeDesafios');
const selectHor = document.getElementById('nomeHorarios');


conteudoList(selectPro, listaProfessores);
conteudoList(selectSal, listaSalas);
conteudoList(selectPer, listPeriodos);
conteudoList(selectCur, listCursos);
conteudoList(selectDes, listDesafios);
conteudoList(selectHor, listHorarios);

for(let i = 0; i < diasSemana.length ; i++){
    const option = document.createElement("option");
        option.innerText = diasSemana[i];
        selectDia.add(option)
}


function conteudoList(elemento, list) {
    for (intem of list) {
        const option = document.createElement("option");
        option.innerText = intem.nomeP;
        elemento.add(option)
    }
}


let listEnsalamento = [];

const conteudoNoLocalS = window.localStorage.getItem('dbEnsalamento');

if (conteudoNoLocalS) {
    const conteudo = JSON.parse(conteudoNoLocalS);
    listEnsalamento = conteudo;

} exibirNaTela(listEnsalamento);

const modal = document.getElementById("box-modal");
var index;



function abrirModal() {

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        selectDia.value = diasSemana[1];

    }
}

function fecharModal() {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }


    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
}

function salvarPessoas() {
    const dia = document.getElementById('nomeDias').value;
    const professor = document.getElementById('nomeProfesores').value;
    const sala = document.getElementById('nomeSalas').value;
    const periodo = document.getElementById('nomePeriodos').value;
    const curso  = document.getElementById('nomeCursos').value;
    const desafio = document.getElementById('nomeDesafios').value;
    const hora  = document.getElementById('nomeHorarios').value;
        var ensalamento = {  dia , professor, sala, periodo, curso, desafio, hora };
   
        listEnsalamento.push(ensalamento);
        localStorage.setItem("dbEnsalamento", JSON.stringify(listEnsalamento));
        exibirNaTela(listEnsalamento);

   


}


function exibirNaTela(listEnsalamento) {
    var elemento = "";
    for (var i = 0; i < listEnsalamento.length; i++) {
        elemento += "<tr class='linha'><td>" + listEnsalamento[i].dia + "</td>";
        elemento += "<td>" + listEnsalamento[i].professor + "</td>";
        elemento += "<td>" + listEnsalamento[i].sala + "</td>";
        elemento += "<td>" + listEnsalamento[i].periodo + "º</td>";
        elemento += "<td>" + listEnsalamento[i].curso + "</td>";
        elemento += "<td>" + listEnsalamento[i].desafio + "</td>";
        elemento += "<td>" + listEnsalamento[i].hora + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

    document.getElementById(
        "conteudo"
    ).innerHTML = elemento;
}

function deletar(i) {
    listEnsalamento.splice(i, 1);
    localStorage.setItem("dbEnsalamento", JSON.stringify(listEnsalamento));
    exibirNaTela(listEnsalamento);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    


}

function salvarEdit() {
    const dia = document.getElementById('nomeDias').value;
    const professor = document.getElementById('nomeProfesores').value;
    const sala = document.getElementById('nomeSalas').value;
    const periodo = document.getElementById('nomePeriodos').value;
    const curso  = document.getElementById('nomeCursos').value;
    const desafio = document.getElementById('nomeDesafios').value;
    const hora  = document.getElementById('nomeHorarios').value;

    listEnsalamento[index].dia = dia;
    listEnsalamento[index].professor = professor;
    listEnsalamento[index].sala = sala;
    listEnsalamento[index].periodo = periodo;
    listEnsalamento[index].curso = curso;
    listEnsalamento[index].desafio = desafio;
    listEnsalamento[index].hora = hora;
    localStorage.setItem("dbEnsalamento", JSON.stringify(listEnsalamento));
    exibirNaTela(listEnsalamento);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    

}