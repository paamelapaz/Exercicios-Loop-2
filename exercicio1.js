let situacao = prompt("Você quer cadastrar uma nova peça? \n 1-sim \n 2-não");
let pReprovadas ="";
let pAprovadas = 0;
let pTotalReprovadas = 0;
let pTotalAprovadas = 0;
let pTotalPecas = 0;


while(situacao == "1"){
    let numeroPeca = prompt ("Digite o numero da peça");
    let situacaoPeca = prompt ("Digite a situação da peça. \n 1-aprovado \n 2-reprovado");

    if(situacaoPeca == "2"){
        pReprovadas += numeroPeca + ", ";
        pTotalReprovadas ++;
    }
    if (situacaoPeca == "1"){
        pTotalAprovadas ++;
    }

    pTotalPecas = pTotalAprovadas + pTotalReprovadas;

    situacao = prompt("Você quer cadastrar uma nova peça? \n 1-sim \n 2- não");

}

document.getElementById("pecasReprovadas").innerHTML = pReprovadas;
document.getElementById("totalReprovadas").innerHTML = pTotalReprovadas;
document.getElementById("totalAprovadas").innerHTML = pTotalAprovadas;
document.getElementById("totaldePecas").innerHTML = pTotalPecas;

