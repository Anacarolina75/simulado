// models/Alocacao.js
const db = require('../banco/db');

const getAllAlocacoes = async () => {
  const [rows] = await db.query('SELECT * FROM Alocacao');
  return rows;
};

const addAlocacao = async (area, celular, representante, quantidade) => {
  const [result] = await db.query(
    'INSERT INTO Alocacao (area, celular, representante, quantidade) VALUES (?, ?, ?, ?)',
    [area, celular, representante, quantidade]
  );
  return { id: result.insertId, area, celular, representante, quantidade };
};

const updateAlocacao = async (id, area, celular, representante, quantidade) => {
  await db.query('UPDATE Alocacao SET area = ?, celular = ?, representante = ?, quantidade = ? WHERE id_alocacao = ?', 
    [area, celular, representante, quantidade, id]
  );
  return { id, area, celular, representante, quantidade };
};

const deleteAlocacao = async (id) => {
  await db.query('DELETE FROM Alocacao WHERE id_alocacao = ?', [id]);
  return { message: 'Alocação excluída' };
};

module.exports = {
  getAllAlocacoes,
  addAlocacao,
  updateAlocacao,
  deleteAlocacao
};
