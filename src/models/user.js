'use strict';

const mongoose = require('../db');
const Schema = mongoose.mongoose.Schema;
/*+---------------------------------------------------+
| O trim dentro do JSON do nome servirá para remover  |	
| todos os espaços em branco antes e depois da String |
+-----------------------------------------------------+*/
const schema = new Schema({
	nome: {
		type: String,
		required: true,
		trim: true
	},
	apelido: {
		type: String,
		required: true
	},
	sexo: {
		type: String,
		required: true
	},
	data: {
		type: String,
		required: true
	},
	hora: {
		type: String,
		required: true
	},
});

module.exports = mongoose.mongoose.model('User', schema);