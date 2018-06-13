'use strict';

const mongoose = require('../db');
// const mongoose = require('mongoose');
const User = require ('../models/user');

exports.get = (req, res, next) => {
	User// O primeiro parâmetro do find passamos o que estiver ativo no banco
		// já no segundo após a virgula estamo dizendo quais serão os campos mostrados
		if(.find({id: true }, 'nome apelido data hora')){
			.then(data => {
				res.status(200).send(data);
			}).catch(e => {
				res.status(400).send(e);
			});	
		}else	
		.find({}, 'nome apelido sexo data hora')												
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

	usr
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
	User
		.findByIdAndUpdate(req.body.id, {//Passando o Id como parametro para update do usuário
			$set: {//seta tudo o que veio da requisisão para o que vais er alterado no uauário
				nome: req.body.nome,
				apelido: req.body.apelido,
				data: req.body.data,
				hora: req.body.hora
			}
		}).then(x => {// depois que for alterado envie a resposta com status 200
			res.status(200).send({
				message: 'Usuário atualizado com sucesso!'
			});
		}).catch(e => {
			res.status(400).send({
			message: 'Falha ao tentar atualizar o Usuário',
			data: e
			});
		});
};
//Vem a requisicao para deletar
exports.delete = (req, res, next) => {
	User
		.findOneAndRemove(req.body.id)
		.then(x => {
			res.status(200).send({
				message: 'Usuário Removido com sucesso!'
			});
		}).catch(e => {
			res.status(400).send({
			message: 'Falha ao tentar remover o Usuário',
			data: e
			});
		});
};

//LER O LIVRO DO MARTIN FOWLER (NoSql Distiled).