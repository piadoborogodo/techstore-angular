const gifts = [
  { id:1,  name:'Jogo de Panelas',       cat:'Cozinha',    desc:'5 peças em aço inox com cabos de silicone antitérmico.',      price:'R$ 320',   qty:1 },
  { id:2,  name:'Cafeteira Italiana',    cat:'Cozinha',    desc:'6 xícaras, ideal para o café da manhã a dois.',               price:'R$ 180',   qty:1 },
  { id:3,  name:'Air Fryer',             cat:'Cozinha',    desc:'Fritadeira sem óleo 5 L, digital com 8 programas.',           price:'R$ 580',   qty:1 },
  { id:4,  name:'Jogo de Talheres',      cat:'Mesa posta', desc:'48 peças em aço inox escovado com porta-talheres.',           price:'R$ 280',   qty:1 },
  { id:5,  name:'Travessa de Porcelana', cat:'Mesa posta', desc:'Travessa oval 35 cm para servir em família.',                 price:'R$ 140',   qty:2 },
  { id:6,  name:'Jogo de Cama Queen',    cat:'Quarto',     desc:'200 fios, 100% algodão egípcio, cor natural.',                price:'R$ 460',   qty:1 },
  { id:7,  name:'Jogo de Toalhas',       cat:'Banheiro',   desc:'6 peças felpudas 100% algodão, cor areia.',                   price:'R$ 220',   qty:1 },
  { id:8,  name:'Aspirador Robô',        cat:'Utilidades', desc:'Aspirador inteligente com mapeamento automático.',            price:'R$ 1.200', qty:1 },
  { id:9,  name:'Quadro Decorativo',     cat:'Decoração',  desc:'Arte abstrata em tela, 60×80 cm, já emoldurado.',            price:'R$ 350',   qty:2 },
  { id:10, name:'Luminária de Mesa',     cat:'Decoração',  desc:'Base em mármore branco com cabo e cúpula dourados.',         price:'R$ 260',   qty:2 },
  { id:11, name:'Porta Retratos',        cat:'Decoração',  desc:'Conjunto de 3 em madeira natural, tamanhos variados.',       price:'R$ 90',    qty:3 },
  { id:12, name:'Espelho de Parede',     cat:'Decoração',  desc:'Redondo 80 cm com moldura em rattan natural.',               price:'R$ 420',   qty:1 },
];

let reserved = {};
let activeFilter = 'all';
let pendingId = null;

const cats = ['all', ...new Set(gifts.map(g => g.cat))];

function buildFilters() {
  const el = document.getElementById('filters');
  el.innerHTML = '';
  cats.forEach(c => {
    const b = document.createElement('button');
    b.className = 'filter-btn' + (c === activeFilter ? ' active' : '');
    b.textContent = c === 'all' ? 'Todos' : c;
    b.onclick = () => { activeFilter = c; buildFilters(); render(); };
    el.appendChild(b);
  });
}

function render() {
  const grid = document.getElementById('grid');
  const list = activeFilter === 'all' ? gifts : gifts.filter(g => g.cat === activeFilter);
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<div class="no-results">Nenhum presente nessa categoria.</div>';
    return;
  }

  list.forEach(g => {
    const isRes = !!reserved[g.id];
    const card = document.createElement('div');
    card.className = 'gift-card' + (isRes ? ' reserved' : '');
    card.innerHTML = `
      ${isRes ? '<div class="reserved-tag">Reservado</div>' : ''}
      <div class="gift-cat">${g.cat}</div>
      <div class="gift-name">${g.name}</div>
      <div class="gift-desc">${g.desc}${g.qty > 1 ? ` <span class="gift-qty">(${g.qty} unid.)</span>` : ''}</div>
      <div class="gift-bottom">
        <div class="gift-price">${g.price}</div>
        <button class="reserve-btn" ${isRes ? 'disabled' : ''} data-id="${g.id}">
          ${isRes ? 'Reservado' : 'Reservar'}
        </button>
      </div>
    `;
    if (!isRes) card.querySelector('.reserve-btn').onclick = () => openModal(g.id);
    grid.appendChild(card);
  });

  const resCount = Object.keys(reserved).length;
  document.getElementById('avail').textContent = gifts.length - resCount;
  document.getElementById('res').textContent = resCount;
}

function openModal(id) {
  pendingId = id;
  document.getElementById('modal-name').textContent = gifts.find(g => g.id === id).name;
  document.getElementById('modal-input').value = '';
  document.getElementById('modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('modal-input').focus(), 80);
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  pendingId = null;
}

function confirmReserve() {
  const name = document.getElementById('modal-input').value.trim();
  if (!name) { document.getElementById('modal-input').focus(); return; }
  reserved[pendingId] = name;
  closeModal();
  render();
  showToast('Presente reservado! Obrigado. 🤍');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

document.getElementById('btn-cancel').onclick = closeModal;
document.getElementById('btn-confirm').onclick = confirmReserve;
document.getElementById('modal').onclick = e => {
  if (e.target === document.getElementById('modal')) closeModal();
};
document.getElementById('modal-input').onkeydown = e => {
  if (e.key === 'Enter') confirmReserve();
};

buildFilters();
render();
