$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/signup.html';
  });

  /* -------- Deshabilitar elementos al cargar la vista------- */
  $('#c2').prop('disabled', true);
  $('#c3').prop('disabled', true);
  $('#btn-next').prop('disabled', true);

 
});