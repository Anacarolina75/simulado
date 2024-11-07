const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./banco/db');

// Importação das rotas
const representanteRoutes = require('./routes/RepresentanteRoute');
const clienteRoutes = require('./routes/ClientesRoute');
const celularRoutes = require('./routes/CelularRoute');
const areaRoutes = require('./routes/AreaRoute');
const alocacaoRoutes = require('./routes/AlocacaoRoute');
const vendaRoutes = require('./routes/VendaRoute');

// Configuração do servidor Express
const app = express();
const PORT = process.env.PORT;

// Middleware para permitir requisições do frontend
app.use(cors());
app.use(bodyParser.json());

// Configuração das rotas
app.use('/representante', representanteRoutes);
app.use('/clientes', clienteRoutes);
app.use('/celular', celularRoutes);
app.use('/area', areaRoutes);
app.use('/alocacao', alocacaoRoutes);
app.use('/venda', vendaRoutes);

// Rota raiz para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API para o sistema de vendas de celulares em funcionamento.');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
