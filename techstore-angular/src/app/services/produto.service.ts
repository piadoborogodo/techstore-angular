import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto, ItemCarrinho } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    // ── ROUPAS MASCULINAS ─────────────────────────────────────────
    {
      id: 1,
      title: 'Mochila Casual Resistente',
      price: 109.95,
      description: 'Mochila perfeita para o dia a dia e aventuras ao ar livre. Espaçosa, resistente e com design moderno.',
      category: "men's clothing",
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.9, count: 120 }
    },
    {
      id: 2,
      title: 'Camiseta Slim Fit Masculina',
      price: 22.30,
      description: 'Camiseta slim fit masculina em algodão premium. Confortável, leve e ideal para o uso diário.',
      category: "men's clothing",
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.1, count: 259 }
    },
    {
      id: 3,
      title: 'Jaqueta Masculina em Algodão',
      price: 55.99,
      description: 'Jaqueta masculina em algodão com design moderno. Perfeita para dias mais frios e ocasiões casuais.',
      category: "men's clothing",
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.7, count: 500 }
    },
    {
      id: 4,
      title: 'Calça Casual Slim Fit Masculina',
      price: 15.99,
      description: 'Calça casual slim fit masculina. Elegante e confortável para diferentes ocasiões do dia a dia.',
      category: "men's clothing",
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.1, count: 430 }
    },
    // ── JOIAS ─────────────────────────────────────────────────────
    {
      id: 5,
      title: 'Pulseira Ouro e Prata com Dragão',
      price: 695.00,
      description: 'Pulseira feminina banhada a ouro e prata com design de dragão. Peça artesanal única, símbolo de força e elegância.',
      category: 'jewelery',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.6, count: 400 }
    },
    {
      id: 6,
      title: 'Anel Ouro Sólido com Micropavê',
      price: 168.00,
      description: 'Anel delicado em ouro sólido com micropavê de diamantes. Sofisticado e elegante para qualquer ocasião.',
      category: 'jewelery',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.9, count: 70 }
    },
    {
      id: 7,
      title: 'Anel Banhado a Ouro Branco Princess',
      price: 9.99,
      description: 'Anel banhado a ouro branco com pedra central em formato princess. Delicado e moderno.',
      category: 'jewelery',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.0, count: 400 }
    },
    {
      id: 8,
      title: 'Conjunto de Brincos Ouro Rose',
      price: 10.99,
      description: 'Conjunto de brincos banhados a ouro rose em aço inoxidável. Hipoalergênicos e ideais para uso diário.',
      category: 'jewelery',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80',
      rating: { rate: 1.9, count: 100 }
    },
    // ── ELETRÔNICOS ───────────────────────────────────────────────
    {
      id: 9,
      title: 'HD Externo Portátil 2TB',
      price: 64.00,
      description: 'HD externo portátil de 2TB. Compatível com USB 3.0, ideal para backup e armazenamento de arquivos.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.3, count: 203 }
    },
    {
      id: 10,
      title: 'SSD Interno 1TB',
      price: 109.00,
      description: 'SSD interno de 1TB com velocidade de leitura de até 535MB/s. Ideal para upgrades de notebooks e desktops.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1601737487795-dab272f52420?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.9, count: 470 }
    },
    {
      id: 11,
      title: 'SSD 256GB Alta Performance',
      price: 109.00,
      description: 'SSD de 256GB com interface SATA III. Alta durabilidade e velocidade para aumentar a performance do seu computador.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.8, count: 319 }
    },
    {
      id: 12,
      title: 'HD Externo Gamer 4TB',
      price: 114.00,
      description: 'HD externo de 4TB especialmente desenvolvido para games. Compatível com PS4 e Xbox, plug and play.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1540829917886-91ab031b1764?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.8, count: 400 }
    },
    {
      id: 13,
      title: 'Monitor Full HD 21,5 Polegadas',
      price: 599.00,
      description: 'Monitor Full HD de 21,5 polegadas com tempo de resposta de 4ms e taxa de atualização de 75Hz.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.9, count: 250 }
    },
    {
      id: 14,
      title: 'Monitor Gamer Curvo 49 Polegadas 144Hz',
      price: 999.99,
      description: 'Monitor gamer curvo de 49 polegadas com taxa de atualização de 144Hz e resolução QLED. Imersão total nos jogos.',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.2, count: 140 }
    },
    // ── ROUPAS FEMININAS ──────────────────────────────────────────
    {
      id: 15,
      title: 'Jaqueta Feminina 3 em 1 Impermeável',
      price: 56.99,
      description: 'Jaqueta feminina 3 em 1 impermeável e respirável. Ideal para esportes de inverno e atividades ao ar livre.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.6, count: 235 }
    },
    {
      id: 16,
      title: 'Jaqueta Feminina Estilo Moto',
      price: 29.95,
      description: 'Jaqueta feminina estilo moto em couro sintético com capuz removível. Moderna e versátil.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop&q=80',
      rating: { rate: 2.9, count: 340 }
    },
    {
      id: 17,
      title: 'Jaqueta Corta Vento Feminina',
      price: 39.99,
      description: 'Jaqueta corta vento feminina impermeável e leve. Perfeita para dias de chuva e atividades ao ar livre.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.8, count: 679 }
    },
    {
      id: 18,
      title: 'Blusa Feminina Manga Curta Decote V',
      price: 9.85,
      description: 'Blusa feminina manga curta com decote em V. Leve, confortável e perfeita para o dia a dia.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.7, count: 130 }
    },
    {
      id: 19,
      title: 'Blusa Feminina Dry Fit',
      price: 7.95,
      description: 'Blusa feminina manga curta com tecnologia de absorção de umidade. Ideal para treinos e atividades físicas.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=400&fit=crop&q=80',
      rating: { rate: 4.5, count: 146 }
    },
    {
      id: 20,
      title: 'Camiseta Feminina Casual em Algodão',
      price: 12.99,
      description: 'Camiseta feminina casual em algodão macio. Confortável e estilosa para o uso no dia a dia.',
      category: "women's clothing",
      image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400&h=400&fit=crop&q=80',
      rating: { rate: 3.6, count: 145 }
    }
  ];

  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  listarTodos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  buscarPorId(id: number): Observable<Produto> {
    const produto = this.produtos.find(p => p.id === id);
    return of(produto!);
  }

  listarCategorias(): Observable<string[]> {
    const cats = [...new Set(this.produtos.map(p => p.category))];
    return of(cats);
  }

  listarPorCategoria(categoria: string): Observable<Produto[]> {
    return of(this.produtos.filter(p => p.category === categoria));
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