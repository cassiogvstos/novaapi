'use strict';

const mongoose = require('mongoose'); // fez a conexão com o mongoose

//Conectando ao  banco
const connect = mongoose.connect('mongodb://node:node4321@ds016718.mlab.com:16718/nodeapi');

module.exports = {
	mongoose: mongoose,
	db : connect
};