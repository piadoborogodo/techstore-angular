/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 16 - Escreva um programa que valide uma senha de acordo com os seguintes critérios:
-Pelo menos 8 caracteres
-Pelo menos uma letra maiúscula
-Pelo menos uma letra minúscula
-Pelo menos um número
*******************************************************************************/

import java.util.Scanner;

public class exercicio16 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String senha;

        boolean temMaiuscula = false;
        boolean temMinuscula = false;
        boolean temNumero = false;

        System.out.print("Digite uma senha: ");
        senha = scanner.nextLine();

        if (senha.length() >= 8) {

            for (int i = 0; i < senha.length(); i++) {
                char c = senha.charAt(i);

                if (Character.isUpperCase(c)) {
                    temMaiuscula = true;
                }

                if (Character.isLowerCase(c)) {
                    temMinuscula = true;
                }

                if (Character.isDigit(c)) {
                    temNumero = true;
                }
            }

            if (temMaiuscula && temMinuscula && temNumero) {
                System.out.println("Senha válida!");
            } else {
                System.out.println("Senha inválida! Não atende todos os critérios.");
            }

        } else {
            System.out.println("Senha inválida! Deve ter pelo menos 8 caracteres.");
        }

        scanner.close();
    }
}