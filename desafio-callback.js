
const exec =  (callbak, numero1, numero2) => callbak(numero1, numero2)

const calc = (n1, n2) => console.log(n1 + n2)

exec(calc, 2, 7 )