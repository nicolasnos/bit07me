const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let textarea = document.getElementById("textarea").value;
  let campos = {
    rNombre: nombre,
    rCorreo: correo,
    rMensaje: textarea,
  };
  console.log(campos);
  document.getElementById("respuesta").innerHTML = `tu mensaje fue enviado`;
});
