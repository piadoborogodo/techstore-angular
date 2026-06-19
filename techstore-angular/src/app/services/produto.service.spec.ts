import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Produto, ItemCarrinho } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'https://fakestoreapi.com/products';

  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl).pipe(
      catchError(err => throwError(() => new Error('Erro ao carregar produtos: ' + err.message)))
    );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => throwError(() => new Error('Produto não encontrado: ' + err.message)))
    );
  }

  listarCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  listarPorCategoria(categoria: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/category/${categoria}`);
  }

  adicionarAoCarrinho(produto: Produto): void {
    const carrinho = this.carrinhoSubject.getValue();
    const index = carrinho.findIndex(i => i.produto.id === produto.id);
    if (index >= 0) {
      carrinho[index].quantidade++;
      this.carrinhoSubject.next([...carrinho]);
    } else {
      this.carrinhoSubject.next([...carrinho, { produto, quantidade: 1 }]);
    }
  }

  removerDoCarrinho(id: number): void {
    const carrinho = this.carrinhoSubject.getValue().filter(i => i.produto.id !== id);
    this.carrinhoSubject.next(carrinho);
  }

  alterarQuantidade(id: number, quantidade: number): void {
    const carrinho = this.carrinhoSubject.getValue();
    const index = carrinho.findIndex(i => i.produto.id === id);
    if (index >= 0) {
      if (quantidade <= 0) {
        this.removerDoCarrinho(id);
      } else {
        carrinho[index].quantidade = quantidade;
        this.carrinhoSubject.next([...carrinho]);
      }
    }
  }

  limparCarrinho(): void {
    this.carrinhoSubject.next([]);
  }

  getTotalItens(): Observable<number> {
    return this.carrinho$.pipe(
      map(itens => itens.reduce((total, item) => total + item.quantidade, 0))
    );
  }

  getTotalPreco(): Observable<number> {
    return this.carrinho$.pipe(
      map(itens => itens.reduce((total, item) => total + item.produto.price * item.quantidade, 0))
    );
  }
}