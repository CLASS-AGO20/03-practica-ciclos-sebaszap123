export default class App {
  factorial(numero) {
    let total = 1;
    for (let i = 1; i <= numero; i++) {
      total = total * i;
    }
    return total;
  }
  
  convertirAString(numero) {
    let i = 1;
    let resultado = "";
    while (i <= numero) {
      resultado = "*" + resultado;
      i++;
    }
    return resultado;
  }

  obtenerDivisibles(numero) {
    let i = numero;
    let divisibles = 0;
    let a = numero;
    do {
      if(a % i == 0) {
        divisibles = divisibles + 1;
      }
      i--;
    } while (i>=1);
    return divisibles
  }

  elevar(numero, potencia) {
    let resultado = 1;
    for (let i = 1; i <= potencia; i++) {
      resultado = resultado * numero;
    }
    return resultado;
  }
}

let app = new App();

console.log(app.factorial(10));
console.log(app.convertirAString(10));
console.log(app.obtenerDivisibles(6));
console.log(app.elevar(2, 3));
