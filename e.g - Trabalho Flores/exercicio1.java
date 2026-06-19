/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 1 - Escreva um programa que receba dois números inteiros e exiba a soma deles. 
*******************************************************************************/

import java.util.Scanner;

public class exercicio1 {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

        int num1, num2, soma;

        System.out.print("Digite o primeiro número: ");
        num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        num2 = scanner.nextInt();

        soma = num1 + num2;

        System.out.println("A soma dos números é: " + soma);

        scanner.close();
    }
}