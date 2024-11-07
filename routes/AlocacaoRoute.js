const express = require('express');
const router = express.Router();
const Alocacao = require('../models/Alocacao');

// Listar todas as alocações
router.get('/', async (req, res) => {
  try {
    const alocacoes = await Alocacao.getAllAlocacoes();
    res.json(alocacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar uma nova alocação
router.post('/', async (req, res) => {
  try {
    const novaAlocacao = await Alocacao.addAlocacao(req.body.area, req.body.celular, req.body.representante, req.body.quantidade);
    res.json(novaAlocacao);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar uma alocação existente
router.put('/:id', async (req, res) => {
  try {
    const alocacaoAtualizada = await Alocacao.updateAlocacao(req.params.id, req.body.area, req.body.celular, req.body.representante, req.body.quantidade);
    res.json(alocacaoAtualizada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir uma alocação
router.delete('/:id', async (req, res) => {
  try {
    await Alocacao.deleteAlocacao(req.params.id);
    res.json({ message: 'Alocação excluída' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
