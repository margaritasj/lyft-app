$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/signup.html';
  });

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

});