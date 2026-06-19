import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '**', redirectTo: '' }
];
