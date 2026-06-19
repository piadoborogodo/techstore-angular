/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 6 - Escreva um programa que leia 5 números do usuário e os armazene em um array, depois exiba todos os numeros.
*******************************************************************************/

import java.util.Scanner;

public class exercicio6 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int[] numeros = new int[5];

        // Lendo os números
        for (int i = 0; i < 5; i++) {
            System.out.print("Digite um número: ");
            numeros[i] = scanner.nextInt();
        }

        // Exibindo os números
        System.out.println("Os números digitados foram:");
        for (int i = 0; i < 5; i++) {
            System.out.println(numeros[i]);
        }

        scanner.close();
    }
}