// models/Venda.js

const db = require('../banco/db');

async function realizarVenda(cliente, celular, quantidade, area) {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Verificar a quantidade disponível na área especificada
    const [alocacao] = await connection.query(
      'SELECT quantidade FROM Alocacao WHERE area = ? AND celular = ?',
      [area, celular]
    );

    if (alocacao.length === 0 || alocacao[0].quantidade < quantidade) {
      throw new Error('Estoque insuficiente para a venda');
    }

    // Atualizar o estoque na tabela Alocacao
    await connection.query(
      'UPDATE Alocacao SET quantidade = quantidade - ? WHERE area = ? AND celular = ?',
      [quantidade, area, celular]
    );

    // Inserir a venda na tabela Venda
    const [resultadoVenda] = await connection.query(
      'INSERT INTO Venda (cliente, celular, quantidade, area) VALUES (?, ?, ?, ?)',
      [cliente, celular, quantidade, area]
    );

    await connection.commit();
    return { id_venda: resultadoVenda.insertId, message: 'Venda realizada com sucesso' };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  realizarVenda
};
