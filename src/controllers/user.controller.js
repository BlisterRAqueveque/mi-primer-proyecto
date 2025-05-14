import { request, response } from 'express';
import { getConnection } from '../database/database.js';

const create = /* acá un async, que marca la asincronía */ async (
  req = request,
  res = response
) => {
  //   const user = req.body;
  //! Acá un await para que espere a que se resuelva la promesa
  const connection = await getConnection();

  //> Lo comentamos para que nos quede en caso de necesitar probar
  //   const [result] = await connection.query(
  //     /* Acá la consulta SQL */
  //     'INSERT INTO users SET ?',
  //     /* Acá el objeto que vamos a insertar */
  //     user
  //   );
  //> Desestructuramos el objeto, sacando sus propiedades que necesitamos
  const { name, lastName, dni } = req.body;

  const [result] = await connection.query(
    /* Una consulta tradicional de MySQL */
    'INSERT INTO users(name, lastName, dni) VALUES (?, ?, ?)',
    /* Pasamos los valores parametrizados */
    [name, lastName, dni] //! Recuerden que deben respetar el orden
  );

  res.status(201).json({ ok: true, result, msg: 'Approved' });
};

const findAll = async (req = request, res = response) => {
  /* Instancia de la conexión a la base de datos */
  const connection = await getConnection();
  /* El resultado de la consulta */
  const [result, raw] = await connection.query('SELECT * FROM users');
  /* Retornamos el resultado */
  res.status(200).json({ ok: true, result, msg: 'Approved' });
};

const findOne = (req = request, res = response) => {};

const update = (req = request, res = response) => {};

const remove = (req = request, res = response) => {};

export const userController = { create, findAll, findOne, update, remove };
