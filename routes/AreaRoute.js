const express = require('express');
const router = express.Router();
const Area = require('../models/Area');

// Listar todas as áreas
router.get('/', async (req, res) => {
  try {
    const areas = await Area.getAllAreas();
    res.json(areas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adicionar uma nova área
router.post('/', async (req, res) => {
  try {
    const novaArea = await Area.addArea(req.body.descricao);
    res.json(novaArea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar uma área existente
router.put('/:id', async (req, res) => {
  try {
    const areaAtualizada = await Area.updateArea(req.params.id, req.body.descricao);
    res.json(areaAtualizada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Excluir uma área
router.delete('/:id', async (req, res) => {
  try {
    await Area.deleteArea(req.params.id);
    res.json({ message: 'Área excluída' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
