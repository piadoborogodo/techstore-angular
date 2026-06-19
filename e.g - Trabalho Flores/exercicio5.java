/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 5 - Escreva um programa que exiba apenas os números pares de 1 a 20.
*******************************************************************************/

public class exercicio5 {
    public static void main(String[] args) {

        for (int i = 1; i <= 20; i++) {

            if (i % 2 == 0) {
                System.out.println(i);
            }

        }

    }
}