'use strict';

const express = require('express');
const router = express.Router();
//Chamada do controler para a rota com post
const controller = require('../controllers/usersController');

//Tudo o que receber será delegado para o controller
router.get('/', controller.get); 
router.post('/', controller.post);//controller com metodo post
router.put('/:id', controller.put);//controller com metodo put
router.delete('/', controller.delete);//controller com metodo delete

module.exports = router;