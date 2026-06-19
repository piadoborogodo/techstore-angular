/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 11 - Escreva um programa que defina uma classe Pessoa com atributos nome e idade, e métodos para exibir 
esses atributos.
*******************************************************************************/

class Pessoa {

    String nome;
    int idade;

    void exibirDados() {
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
    }
}

public class exercicio11 {
    public static void main(String[] args) {

        Pessoa p1 = new Pessoa();

        p1.nome = "Luiz Inácio Lula da Silva";
        p1.idade = 80;

        p1.exibirDados();
    }
}