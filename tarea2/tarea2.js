const mostrarInformacionDeUsuario = document.querySelector(
  "#mostrar-informacion-de-usuario"
);
const botonCalcular = document.querySelector("#btn-calcular");

function cambiarContenidoDeH1(nombreDeUsuario) {
  const tituloH1 = document.querySelector("h1");
  tituloH1.innerText = `Bienvenido, ${nombreDeUsuario}!`;
}

function ocultarDatos() {
  document.querySelector("#mostrar-informacion").style.display = "none";
}

function mostrarDatos() {
  document.querySelector("#mostrar-informacion").style.display = "block";
}

function ocultarBtnCalcular(){
  botonCalcular.style.display = 'none';
};


function mostrarBotonReset(){
  document.querySelector('#reset').style.display = 'block';
  
};

function ocultarBtnReset(){
  document.querySelector("#reset").style.display = "none";
};

function recargarPagina(){
  location.reload();
};

ocultarDatos();
ocultarBtnReset();

botonCalcular.onclick = function (event) {
  const $nombreDeUsuario = document.querySelector("#nombre-de-usuario").value;
  const $segundoNombreDeUsuario = document.querySelector(
    "#segundo-nombre-de-usuario"
  ).value;
  const $apellidoDelUsuario = document.querySelector(
    "#apellido-de-usuario"
  ).value;
  const $edadDeUsuario = document.querySelector("#edad-de-usuario").value;

  mostrarInformacionDeUsuario.innerText = `Su nombre es ${$nombreDeUsuario},
  su segundo nombre es ${$segundoNombreDeUsuario},
  su apellido es ${$apellidoDelUsuario}
  y su edad es ${$edadDeUsuario} años.`;

  cambiarContenidoDeH1($nombreDeUsuario);
  mostrarDatos();
  ocultarBtnCalcular();
  mostrarBotonReset();
  event.preventDefault();
};
