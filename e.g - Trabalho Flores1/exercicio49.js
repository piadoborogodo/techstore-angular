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


function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

// Exemplo de uso
const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15