/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 7 - Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/

public class exercicio7 {
    public static void main(String[] args) {

        int[] numeros = {5, 12, 7, 49, 3};

        int maior = numeros[0];

        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }

        System.out.println("O maior número do array é: " + maior);
    }
}