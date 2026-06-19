/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 10 - Escreva um programa que ordene um array de números em ordem crescente. 
*******************************************************************************/

public class exercicio10 {
    public static void main(String[] args) {

        int[] numeros = {8, 3, 12, 5, 1};

        int temp;

        for (int i = 0; i < numeros.length; i++) {
            for (int j = i + 1; j < numeros.length; j++) {

                if (numeros[i] > numeros[j]) {
                    temp = numeros[i];
                    numeros[i] = numeros[j];
                    numeros[j] = temp;
                }

            }
        }

        System.out.println("Array em ordem crescente:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }
    }
}
