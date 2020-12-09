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
    let result = "";
    let i = "";

    do {
      i = i + "*";
      result = result + i;
    } while (i < numero);

    console.log(result);
  }
}

let app = new App();

console.log(app.factorial(10));
console.log(app.convertirAString(10))
