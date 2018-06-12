'use strict';

const mongoose = require('mongoose');
const User = require ('../models/user');

//Vem a requisicão chamando o verbo post 
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
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