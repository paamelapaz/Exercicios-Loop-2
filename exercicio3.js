let candidato = Number(prompt("Deseja cadastrar um novo candidato? \n 1-Sim \n 2-Não"));
let idadeMedia = 0;
let candidatoAprovado= 0;
let totalIdade = 0;
let totCand = 0;

while (candidato==1){
 let numCand = Number(prompt ("Digite o numero do candidato"));
 let idadeCand = Number (prompt("Digite a idade do candidato"));
 let sexoCand = prompt("Digite o sexo do candidato. \n F-Feminino \n M-Masculino");
 let expCand = Number (prompt("O candidato possui experiencia profissional? \n 1- Sim \n 2- Não"));

 totalIdade += idadeCand;
 totCand++;
 
 idadeMedia = totalIdade / totCand;

 if(expCand == 1 && idadeCand >= 18){
    candidatoAprovado += numCand +" - " + sexoCand + "</br>";
 }
 
 candidato = Number (prompt("Deseja cadastrar um novo candidato? \n 1-Sim \n 2-Não"));

}



document.getElementById("idade-media").innerHTML = idadeMedia;
document.getElementById("totalCandidatos").innerHTML = totCand;
document.getElementById("cand-apv").innerHTML = candidatoAprovado;