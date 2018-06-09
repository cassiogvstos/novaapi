'use strict';

const express = require('express');
const bodyParser = require('body-parser');//Converte o que vem no corpo da requisicão para JSON

const app = express();
const router = express.Router();

//Carregamento de rotas
const routeIndex = require('./routes/indexRoute');
const routeUsers = require('./routes/usersRoute');

// Aqui todo o conteúdo será passado para JSON
app.use(bodyParser.json());
/*converte a url ex. quando digitado um "espaco" aparece um %20 que é um código*/
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routeIndex);
app.use('/usersRoute', routeUsers);

module.exports = app;//Exportando o modulo app.