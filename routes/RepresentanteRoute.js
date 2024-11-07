const express = require('express');
const router = express.Router();
const Representante = require('../models/Representante');

// Listar todos os representantes
router.get('/', async (req, res) => {
  try {
    const representantes = await Representante.getAllRepresentantes();
    res.json(representantes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar um novo representante
router.post('/', async (req, res) => {
  try {
    const novoRepresentante = await Representante.addRepresentante(req.body.nome_representante);
    res.json(novoRepresentante);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar um representante existente
router.put('/:id', async (req, res) => {
  try {
    const representanteAtualizado = await Representante.updateRepresentante(req.params.id, req.body.nome_representante);
    res.json(representanteAtualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir um representante
router.delete('/:id', async (req, res) => {
  try {
    await Representante.deleteRepresentante(req.params.id);
    res.json({ message: 'Representante excluído' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
