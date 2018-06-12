'use strict';

const mongoose = require('mongoose'); // fez a conexão com o mongoose

//Conectando ao  banco
const connect = mongoose.connect('mongodb://teste:123teste@ds016718.mlab.com:16718/nodeapi');

module.exports = {
	mongoose: mongoose,
	db : connect
};