const CARRINHO = [
    {nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true},
    {nome: 'Cadernos', quantidade: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', quantidade: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true}
]


const FRAGEIS = CARRINHO.filter(item => item.fragil === true);
console.log('Itens frageis:', FRAGEIS);

const VALOR_TOTAL = FRAGEIS.map(item => { return { 'item': item.nome, 'valor': item.quantidade * item.preco}});
console.log('Valor total dos itens:', VALOR_TOTAL)

const TOTAL = FRAGEIS.map(item =>item.quantidade * item.preco )


const MONTAMEDIA = (acc, el) => {
    const NEW_QUANTIDADE = acc.quantidade + 1;
    const NEW_TOTAL = acc.total + el;
    console.log(acc, el)
    return {
        quantidade: NEW_QUANTIDADE,
        total: NEW_TOTAL,
        media: NEW_TOTAL / NEW_QUANTIDADE
    }
}
const TRANSFORMA_MEDIA = {quantidade: 0, total: 0, media: 0};
const MEDIA = TOTAL.reduce(MONTAMEDIA, TRANSFORMA_MEDIA)
console.log('Valor media:', MEDIA)
