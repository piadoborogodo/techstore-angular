#include <stdio.h>
#include <stdlib.h>

typedef struct no {
    int dados;
    struct no* prox;
} No;

// Exercício 02: função que imprime a lista
void imprimirLista(No* inicio) {
    No* L = inicio;
    while (L != NULL) {
        printf("\n ==> %d", L->dados);
        L = L->prox;
    }
}

// Exercício 03: função que soma todos os elementos
int somarLista(No* inicio) {
    No* L = inicio;
    int soma = 0;
    while (L != NULL) {
        soma += L->dados;
        L = L->prox;
    }
    return soma;
}

int main() {

    No* pNode1 = (No*) malloc(sizeof(No));
    No* pNode2 = (No*) malloc(sizeof(No));
    No* pNode3 = (No*) malloc(sizeof(No));

    // Exercício 01: dois nós adicionais (pNode4 e pNode5)
    No* pNode4 = (No*) malloc(sizeof(No));
    No* pNode5 = (No*) malloc(sizeof(No));

    pNode1->dados = 30;
    pNode2->dados = 67;
    pNode3->dados = 58;

    pNode4->dados = 98;
    pNode5->dados = 101;

    pNode1->prox = pNode2;
    pNode2->prox = pNode3;

    pNode3->prox = pNode4;
    pNode4->prox = pNode5;
    pNode5->prox = NULL;

    No* L = pNode1;

    printf("=== Lista Encadeada ===");
    imprimirLista(L);

    // Exercício 03: soma dos elementos da lista
    int total = somarLista(L);
    printf("\n\nSoma de todos os elementos: %d\n", total);

    free(pNode5);
    free(pNode4);
    free(pNode3);
    free(pNode2);
    free(pNode1);

    return 0;
}