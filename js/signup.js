$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/homepage.html';
  });

  /* -------- Deshabilitar elementos al cargar la vista------- */
  $('#code-country').prop('disabled', true);
  $('#num-phone').prop('disabled', true);
  $('#btn-next').prop('disabled', true);

  /* -------- Obteniendo codigo al momento de seleccionar la bandera------- */
  $('#country a').click(function () {
    var code = $(this).data('value');
    $('#select-country').html($(this).html() + '<span class="caret"></span>');
    $('#code-country').val(code);
    $('#num-phone').prop('disabled', false);
    $('#num-phone').focus();
  });

  /* -------- Validando el input de num-phone------- */
  $('#num-phone').keyup(function () {
    var numPhone = this.value;
    // /[0-9]/ --- expresion para aceptar solo numeros
    // \d --- encuentra un digito
    // d{n} --- coincide con la cantidad de digitos que inca n
    // Expresion regular que solo acepta numeros con una cantidad de 9 digitos
    var pattern = /^\d{9}$/;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (pattern.test(numPhone)) {
      $('#info').addClass('hidden');
      $('#btn-next').prop('disabled', false);
      return true;
    } else {
      $('#info').addClass('show');
      $('#info').removeClass('hidden');
      $('#btn-next').prop('disabled', true);
      return false;
    }
  });

});