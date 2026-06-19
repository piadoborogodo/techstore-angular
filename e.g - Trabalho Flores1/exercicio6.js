/**************************
Curso: Engenharia de Software
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 -  Emanuel Gomes de Almeida 
             25033056-2 -  Gabriel Michels Cubas
             25164719-2 -  Rafael Maia
             25291090-2 -  João Lucas Veiga de Carvalho
             25089203-2 -  Vitor Gabriel Vieira Baldão
             25087132-2 -  Matheus Henrique Vieira Baldão
             25363242-2 -  Euclides Benedito Modesto Coelho Neto
             25357453-2 -  Leonardo De Jesus Sabino Flugel
Data: 05 de Março de 2026
Descritivo: 
***************************/


let numero = Number(prompt("Digite um número de 1 a 7:"));
let dia;

switch (numero) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-feira";
        break;
    case 3:
        dia = "Terça-feira";
        break;
    case 4:
        dia = "Quarta-feira";
        break;
    case 5:
        dia = "Quinta-feira";
        break;
    case 6:
        dia = "Sexta-feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        dia = "Número inválido!";
}

alert(dia);