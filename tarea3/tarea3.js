let cantidadDeSecciones = 1;

function agregarUnaSeccion(cantidadDeSecciones) {
  const nodoTiempo = document.createElement("div");
  nodoTiempo.innerHTML = `<section>
        <label for="horas-video${cantidadDeSecciones}">Horas</label>
        <input type="number" name="" id="horas-video${cantidadDeSecciones}" class="horas" />&nbsp;
        &nbsp;
        <label for="minutos-video${cantidadDeSecciones}">Minutos</label>
        <input
          type="number"
          name=""
          id="minutos-video${cantidadDeSecciones}"
          class="minutos"
        />&nbsp; &nbsp;
        <label for="segundos-video${cantidadDeSecciones}">Segundos</label>
        <input
          type="number"
          name=""
          id="segundos-video${cantidadDeSecciones}"
          class="segundos"
        />&nbsp; &nbsp;
      </section>`;
  nodoTiempo.id = `video${cantidadDeSecciones}`;
  document.querySelector("form").appendChild(nodoTiempo);
}

const $agregarVideo = document.querySelector("#agregar-video");
const $quitarVideo = document.querySelector("#quitar-video");


$agregarVideo.onclick = function () {
  cantidadDeSecciones++;
  agregarUnaSeccion(cantidadDeSecciones);
};

$quitarVideo.onclick = function () {
  if (cantidadDeSecciones > 1) {
    const nodoABorrar = document.querySelector(`#video${cantidadDeSecciones}`);
    document.querySelector("#formulario").removeChild(nodoABorrar);
    cantidadDeSecciones--;
  }
};

const $btnCalcularTiempoTotal = document.querySelector(
  "#calcular-tiempo-total"
);

function calcularTiempoTotal(tiempo) {
  const longitudDeTiempo = tiempo.length;
  let tiempoTotal = 0;
  for (let i = 0; i < longitudDeTiempo; i++) {
    tiempoTotal += Number(tiempo[i].value);
  }
  return tiempoTotal;
}

$btnCalcularTiempoTotal.onclick = function (event) {
  const horasTotales = document.querySelectorAll(".horas");
  const minutosTotales = document.querySelectorAll(".minutos");
  const segundosTotales = document.querySelectorAll(".segundos");

  let horas = calcularTiempoTotal(horasTotales);
  let minutos = calcularTiempoTotal(minutosTotales);
  let segundos = calcularTiempoTotal(segundosTotales);
  const SEGUNDOSPORMINUTO = 60;

  if (segundos >= SEGUNDOSPORMINUTO) {
    let auxiliarMinutos = 0;
    auxiliarMinutos += Math.trunc(segundos / SEGUNDOSPORMINUTO);
    segundos -= auxiliarMinutos * SEGUNDOSPORMINUTO;
    minutos += auxiliarMinutos;
  }
  if (minutos >= SEGUNDOSPORMINUTO) {
    let auxiliarHoras = 0;
    auxiliarHoras += Math.trunc(minutos / SEGUNDOSPORMINUTO);
    minutos -= auxiliarHoras * SEGUNDOSPORMINUTO;
    horas += auxiliarHoras;
  }

  horas = String(horas);
  minutos = String(minutos);
  segundos = String(segundos);

  document.querySelector(
    "#resultado-de-tiempo-total"
  ).textContent = `El tiempo total de los videos es de ${horas} horas, ${minutos} minutos y ${segundos} segundos`;

  event.preventDefault();
};


