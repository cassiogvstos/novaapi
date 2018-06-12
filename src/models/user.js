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
		// required: true,
		// trim: true
	},
	// O slug serve para compor a URL ex. cadeira gamer; com o slug ficara na url cadeira-gamer,
	//  este será único e o index é por que ele terá um index para busca
	// slug: {
	// 	type: String,
	// 	// required: true,
	// 	trim: true
	// 	// index: true,
	// 	// unique: true
	// },
	apelido: {
		type: String,
		// required: true
	},
	sexo: {
		type: String,
		// required: true
	},
	//aqui o active é para ver se ele está ativo ou não
	// active: {
	// 	type: Boolean,
	// 	// required: true,
	// 	default: true
	// },
	data: {
		type: String,
		// required: true
	},
	hora: {
		type: String,
		// required: true
	}
	// //A tags servirá para facilitar a busca, terá um array de string
	// tags: [{
	// 	type: String,
	// 	// required: true
	// }]
});

module.exports = mongoose.mongoose.model('User', schema);

