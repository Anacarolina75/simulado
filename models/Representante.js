// models/Representante.js
const db = require('../banco/db');

const getAllRepresentantes = async () => {
  const [rows] = await db.query('SELECT * FROM Representante');
  return rows;
};

const addRepresentante = async (nome_representante) => {
  const [result] = await db.query('INSERT INTO Representante (nome_representante) VALUES (?)', [nome_representante]);
  return { id: result.insertId, nome_representante };
};

const updateRepresentante = async (id, nome_representante) => {
  await db.query('UPDATE Representante SET nome_representante = ? WHERE id_representante = ?', [nome_representante, id]);
  return { id, nome_representante };
};

const deleteRepresentante = async (id) => {
  await db.query('DELETE FROM Representante WHERE id_representante = ?', [id]);
  return { message: 'Representante excluído' };
};

module.exports = {
  getAllRepresentantes,
  addRepresentante,
  updateRepresentante,
  deleteRepresentante
};
