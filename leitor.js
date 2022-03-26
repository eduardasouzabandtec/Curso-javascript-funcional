const FS = require('fs');
const PATH = require('path');

const CAMINHO = PATH.join(__dirname, 'dados.txt');

function exibir(error, dados) {
    console.log(dados.toString())
}

const CONTEUDO = FS.readFileSync(CAMINHO)
console.log(CONTEUDO.toString())
