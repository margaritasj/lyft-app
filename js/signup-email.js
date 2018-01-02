$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/verify.html';
  });

  /* -------- Deshabilitar elementos al cargar la vista------- */
  $('#btn-next').prop('disabled', true);

    /* -------- Focus para el primer input al cargar la pagina------- */
    $('#name').focus();



});