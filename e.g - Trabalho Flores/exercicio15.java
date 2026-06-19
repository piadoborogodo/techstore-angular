/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 15 - Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e altura (m) e 
exiba o resultado com a classificação correspondente (ex: abaixo do peso, normal, etc.).
*******************************************************************************/

import java.util.Scanner;

public class exercicio15 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        double peso, altura, imc;

        System.out.print("Digite seu peso (kg): ");
        peso = scanner.nextDouble();

        System.out.print("Digite sua altura (m): ");
        altura = scanner.nextDouble();

        imc = peso / (altura * altura);

        System.out.println("Seu IMC é: " + imc);

        if (imc < 18.5) {
            System.out.println("Classificação: Abaixo do peso");
        } 
        else if (imc < 25) {
            System.out.println("Classificação: Peso normal");
        } 
        else if (imc < 30) {
            System.out.println("Classificação: Sobrepeso");
        } 
        else {
            System.out.println("Classificação: Obesidade");
        }

        scanner.close();
    }
}