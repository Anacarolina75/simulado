const express = require('express');
const router = express.Router();
const Celular = require('../models/Celular');

// Listar todos os celulares
router.get('/', async (req, res) => {
  try {
    const celulares = await Celular.getAllCelulares();
    res.json(celulares);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar um novo celular
router.post('/', async (req, res) => {
  try {
    const novoCelular = await Celular.addCelular(req.body.modelo, req.body.preco);
    res.json(novoCelular);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar um celular existente
router.put('/:id', async (req, res) => {
  try {
    const celularAtualizado = await Celular.updateCelular(req.params.id, req.body.modelo, req.body.preco);
    res.json(celularAtualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir um celular
router.delete('/:id', async (req, res) => {
  try {
    await Celular.deleteCelular(req.params.id);
    res.json({ message: 'Celular excluído' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
