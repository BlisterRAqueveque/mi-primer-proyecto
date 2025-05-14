import { getConnection } from '../database/database.js';
// Importamos estos tipos, para tener mas accesible los métodos de express
import { request, response } from 'express';

const getBooks = async (req = request, res = response) => {
  try {
    //> 1. Primero creamos una conexión
    const connection = await getConnection();

    //> 2. Mandamos la QUERY, para obtener la información
    const [books, fields] = await connection.query('SELECT * FROM books');

    //> 3. Le retornamos la información al usuario, ajustando el mensaje
    res.status(200).json({ ok: true, result: books, msg: 'Approved' });
  } catch (err) {
    //! En caso de error, debemos comunicarle al usuario
    res.status(400).json({ ok: false, err, msg: 'Some error' });
  }
};

export const booksController = { getBooks };
