/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 17 - Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário tente adivinhá-lo. 
O programa deve dar dicas ("maior" ou "menor") até o acerto.
*******************************************************************************/

import java.util.Scanner;
import java.util.Random;

public class exercicio17 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int numeroSecreto = random.nextInt(100) + 1;
        int palpite = 0;

        System.out.println("Tente adivinhar o número entre 1 e 100!");

        while (palpite != numeroSecreto) {

            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();

            if (palpite < numeroSecreto) {
                System.out.println("O número é MAIOR.");
            } 
            else if (palpite > numeroSecreto) {
                System.out.println("O número é MENOR.");
            } 
            else {
                System.out.println("Parabéns! Você acertou!");
            }
        }

        scanner.close();
    }
}