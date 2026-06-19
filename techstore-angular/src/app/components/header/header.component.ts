import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItens = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getTotalItens().subscribe(total => {
      this.totalItens = total;
    });
  }
}
