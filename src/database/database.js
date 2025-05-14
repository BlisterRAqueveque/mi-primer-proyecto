import mysql from 'mysql2/promise';
import { envs } from '../configuration/envs.js';

const connection = mysql.createConnection({
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DATABASE,
});

export const getConnection = () => {
  return connection;
};
