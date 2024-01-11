const $numeros = document.querySelectorAll(".numero");
function colocarNumerosEnUnArray(numeros) {
  const arregloDeNumeros = [];
  for (let i = 0; i < numeros.length; i++) {
    arregloDeNumeros.push(Number(numeros[i].textContent));
  }
  return arregloDeNumeros;
}

const arregloDeNumeros = colocarNumerosEnUnArray($numeros);

function calcularPromedio(arregloDeNumeros) {
  let totalDeNumeros = 0;
  const longitudDelArreglo = arregloDeNumeros.length;
  for (let i = 0; i < longitudDelArreglo; i++) {
    totalDeNumeros += arregloDeNumeros[i];
  }
  return (totalDeNumeros / longitudDelArreglo).toFixed(2).toString();
}

function calcularNumeroMayor(arregloDeNumeros) {
  let numeroMayor = arregloDeNumeros[0];
  for (let i = 1; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] > numeroMayor) {
      numeroMayor = arregloDeNumeros[i];
    }
  }
  return numeroMayor.toString();
}

function calcularNumeroMenor(arregloDeNumeros) {
  let numeroMenor = arregloDeNumeros[0];
  for (let i = 1; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] < numeroMenor) {
      numeroMenor = arregloDeNumeros[i];
    }
  }
  return numeroMenor.toString();
}

function calcularElNumeroMasRepetido(arregloDeNumeros) {
  let numeroMasRepetido = 0;
  let vecesQueEstaRepetido = 0;
  for (let i = 0; i < arregloDeNumeros.length; i++) {
    let numeroDeRepeticiones = 0;
    const numeroAComparar = arregloDeNumeros[i];
    for (let j = i + 1; j < arregloDeNumeros.length; j++) {
      if (numeroAComparar === arregloDeNumeros[j]) {
        numeroDeRepeticiones++;
      }
    }
    if (numeroDeRepeticiones > vecesQueEstaRepetido) {
      numeroMasRepetido = numeroAComparar;
    }
  }
  return numeroMasRepetido.toString();
}

const $btnCalcular = document.querySelector("#btn-calcular");

$btnCalcular.onclick = function () {
  const $promedio = document.querySelector("#promedio");
  const $numeroMasAlto = document.querySelector("#numero-mas-alto");
  const $numeroMasBajo = document.querySelector("#numero-mas-bajo");
  const $numeroMasRepetido = document.querySelector("#numero-mas-repetido");

  $promedio.textContent = `El promedio de numeros es ${calcularPromedio(
    arregloDeNumeros
  )}`;
  $numeroMasAlto.textContent = `El numero mas alto es ${calcularNumeroMayor(arregloDeNumeros)}`;
  $numeroMasBajo.textContent = `El numero mas bajo es ${calcularNumeroMenor(arregloDeNumeros)}`;
  $numeroMasRepetido.textContent = `El numero mas frecuente es ${calcularElNumeroMasRepetido(arregloDeNumeros)}`;
};
