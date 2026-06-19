/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 2 - Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
*******************************************************************************/

import java.util.Scanner;

public class exercicio2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int numero;

        System.out.print("Digite um número inteiro: ");
        numero = scanner.nextInt();

        if (numero % 2 == 0) {
            System.out.println("O número é PAR.");
        } else {
            System.out.println("O número é ÍMPAR.");
        }

        scanner.close();
    }
}