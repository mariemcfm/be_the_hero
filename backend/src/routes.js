const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

// Rotas
routes.post('/sessions', sessionController.create); // Fazendo o login

routes.get('/ongs', ongController.index); // Listando as ongs cadastradas
routes.post('/ongs', ongController.create); // Cadastrando ongs

routes.get('/profile', profileController.index); // Listando os casos de uma ong específica

routes.get('/incidents', incidentController.index); // Listando os casos cadastrados
routes.post('/incidents', incidentController.create); // Cadastrando casos
routes.delete('/incidents/:id', incidentController.delete); // Deletando um caso


module.exports = routes;