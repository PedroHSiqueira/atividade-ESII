const prompt = require("prompt-sync")();

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
  const value1 = parseInt(v1);
  const value2 = parseInt(v2);

  return value1 + value2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
  const value1 = Number(v1);
  const value2 = Number(v2);

  return value1 - value2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
  const  TotalMult = v1 * v2;
  return TotalMult; 
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
  return Math.sqrt(v1);
}

console.log(`
   ______________________________
 /  \                             \.
|   |                            |.
 \_  |    1 - Somar               |.
    |                            |.
    |    2 - Subtrair            |.
    |                            |.
    |    3 - Multiplicar         |.
    |                            |.
    |    4 - Dividir             |.
    |                            |.
    |    5 - Raiz Quadrada       |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /                            /.
    \_/dc__________________________/.
`);

const option = Number(prompt("Escolha uma Operação: "));
const firstNumber = Number(prompt("Primeiro Numero: "));
const secondNumber = Number(prompt("Segundo Numero: "));

switch (option) {
  case 1:
    console.log(
      `A soma de ${firstNumber} e ${secondNumber} é : ${sum(firstNumber, secondNumber)}`);
    break;
  case 2 :
    console.log(
      `A subtração de ${firstNumber} e ${secondNumber} é : ${sub(firstNumber, secondNumber)}`);
      break;
  case 3 :
    console.log(
      `A multiplicação de ${firstNumber} e ${secondNumber} é : ${mult(firstNumber, secondNumber)}`);
      break;
  case 5 :
    console.log(`A raiz quadrada de ${firstNumber} é ${square(firstNumber)}`);
      break;
}
