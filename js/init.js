$(document).ready(function () {
  // Init Sidenav
  $('.button-collapse').sideNav();

  // Init ScollFire
  $('.scrollspy').scrollSpy();


// Init ScollFire

  const options = [
    {
      selector: '.main-text', offset:0, callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.navbar-fixed', offset:1500, callback: function() {
        $('nav').removeClass('transparent');
        $('nav').addClass('blue-grey darken-2');
      }
    }
  ];

  Materialize.scrollFire(options);


});
