/*
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}
*/
let soma = 0;
let contador = 1;

let qtdNumeros = prompt(
  'Digite a quantidade de números para o cálculo da média:'
);

while (contador <= qtdNumeros) {
  let numero = parseInt(prompt('Digite o numero:'));
  soma += numero;
  contador++;
}
console.log(contador);
console.log(qtdNumeros);
console.log(soma);
let media = soma / qtdNumeros;
console.log(media);
alert(`Isso ai! Você descobriu a media é ${media}`);
