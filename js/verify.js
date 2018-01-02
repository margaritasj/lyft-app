$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/signup.html';
  });

  /* -------- Agregar en el alert el número que se ingreso ------ */
  var codeCountry = window.localStorage.getItem('codeCountry');
  var numPhone = window.localStorage.getItem('numberPhone');
  $('#num-phone').html(codeCountry + ' ' + numPhone);

  /* -------- Deshabilitar elementos al cargar la vista------- */
  $('#c1').focus();
  $('#c2').prop('disabled', true);
  $('#c3').prop('disabled', true);
  $('#btn-next').prop('disabled', true);

  /* -------- Focus para el primer input al cargar la pagina------- */
  $('#c1').focus();

  /* -------- Validando inputs con cantidad de digitos------- */
  // Expresion regular que solo acepta numeros con una cantidad de 9 digitos
  var pattern = /^\d{1}$/;

  $('#c1').keyup(function () {
    var firstDigit = this.value;

    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (pattern.test(firstDigit)) {
      $('#c2').prop('disabled', false);
      $('#c2').focus();
      return true;
    } else {
      $('#btn-next').prop('disabled', true);
      return false;
    }
  });

  $('#c2').keyup(function () {
    var secondDigit = this.value;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (pattern.test(secondDigit)) {
      $('#c3').prop('disabled', false);
      $('#c3').focus();
      return true;
    } else {
      $('#btn-next').prop('disabled', true);
      return false;
    }
  });

  $('#c3').keyup(function () {
    var thirdDigit = this.value;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (pattern.test(thirdDigit)) {
      $('#btn-next').prop('disabled', false);
      return true;
    } else {
      $('#btn-next').prop('disabled', true);
      return false;
    }
  });

  /* -------- Validando el código ingresado con el código generado ------- */
  $('#warning').addClass('hidden');
  $('#btn-next').click(function () {
    var generatedToCode = window.localStorage.getItem('numberRandom');
    var codeToVerify = $('#c1').val() + $('#c2').val() + $('#c3').val();

    if (codeToVerify === generatedToCode) {
      window.location.href = 'signup-email.html';
      $('#info').addClass('show');
      $('#info').removeClass('hidden');
    } else {
      $('#warning').addClass('show');
      $('#warning').removeClass('hidden');
      $('#info').removeClass('show');
      $('#info').addClass('hidden');
    }
  });

  /* -------- Generar un número aleatorio ------- */
  $('#btn-resend').click(function () {
    // numero excluido
    var MAX = 1000;
    // numero incluido
    var MIN = 100;
    var numRandom = Math.round(Math.random() * (MAX - MIN) + MIN);
    window.localStorage.setItem('numberRandom', numRandom);

    alert('LAB - ' + window.localStorage.getItem('numberRandom'));
  });

});