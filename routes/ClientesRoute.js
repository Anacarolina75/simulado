const express = require('express');
const router = express.Router();
const Clientes = require('../models/Clientes');

// Listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Clientes.getAllClientes();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar um novo cliente
router.post('/', async (req, res) => {
  try {
    const novoCliente = await Clientes.addCliente(req.body.nome_cliente);
    res.json(novoCliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar um cliente existente
router.put('/:id', async (req, res) => {
  try {
    const clienteAtualizado = await Clientes.updateCliente(req.params.id, req.body.nome_cliente);
    res.json(clienteAtualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir um cliente
router.delete('/:id', async (req, res) => {
  try {
    await Clientes.deleteCliente(req.params.id);
    res.json({ message: 'Cliente excluído' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
