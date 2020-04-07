const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/* 
 * Métodos HTTP:
 * GET > Buscar uma informação do back-end
 * POST > Criar uma informação no back-end
 * PUT > Alterar uma informação no back-end
 * DELETE > Deletar uma informação no back-end
*/

/*
 * Tipos de Parâmetros:
 * QUERY PARAMS > Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * ROUTE PARAMS > Parâmetros utilizados para identificar recursos
 * REQUEST BODY > Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
 * Tipos de Banco de Dados:
 * SQL > MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc
 * NoSQL > MongoDB, CouchDB, etc
*/