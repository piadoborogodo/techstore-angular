/******************************************************************************
Curso: Engenharia de Software
Disciplina: Análise e Projeto Orienta a Objetos
Professor: José Carlos Flores
Turma: ESOFT3B
Componentes: 
             25087132-2 -  Matheus Henrique Vieira Baldâo
             25089203-2 - Vitor Gabriel Vieira Baldão 

Data: 14 de Março de 2026
Descritivo: 13 -  Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(), e implemente 
essa interface em uma classe Carro.
*******************************************************************************/

interface Veiculo {

    void acelerar();
    void frear();
}

class Carro implements Veiculo {

    public void acelerar() {
        System.out.println("O carro está acelerando.");
    }

    public void frear() {
        System.out.println("O carro está freando.");
    }
}

public class exercicio13 {
    public static void main(String[] args) {

        Carro meuCarro = new Carro();

        meuCarro.acelerar();
        meuCarro.frear();
    }
}