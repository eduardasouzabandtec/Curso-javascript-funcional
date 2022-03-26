
const SOMAR = numero1 => numero2 => numero3 => console.log((numero1 + numero2)+ numero3)
SOMAR(2)(3)(5);



const CALCULAR = numero1 => numero2 =>  fn => fn(numero1, numero2);
CALCULAR(9)(5)((numero1, numero2) => console.log(numero1 * numero2))