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

  const position = [42.098952, -88.278527];
      const centerPosition = [42.103458, -88.189805];

      function showGoogleMaps() {
        // Map positions
        const latLng = new google.maps.LatLng(position[0], position[1]);
        const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

        // Map options
        const mapOptions = {
          zoom: 12,
          streetViewControl: false,
          scaleControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: centerLatLng
        }

        // Create map
        map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

        // Show Marker
        marker = new google.maps.Marker({
          position: latLng,
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP
        });
      }

      // Maps event
      google.maps.event.addDomListener(window, 'load', showGoogleMaps);


});
