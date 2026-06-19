#include <stdio.h> 
int main (){
    int mat [3][3];
    int i, j, media;
    printf("\n+-----------------------------+");
    for(i=0; i < 4; i++){
        for(j=0; j < 4; j++){
            printf("\nDigite o valor da posicao [%d][%d]: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }
    printf("\n+-----------------------------+");
    for(i=0; i < 4; i++){
        for(j=0; j < 4; j++){
            printf("\nValor da posicao [%d][%d]: %d", i, j, mat[i][j]);
        }
    }
    return 0;
}