import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ProdutoService } from '../../services/produto.service';
import { of, throwError } from 'rxjs';
import { Produto } from '../../models/produto.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let produtoServiceSpy: jasmine.SpyObj<ProdutoService>;

  const mockProdutos: Produto[] = [
    {
      id: 1, title: 'Notebook Gamer', price: 4500,
      description: 'Ótimo notebook', category: 'electronics',
      image: 'img1.jpg', rating: { rate: 4.5, count: 100 }
    },
    {
      id: 2, title: 'Camisa Polo', price: 89.9,
      description: 'Camisa confortável', category: "men's clothing",
      image: 'img2.jpg', rating: { rate: 3.8, count: 50 }
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ProdutoService', [
      'listarTodos', 'listarCategorias', 'listarPorCategoria', 'adicionarAoCarrinho'
    ]);

    spy.listarTodos.and.returnValue(of(mockProdutos));
    spy.listarCategorias.and.returnValue(of(['electronics', "men's clothing"]));

    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: ProdutoService, useValue: spy }]
    }).compileComponents();

    produtoServiceSpy = TestBed.inject(ProdutoService) as jasmine.SpyObj<ProdutoService>;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os produtos ao inicializar', () => {
    expect(produtoServiceSpy.listarTodos).toHaveBeenCalled();
    expect(component.produtos.length).toBe(2);
  });

  it('deve exibir todos os produtos no template', () => {
    const cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toBe(2);
  });

  it('deve exibir o título correto no primeiro produto', () => {
    const titulo = fixture.nativeElement.querySelector('.titulo');
    expect(titulo.textContent).toContain('Notebook Gamer');
  });

  it('deve filtrar produtos pelo termo de busca', fakeAsync(() => {
    component.termoBusca = 'Camisa';
    component.filtrar();
    fixture.detectChanges();

    expect(component.produtosFiltrados.length).toBe(1);
    expect(component.produtosFiltrados[0].title).toBe('Camisa Polo');
  }));

  it('deve retornar lista vazia quando busca não encontrar resultado', () => {
    component.termoBusca = 'produto inexistente xyzxyz';
    component.filtrar();
    expect(component.produtosFiltrados.length).toBe(0);
  });

  it('deve retornar todos produtos com busca vazia', () => {
    component.termoBusca = '';
    component.filtrar();
    expect(component.produtosFiltrados.length).toBe(2);
  });

  it('deve gerar 5 estrelas para qualquer produto', () => {
    const estrelas = component.gerarEstrelas(4.5);
    expect(estrelas.length).toBe(5);
  });

  it('deve gerar estrelas cheias de acordo com o rating', () => {
    const estrelas = component.gerarEstrelas(3);
    const cheias = estrelas.filter(e => e === '★');
    expect(cheias.length).toBe(3);
  });

  it('deve exibir mensagem de erro quando a API falhar', () => {
    produtoServiceSpy.listarTodos.and.returnValue(
      throwError(() => new Error('Erro de conexão'))
    );
    component.carregarProdutos();
    fixture.detectChanges();

    expect(component.erro).toBeTruthy();
    expect(component.loading).toBeFalse();
  });

  it('deve chamar adicionarAoCarrinho ao clicar no botão', () => {
    const evento = new MouseEvent('click');
    component.adicionarAoCarrinho(evento, mockProdutos[0]);
    expect(produtoServiceSpy.adicionarAoCarrinho).toHaveBeenCalledWith(mockProdutos[0]);
  });
});
