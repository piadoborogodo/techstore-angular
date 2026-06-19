/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 4 - Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit, utilizando a fórmula: 
F = (C × 9/5) + 32.
*******************************************************************************/

import java.util.Scanner;

public class exercicio4 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        double celsius, fahrenheit;

        System.out.print("Digite a temperatura em Celsius: ");
        celsius = scanner.nextDouble();

        fahrenheit = (celsius * 9/5) + 32;

        System.out.println("Temperatura em Fahrenheit: " + fahrenheit);

        scanner.close();
    }
}