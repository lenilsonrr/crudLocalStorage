

document.addEventListener("DOMContentLoaded", function () {
    const monthsBr = ['janiero', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const tableDays = document.getElementById("dias");
   const dias = document.querySelectorAll('td');
   
   let listEnsalamento = [];

const conteudoNoLocalS = window.localStorage.getItem('dbEnsalamento');
const conteudo = JSON.parse(conteudoNoLocalS);
listEnsalamento = conteudo;
   

    function GetDaysCalemdar(mes, ano) {
        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDaysOfWeek = new Date(ano, mes, 1).getDay() - 1;
        let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

        for (let i = -firstDaysOfWeek, index = 0; i < (42 - firstDaysOfWeek); i++, index++) {
            let dt = new Date(ano, mes, i);
            
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-anterior');
            dayTable.classList.remove('procimo-mes');
            dayTable.classList.remove('dia-atual');
            dayTable.innerHTML = dt.getDate();
            if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
                dayTable.classList.add('dia-atual');
            }

            if (i < 1) {
                dayTable.classList.add('mes-anterior');
            } if (i > getLastDayThisMonth) {
                dayTable.classList.add('proximo-mes')
            }

        }
        
    }

    let now = new Date()
    let mes = now.getMonth();
    let ano = now.getFullYear();
    GetDaysCalemdar(mes, ano)
    const botao_proximoMes = document.getElementById('btn-next')
    const botao_mesAnt = document.getElementById('btn-prev')
    botao_proximoMes.onclick = function () {
        mes++;
        if (mes > 11) {
            for(let i =0 ; i < 7 ;i++){
      
                if(dias[i].className =="Qui" ){
                    console.log(i)
                    dias[i].innerText += "\n"+listEnsalamento[i].dia +"\n"+ listEnsalamento[i].professor;
                }
            }
            mes = 0;
            ano++;
        }
        GetDaysCalemdar(mes, ano);
    }
    botao_mesAnt.onclick = function () {
        mes--;
        for(let i =0 ; i < 7 ;i++){
      
            if(dias[i].className =="Qui" ){
                console.log(i)
                dias[i].innerText += "\n"+listEnsalamento[i].dia +"\n"+ listEnsalamento[i].professor;
            }
        }
        if (mes < 0) {
            mes = 11;
            ano--;
        }
        GetDaysCalemdar(mes, ano);
    }
    for(let i =0 ; i < 7 ;i++){
      
        if(dias[i].className =="Qui" ){
            console.log(i)
            dias[i].innerText += "\n"+listEnsalamento[i].dia +"\n"+ listEnsalamento[i].professor;
        }
    }
})