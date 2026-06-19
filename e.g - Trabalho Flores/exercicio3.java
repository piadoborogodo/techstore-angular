/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 3 - Escreva um programa que leia três números inteiros e exiba o maior deles.
*******************************************************************************/

import java.util.Scanner;

public class exercicio3 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int num1, num2, num3, maior;

        System.out.print("Digite o primeiro número: ");
        num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        num2 = scanner.nextInt();

        System.out.print("Digite o terceiro número: ");
        num3 = scanner.nextInt();

        maior = num1;

        if (num2 > maior) {
            maior = num2;
        }

        if (num3 > maior) {
            maior = num3;
        }

        System.out.println("O maior número é: " + maior);

        scanner.close();
    }
}