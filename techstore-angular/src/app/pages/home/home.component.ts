import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  categorias: string[] = [];
  categoriaSelecionada = 'todas';
  termoBusca = '';
  loading = false;
  erro = '';

  private destroy$ = new Subject<void>();
  private buscaSubject = new Subject<string>();

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarProdutos();

    this.buscaSubject.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => this.filtrar());
  }

  carregarProdutos(): void {
    this.loading = true;
    this.erro = '';
    const obs = this.categoriaSelecionada === 'todas'
      ? this.produtoService.listarTodos()
      : this.produtoService.listarPorCategoria(this.categoriaSelecionada);

    obs.pipe(takeUntil(this.destroy$)).subscribe({
      next: dados => {
        this.produtos = dados;
        this.filtrar();
        this.loading = false;
      },
      error: () => {
        this.erro = 'Não foi possível carregar os produtos. Verifique sua conexão.';
        this.loading = false;
      }
    });
  }

  carregarCategorias(): void {
    this.produtoService.listarCategorias()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cats => this.categorias = cats);
  }

  filtrar(): void {
    const termo = this.termoBusca.toLowerCase().trim();
    this.produtosFiltrados = this.produtos.filter(p =>
      p.title.toLowerCase().includes(termo) ||
      p.category.toLowerCase().includes(termo)
    );
  }
  traduzirCategoria(categoria: string): string {
  const traducoes: { [key: string]: string } = {
    "electronics": "Eletrônicos",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas",
    "jewelery": "Joias"
  };
  return traducoes[categoria] || categoria;
}
  onBuscaChange(): void {
    this.buscaSubject.next(this.termoBusca);
  }

  onCategoriaChange(): void {
    this.termoBusca = '';
    this.carregarProdutos();
  }

  adicionarAoCarrinho(evento: Event, produto: Produto): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.produtoService.adicionarAoCarrinho(produto);
  }

  gerarEstrelas(rate: number): string[] {
    return Array.from({ length: 5 }, (_, i) =>
      i < Math.round(rate) ? '★' : '☆'
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
