/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 9 - Criar uma calculadora simples de quatro operações (+ - * /). 
*******************************************************************************/

import java.util.Scanner;

public class exercicio9 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int num1, num2, resultado;
        char operacao;

        System.out.print("Digite o primeiro número: ");
        num1 = scanner.nextInt();

        System.out.print("Digite a operação (+ - * /): ");
        operacao = scanner.next().charAt(0);

        System.out.print("Digite o segundo número: ");
        num2 = scanner.nextInt();

        switch (operacao) {
            case '+':
                resultado = num1 + num2;
                System.out.println("Resultado: " + resultado);
                break;

            case '-':
                resultado = num1 - num2;
                System.out.println("Resultado: " + resultado);
                break;

            case '*':
                resultado = num1 * num2;
                System.out.println("Resultado: " + resultado);
                break;

            case '/':
                if (num2 != 0) {
                    resultado = num1 / num2;
                    System.out.println("Resultado: " + resultado);
                } else {
                    System.out.println("Erro: divisão por zero!");
                }
                break;

            default:
                System.out.println("Operação inválida!");
        }

        scanner.close();
    }
}