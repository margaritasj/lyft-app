$(document).ready(function () {
  /* -------- Funcionalidad al ancor para retroceder a pagina anterior-------- */
  $('#left').click(function () {
    window.location.href = '../views/verify.html';
  });

  /* -------- Deshabilitar elementos al cargar la vista------- */
  $('#btn-next').prop('disabled', true);

  /* -------- Ocultando elemento al cargar la vista------- */
  $('#danger').addClass('hidden');

  /* -------- Focus para el primer input al cargar la pagina------- */
  $('#name').focus();

  /* -------- Validando inputs------- */
  // Expresion regular que comprueba nombre propio y que empiecen por vocal si ésta va acentuada
  usernameRegex = /^[A-Z a-záéíóúÁÉÍÓÚñÑ-]*$/;
  emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/

  function disabledButton() {
    $('#btn-next').prop('disabled', true);
    $('#danger').addClass('show');
    $('#danger').removeClass('hidden');
  }

  function disabledButton2() {
    $('#btn-next').prop('disabled', true);
    $('#danger').addClass('hidden');
    $('#danger').removeClass('show')
  }

  $('#name').keyup(function () {
    var name = this.value;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (usernameRegex.test(name)) {
      disabledButton2();
      return true;
    } else {
      disabledButton();
      return false;
    }
  });

  $('#last-name').keyup(function () {
    var lastName = this.value;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (usernameRegex.test(lastName)) {
      disabledButton2();
      return true;
    } else {
      disabledButton();
      return false;
    }
  });

  $('#email').keyup(function () {
    var email = this.value;
    // test para realizar prueba si valor del input coincide con el patron . Devuelve verdadero o falso
    if (emailRegex.test(email)) {
      disabledButton2();
      return true;
    } else {
      disabledButton();
      return false;
    }
  });

  // validando el check para activar el btn-next
  $('#check').click(function (event) {
    if (event.target.checked) {
      $('#btn-next').prop('disabled', false);
    } else {
      $('#btn-next').prop('disabled', true);
    }
  });

  /* -------- Dirigir a la vista check------- */
  $('#btn-next').click(function (event) {
    window.location.href = 'check.html';
  });

});