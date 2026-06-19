/**************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25001118-2 -  Emanuel Gomes de Almeida 
             25033056-2 -  Gabriel Michels Cubas
             25164719-2 -  Rafael Maia
             25291090-2 -  João Lucas Veiga de Carvalho
             25089203-2 -  Vitor Gabriel Vieira Baldão
             25087132-2 -  Matheus Henrique Vieira Baldão

Data: 16 de Março de 2026
Descritivo: 12 - Escreva um programa que use herança para criar uma classe Aluno que herda de Pessoa e adiciona um 
atributo matricula.
***************************/

class Pessoa {
    String nome;
    int idade;

    void exibirPessoa() {
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }
}

class Aluno extends Pessoa {
    String matricula;

    void exibirAluno() {
        exibirPessoa();
        System.out.println("Matrícula: " + matricula);
    }
}

public class exercicio12 {
    public static void main(String[] args) {

        Aluno a1 = new Aluno();

        a1.nome = "Vitnho da Quebrada Santos";
        a1.idade = 21;
        a1.matricula = "2024001";

        a1.exibirAluno();
    }
}