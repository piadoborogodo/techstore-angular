/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 14 - Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.
*******************************************************************************/

import java.util.Scanner;

public class exercicio14 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int numero;

        System.out.print("Digite um número inteiro: ");
        numero = scanner.nextInt();

        System.out.println("Tabuada do " + numero + ":");

        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }

        scanner.close();
    }
}