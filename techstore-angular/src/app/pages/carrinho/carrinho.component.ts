import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProdutoService } from '../../services/produto.service';
import { ItemCarrinho } from '../../models/produto.model';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit, OnDestroy {
  itens: ItemCarrinho[] = [];
  total = 0;
  totalItens = 0;
  finalizado = false;
  private destroy$ = new Subject<void>();

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.carrinho$.pipe(takeUntil(this.destroy$))
      .subscribe(itens => this.itens = itens);
    this.produtoService.getTotalPreco().pipe(takeUntil(this.destroy$))
      .subscribe(t => this.total = t);
    this.produtoService.getTotalItens().pipe(takeUntil(this.destroy$))
      .subscribe(t => this.totalItens = t);
  }

  remover(id: number): void { this.produtoService.removerDoCarrinho(id); }
  diminuir(id: number, qtd: number): void { this.produtoService.alterarQuantidade(id, qtd - 1); }
  aumentar(id: number, qtd: number): void { this.produtoService.alterarQuantidade(id, qtd + 1); }

  finalizar(): void {
    this.produtoService.limparCarrinho();
    this.finalizado = true;
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }
}
