// 'use strict'//forca o javaScript a verificar a sintax e acentuacões
const app = require('../src/app');//Importando módulo da aplicacão que se encontra dentro do caminho passado
const debug = require('debug')('APINode:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

//Dizendo ao servidor onde ele vai ouvir
server.listen(port);
server.on('error', onError);//Chama a funcão onError que está logo abaixo
server.on('listening', onListening);// chamada da funcao onListening que está logo abaixo
console.log('API rodando na porta ' + port);

//Criando uma funcao que busca uma porta que esteja disponível caso a porta 3000 esteja ocupada
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

/*Criando uma funcao que informa qual o tipo de erro que está dando ao tentar rodar o server.
**Não estarão setados todos os tipos de erro.*/
function onError(error) {
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' 
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/*Criando uma funcão que chama o debug que está instânciado acima*/
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}