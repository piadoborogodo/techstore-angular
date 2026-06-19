/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 18 - Desenvolva um programa que conte quantas palavras existem em uma string fornecida pelo usuário.
*******************************************************************************/

import java.util.Scanner;

public class exercicio18 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();

        String[] palavras = frase.trim().split("\\s+");

        int quantidade = palavras.length;

        System.out.println("Quantidade de palavras: " + quantidade);

        scanner.close();
    }
}