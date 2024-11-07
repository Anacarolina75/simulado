// models/Celular.js
const db = require('../banco/db');

const getAllCelulares = async () => {
  const [rows] = await db.query('SELECT * FROM Celular');
  return rows;
};

const addCelular = async (modelo, preco) => {
  const [result] = await db.query('INSERT INTO Celular (modelo, preco) VALUES (?, ?)', [modelo, preco]);
  return { id: result.insertId, modelo, preco };
};

const updateCelular = async (id, modelo, preco) => {
  await db.query('UPDATE Celular SET modelo = ?, preco = ? WHERE id_celular = ?', [modelo, preco, id]);
  return { id, modelo, preco };
};

const deleteCelular = async (id) => {
  await db.query('DELETE FROM Celular WHERE id_celular = ?', [id]);
  return { message: 'Celular excluído' };
};

module.exports = {
  getAllCelulares,
  addCelular,
  updateCelular,
  deleteCelular
};
