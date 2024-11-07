// models/Clientes.js
const db = require('../banco/db');

// Função para obter todos os clientes
const getAllClientes = async () => {
  const [rows] = await db.query('SELECT * FROM Clientes');
  return rows;
};

// Função para adicionar um novo cliente
const addCliente = async (nome_cliente) => {
  const [result] = await db.query('INSERT INTO Clientes (nome_cliente) VALUES (?)', [nome_cliente]);
  return { id: result.insertId, nome_cliente };
};

// Função para atualizar um cliente
const updateCliente = async (id, nome_cliente) => {
  await db.query('UPDATE Clientes SET nome_cliente = ? WHERE id_cliente = ?', [nome_cliente, id]);
  return { id, nome_cliente };
};

// Função para excluir um cliente
const deleteCliente = async (id) => {
  await db.query('DELETE FROM Clientes WHERE id_cliente = ?', [id]);
  return { message: 'Cliente excluído' };
};

module.exports = {
  getAllClientes,
  addCliente,
  updateCliente,
  deleteCliente
};
