const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event){
  const MESES_DE_UN_AñO = 12;
  const $salarioUsuario = Number(
    document.querySelector("#salario-usuario").value
  );
  const $salarioMensual = document.querySelector('#salario-mensual'); 
  $salarioMensual.value = $salarioUsuario / MESES_DE_UN_AñO;

  event.preventDefault();
  
};
