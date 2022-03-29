const FS = require('fs');
const PATH = require('path');



const CAMINHO = PATH.join(__dirname, 'dados.txt');

function lerConteudo (caminho) {
        return new Promise( resolve => {
            FS.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
        })
}


lerConteudo(CAMINHO).then(conteudo => console.log(conteudo))