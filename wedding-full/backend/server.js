const express = require('express');
const mysql   = require('mysql2/promise');
const cors    = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ─── CONFIGURAÇÃO DO BANCO ───────────────────────────────────────────────────
// Altere as variáveis abaixo com os dados do seu MySQL

const db = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     process.env.DB_PORT     || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || 'sua_senha',
  database: process.env.DB_NAME     || 'casamento',
});

// ─── ROTAS ──────────────────────────────────────────────────────────────────

// GET /reservations — retorna todas as reservas
app.get('/reservations', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT gift_id, reserved_by FROM reservations');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar reservas.' });
  }
});

// POST /reservations — cria uma nova reserva
app.post('/reservations', async (req, res) => {
  const { gift_id, reserved_by } = req.body;

  if (!gift_id || !reserved_by) {
    return res.status(400).json({ message: 'gift_id e reserved_by são obrigatórios.' });
  }

  try {
    // Verifica se já foi reservado
    const [existing] = await db.query(
      'SELECT id FROM reservations WHERE gift_id = ?',
      [gift_id]
    );

    if (existing.length > 0) {
      return res.status(409).json({ message: 'Este presente já foi reservado.' });
    }

    await db.query(
      'INSERT INTO reservations (gift_id, reserved_by) VALUES (?, ?)',
      [gift_id, reserved_by]
    );

    res.status(201).json({ message: 'Reserva criada com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar reserva.' });
  }
});

// DELETE /reservations/:giftId — cancela uma reserva (uso administrativo)
app.delete('/reservations/:giftId', async (req, res) => {
  try {
    await db.query('DELETE FROM reservations WHERE gift_id = ?', [req.params.giftId]);
    res.json({ message: 'Reserva cancelada.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cancelar reserva.' });
  }
});

// ─── START ──────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
