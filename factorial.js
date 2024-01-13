function calcularFactorial() {
    let numeroInput = document.getElementById('numeroInput').value;
  
    if (isNaN(numeroInput) || numeroInput === "") {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    let numero = parseInt(numeroInput);
  
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
  
    document.getElementById('resultado').innerHTML = "El factorial de " + numero + " es: " + factorial;
  }
  