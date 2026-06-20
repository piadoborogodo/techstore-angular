#  TechStore — Aplicação Angular

Projeto desenvolvido como parte do trabalho prático da disciplina **Programação Front-End** do curso de Análise e Desenvolvimento de Sistemas — Unicesumar.

##  Sobre o Projeto

**TechStore** é uma loja virtual de produtos de tecnologia construída com Angular 17. A aplicação consome a [FakeStore API](https://fakestoreapi.com) e possui as seguintes páginas:

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Listagem de produtos com busca e filtro por categoria |
| Detalhe | `/produto/:id` | Informações completas de um produto |
| Carrinho | `/carrinho` | Gerenciamento do carrinho de compras |

##  Tecnologias Utilizadas

- **Angular 17** — Framework principal
- **TypeScript** — Linguagem base
- **RxJS** — Programação reativa (Observables, BehaviorSubject)
- **Angular HttpClient** — Comunicação com API REST
- **Angular Router** — Navegação entre páginas
- **Karma + Jasmine** — Testes unitários
- **FakeStore API** — API pública de produtos

##  Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── header/             # Navbar com contador do carrinho
│   ├── models/
│   │   └── produto.model.ts    # Interfaces TypeScript
│   ├── pages/
│   │   ├── home/               # Página de listagem de produtos
│   │   ├── produto-detalhe/    # Página de detalhe do produto
│   │   └── carrinho/           # Página do carrinho de compras
│   ├── services/
│   │   └── produto.service.ts  # Serviço HTTP + gerenciamento do carrinho
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── styles.css
```

##  Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org) versão **18 ou superior**
- [npm](https://www.npmjs.com) versão **9 ou superior**

Para verificar:
```bash
node --version
npm --version
```

##  Instalação e Configuração

**1. Clone o repositório:**
```bash
git clone https://github.com/piadoborogodo/techstore-angular.git
cd techstore-angular
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**
```bash
ng serve
```

**4. Acesse no navegador:**
```
http://localhost:4200
```

> A aplicação consome a FakeStore API pública. É necessária conexão com a internet.

##  Executando os Testes

Para rodar os testes unitários com Karma e Jasmine:

```bash
ng test
```

Para gerar relatório de cobertura de código:
```bash
ng test --code-coverage
```
O relatório é gerado em `coverage/techstore-angular/index.html`.

##  Build para Produção

```bash
ng build --configuration production
```
Os arquivos são gerados na pasta `dist/techstore-angular`.

##  Funcionalidades

- ✅ Listagem de produtos via API REST (FakeStore API)
- ✅ Busca em tempo real com `debounceTime` (RxJS)
- ✅ Filtro por categoria
- ✅ Página de detalhe do produto com avaliações em estrelas
- ✅ Carrinho de compras reativo com `BehaviorSubject`
- ✅ Gerenciamento de quantidade por item
- ✅ Cálculo automático de total e frete
- ✅ Header com contador de itens no carrinho
- ✅ Testes unitários do Service e do HomeComponent
- ✅ Layout responsivo (mobile e desktop)

##  Integrantes do Grupo

| Nome | RA |
(Matheus Henrique Vieira Baldão)	(25087132-2)
(Vitor Gabriel Vieira Baldão)	(25089203-2)

##  Referências

- [Documentação oficial do Angular](https://angular.dev)
- [FakeStore API](https://fakestoreapi.com)
- [Documentação do RxJS](https://rxjs.dev)
- [Karma Test Runner](https://karma-runner.github.io)
- [Jasmine Testing Framework](https://jasmine.github.io)

---
*Disciplina: Programação Front-End — Prof. José Carlos Domingues Flores — Unicesumar*
