$(document).ready(function() {


  // creo una lista di icone e le uso come indice per le immagini
  for (var i = 0; i < 4; i++) {
    $('.nav').append('<i></i>')
    $('.nav > i').addClass('fas fa-circle')
    $('.nav > i:first').addClass('first active')
    $('.nav > i:nth-child(4)').addClass('last')
  }

  function nextImg() {
    if ($("img.active").hasClass("last")) {
      $('img.first').addClass('active');
      $('img.last').removeClass('active');
      // applico lo stesso meccanismo alle icone
      $('.nav > i.first').addClass('active');
      $('.nav > i.last').removeClass('active');

    } else {
      $('img.active').removeClass('active').next().addClass('active')

      $('.nav > i.active').removeClass('active').next().addClass('active')

    }
  }

  function prevImg() {
    if ($("img.active").hasClass("first")) {
      $('img.first').removeClass('active');
      $('img.last').addClass('active');
      // applico lo stesso meccanismo alle icone
      $('.nav > i.last').addClass('active');
      $('.nav > i.first').removeClass('active');

    } else {
      $('img.active').removeClass('active').prev().addClass('active')
      $('.nav > i.active').removeClass('active').prev().addClass('active')

    }
  }





  $('.next').click(function() {
    nextImg()
  })


  $('.prev').click(function() {
    prevImg()
  })

  $(document).keydown(function(e) {
    if (e.which === 39) {
      nextImg();
    }

    if (e.which === 37) {
      prevImg();
    }
  });


  // creo una funzione per selezionare le immagini direttamente delle icone
  $('.nav > i').click(function() {
    $('.nav > i.active').removeClass('active')
    $(this).addClass('active');
    // trovo la posizione dell'icona (indice)
    var i = $('i.active').index();
    $('img.active').removeClass('active')
    // uso l'indice per trovare e selezionare l'immagine
    $('img').eq(i).addClass('active')
  })

})
