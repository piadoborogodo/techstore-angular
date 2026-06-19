#include <stdio.h>

int main() {

    float matriz[3][3];
    float soma = 0, media;
    int i, j;

    // Entrada de valores na matriz
    printf("Digite os valores da matriz 3x3:\n");

    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("Elemento [%d][%d]: ", i, j);
            scanf("%f", &matriz[i][j]);
            soma += matriz[i][j];
        }
    }

    // Cálculo da média
    media = soma / 9;

    // Exibição do resultado
    printf("A media dos valores da matriz é: %.2f\n", media);

    return 0;
}