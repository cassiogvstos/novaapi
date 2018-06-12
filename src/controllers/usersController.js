'use strict';

const mongoose = require('../db');
// const mongoose = require('mongoose');
const User = require ('../models/user');

exports.get = (req, res, next) => {
	User
		.find({})
		.then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send(e);
		});
}

//Vem a requisicão chamando o verbo post 
exports.post = (req, res, next) => {
	let usr = new User(req.body);
	
	// User.nome = req.body.type;
	// User.apelido = req.body.type;
	// User.sexo = req.body.type;

	let
	   .save()
	   .then(x => {
			res.status(201).send({
				message: 'Usuário cadastrado com sucesso!'
			});   	
	   }).catch(e => {
	   		res.status(400).send({
	   			message: 'Falha ao tentar cadastrar o usuário',
	   			data: e
	   		});
	   });
};

//Vem requisicão com put para atualizar 
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};
//Vem a requisicao para deletar
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

//LER O LIVRO DO MARTIN FOWLER (NoSql Distiled).