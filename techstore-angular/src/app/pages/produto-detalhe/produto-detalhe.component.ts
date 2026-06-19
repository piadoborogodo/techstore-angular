import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit, OnDestroy {
  produto: Produto | null = null;
  loading = false;
  erro = '';
  mensagemCarrinho = '';
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = Number(params.get('id'));
      if (id) this.carregarProduto(id);
    });
  }

  carregarProduto(id: number): void {
    this.loading = true;
    this.erro = '';
    this.produtoService.buscarPorId(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: p => { this.produto = p; this.loading = false; },
        error: () => { this.erro = 'Produto não encontrado.'; this.loading = false; }
      });
  }

  adicionarAoCarrinho(): void {
    if (!this.produto) return;
    this.produtoService.adicionarAoCarrinho(this.produto);
    this.mensagemCarrinho = 'Produto adicionado ao carrinho!';
    setTimeout(() => this.mensagemCarrinho = '', 3000);
  }

  gerarEstrelas(rate: number): string[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rate) ? '★' : '☆');
  }

  voltar(): void { this.router.navigate(['/']); }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }
}
