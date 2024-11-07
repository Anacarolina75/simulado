// models/Area.js
const db = require('../banco/db');

const getAllAreas = async () => {
  const [rows] = await db.query('SELECT * FROM Area');
  return rows;
};

const addArea = async (descricao) => {
  const [result] = await db.query('INSERT INTO Area (descricao) VALUES (?)', [descricao]);
  return { id: result.insertId, descricao };
};

const updateArea = async (id, descricao) => {
  await db.query('UPDATE Area SET descricao = ? WHERE id_area = ?', [descricao, id]);
  return { id, descricao };
};

const deleteArea = async (id) => {
  await db.query('DELETE FROM Area WHERE id_area = ?', [id]);
  return { message: 'Área excluída' };
};

module.exports = {
  getAllAreas,
  addArea,
  updateArea,
  deleteArea
};

