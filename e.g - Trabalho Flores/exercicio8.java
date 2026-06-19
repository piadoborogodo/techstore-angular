/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 8 - Escreva um programa que conte o número de vogais em uma string fornecida pelo usuário.
*******************************************************************************/

import java.util.Scanner;

public class exercicio8 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String texto;
        int contador = 0;

        System.out.print("Digite uma palavra ou frase: ");
        texto = scanner.nextLine();

        texto = texto.toLowerCase();

        for (int i = 0; i < texto.length(); i++) {
            char letra = texto.charAt(i);

            if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
                contador++;
            }
        }

        System.out.println("Quantidade de vogais: " + contador);

        scanner.close();
    }
}