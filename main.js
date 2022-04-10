var activar_reloj, activar_cronometro, activar_temporizador
var start_crono, flag_crono, start_temp, stop_temp, restart_temp

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function evento_activar(show, hide1, hide2) {
  var div_show, div_hide1, div_hide2;

  div_show = document.getElementById(show.id.split("_")[1]);
  div_hide1 = document.getElementById(hide1.id.split("_")[1]);
  div_hide2 = document.getElementById(hide2.id.split("_")[1]);
  //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
  //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
  show.addEventListener("click", () => {
    reset();
    div_show.hidden = false;
    div_hide1.hidden = true;
    div_hide2.hidden = true;
  });

}

function reset() {
  var fecha = new Date()
  document.getElementById("text_reloj").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  document.getElementById("text_cronometro").innerHTML = "00:00:00";
  document.getElementById("text_temporizador").innerHTML = "00:00:00";
}

/* 
Función para establecer la funcionalidad de los botones
*/
function botones() {
  //Botones de acción.
  //start_crono = document.getElementById("start_cronometro");
  //flag_crono = document.getElementById("flag_cronometro");
  start_temp = document.getElementById("start_temporizador");
  stop_temp = document.getElementById("stop_temporizador");
  restart_temp = document.getElementById("restart_temporizador");
  pause_temp = document.getElementById("pause_temporizador");

  //Botones de selección.
  activar_reloj = document.getElementById("activar_reloj");
  activar_cronometro = document.getElementById("activar_cronometro");
  activar_temporizador = document.getElementById("activar_temporizador");

  //Funciones de eventos activar.
  evento_activar(activar_reloj, activar_cronometro, activar_temporizador);
  evento_activar(activar_cronometro, activar_reloj, activar_temporizador);
  evento_activar(activar_temporizador, activar_cronometro, activar_reloj);

  //Funcion de eventos de acción.
  //evento_crono(start_crono, flag_crono)
  evento_temporizador(start_temp, stop_temp, restart_temp, pause_temp)
}


function __main__() {
  preload();
  reset();
  botones();
  var reloj1 = new reloj(document.getElementById("text_reloj"), new Date())
  var crono1 = new crono(0, 0, 0, 0, document.getElementById("text_cronometro"))
  var temporizador1 = new temporizador
  crono1.evento_crono()
   //temporizador1.evento_temporizador
   //temporizador1.stopTemporizador
   //temporizador1.crearTemporizador
   //temporizador1.activarTemp
  reloj1.activarReloj()
  reloj1.crearIntervaloReloj()


  //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
  //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

  window.intervalo_reloj = null;
  window.intervalo_cronometro = null;
  window.temporizador_temporizador = null;
  window.intervalo_temporizador = null;
}

__main__();