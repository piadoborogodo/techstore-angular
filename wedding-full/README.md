# Lista de Presentes — Matheus & Kassia

## Estrutura do projeto

```
wedding-full/
├── backend/
│   ├── server.js       ← API Node.js + Express
│   ├── package.json    ← dependências do backend
│   └── database.sql    ← script para criar o banco
└── frontend/
    ├── index.html
    ├── styles.css
    └── script.js       ← consome a API
```

---

## 1. Configurar o banco MySQL

Abra o MySQL e execute:

```bash
mysql -u root -p < backend/database.sql
```

Isso cria o banco `casamento` e a tabela `reservations`.

---

## 2. Configurar o backend

Entre na pasta do backend e instale as dependências:

```bash
cd backend
npm install
```

Abra o arquivo `server.js` e ajuste as configurações do banco:

```js
const db = mysql.createPool({
  host:     'localhost',
  port:     3306,
  user:     'root',
  password: 'sua_senha',   // ← altere aqui
  database: 'casamento',
});
```

Ou use variáveis de ambiente (recomendado em produção):

```bash
DB_HOST=localhost DB_USER=root DB_PASSWORD=sua_senha DB_NAME=casamento npm start
```

Inicie o servidor:

```bash
npm start          # produção
npm run dev        # desenvolvimento (reinicia automaticamente)
```

O servidor sobe em: http://localhost:3001

---

## 3. Abrir o frontend

Abra o arquivo `frontend/index.html` diretamente no navegador.

> Se quiser servir via HTTP (recomendado), use:
> ```bash
> npx serve frontend
> ```

---

## Rotas da API

| Método | Rota                      | Descrição                        |
|--------|---------------------------|----------------------------------|
| GET    | /reservations             | Lista todas as reservas          |
| POST   | /reservations             | Cria uma reserva                 |
| DELETE | /reservations/:giftId     | Cancela uma reserva (admin)      |

### Exemplo POST

```json
POST /reservations
{
  "gift_id": 3,
  "reserved_by": "Ana Silva"
}
```
