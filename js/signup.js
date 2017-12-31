$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/homepage.html';
  });

  /* -------- Deshabilitar elementos al carga la vista------- */
  $('#num-phone').prop('disabled', true);
  $('#btn-next').prop('disabled', true);

});