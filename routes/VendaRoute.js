const express = require('express');
const router = express.Router();
const Venda = require('../models/Venda');

// Registrar uma nova venda
router.post('/', async (req, res) => {
  const { cliente, celular, quantidade, area } = req.body;
  try {
    const resultadoVenda = await Venda.realizarVenda(cliente, celular, quantidade, area);
    res.json(resultadoVenda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
