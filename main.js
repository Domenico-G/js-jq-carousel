$(document).ready(function() {
  // creo una funzione che al click della freccia in avanti scorra le immagini
  $('.next').click(function() {
    // verifico le classi delle immagini con hasclass, se è presente l'ultimo elemento torna al primo
    if ($("img.active").hasClass("last")) {
      $('img.first').addClass('active');
      $('img.last').removeClass('active');
      // applico lo stesso meccanismo alle icone
      $('i.first').addClass('active');
      $('i.last').removeClass('active');

    } else {
      $('img.active').removeClass('active').next().addClass('active')

      $('i.active').removeClass('active').next().addClass('active')

    }
  })

  // creo una funzione che al click della freccia in dietro scorra le immagini
  $('.prev').click(function() {
    // verifico le classi delle immagini con hasclass, se è presente il primo elemento torna all'ultimo
    if ($("img.active").hasClass("first")) {
      $('img.first').removeClass('active');
      $('img.last').addClass('active');
      // applico lo stesso meccanismo alle icone
      $('i.last').addClass('active');
      $('i.first').removeClass('active');

    } else {
      $('img.active').removeClass('active').prev().addClass('active')
      $('i.active').removeClass('active').prev().addClass('active')

    }
  })



})
