/*google maps api*/

var myCenter=new google.maps.LatLng(7.88888,81.0000);


var dubai=new google.maps.LatLng(25.2048,55.2708);
var tokyo=new google.maps.LatLng(35.6833,139.6833);
var sydney=new google.maps.LatLng(-33.8650,151.2094);
var colombo=new google.maps.LatLng(6.9344,79.8428);

function initialize()
{
  var mapProp = {
    center:myCenter,
    zoom:2,
    mapTypeId:google.maps.MapTypeId.SATELLITE
    };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

  var infoWindow = new google.maps.InfoWindow({
  content:"SRI LANKA"
  });

  infoWindow.open(map,marker);

  var marker5=new google.maps.Marker({
    position: new google.maps.LatLng(25.2048,55.2708),
    animation:google.maps.Animation.BOUNCE
    });
    marker5.setMap(map);

  var infowindow5 = new google.maps.InfoWindow({
  content:"DUBAI"
  });

  infowindow5.open(map,marker5);

  var marker6=new google.maps.Marker({
    position: new google.maps.LatLng(35.6833,139.6833),
    animation:google.maps.Animation.BOUNCE
    });
    marker6.setMap(map);

  var infowindow6 = new google.maps.InfoWindow({
  content:"TOKYO"
  });

  infowindow6.open(map,marker6);

  var marker7=new google.maps.Marker({
    position: new google.maps.LatLng(-33.8650,151.2094),
    animation:google.maps.Animation.BOUNCE
    });
    marker7.setMap(map);

  var infowindow7 = new google.maps.InfoWindow({
  content:"SYDNEY"
  });

  infowindow7.open(map,marker7);



  var myTrip=[dubai,colombo,tokyo,colombo,sydney];
  var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#0000FF",
  strokeOpacity:0.8,
  strokeWeight:2
  });

  flightPath.setMap(map);

  var mapProp2 = {
    center: new google.maps.LatLng(7.88888,81.0000),
    zoom:7,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
  var marker2=new google.maps.Marker({
    position: new google.maps.LatLng(6.9344,79.8428),
    animation:google.maps.Animation.BOUNCE
    });
    marker2.setMap(map2);

  var infowindow2 = new google.maps.InfoWindow({
  content:"COLOMBO"
  });

  infowindow2.open(map2,marker2);

  var marker3=new google.maps.Marker({
    position: new google.maps.LatLng(7.2964,80.6350),
    animation:google.maps.Animation.BOUNCE
    });
    marker3.setMap(map2);

  var infowindow3 = new google.maps.InfoWindow({
  content:"KANDY"
  });

  infowindow3.open(map2,marker3);

  var marker4=new google.maps.Marker({
    position: new google.maps.LatLng(6.0536,80.2117),
    animation:google.maps.Animation.BOUNCE
    });
    marker4.setMap(map2);

  var infowindow4 = new google.maps.InfoWindow({
  content:"GALLE"
  });

  infowindow4.open(map2,marker4);
  
}

google.maps.event.addDomListener(window, 'load', initialize);


var main = function() {

/* Slide out menu. Push the body and the nav over by 285px over */

  $('.menu-link').click(function(){
    
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

  });


  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

};

 $(document).ready(main);

 /*menu section finder */

function scrollWin() {
    window.scrollTo(0, 700);
}
function scrollWin2() {
    window.scrollTo(0, 1350);
}
function scrollWin3() {
    window.scrollTo(0, 2600);
}
function scrollWin4() {
    window.scrollTo(0, 0);
}


/* weather forecast */

$(document).ready(function() {
 $.simpleWeather({
    woeid: '2189783', 
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    woeid: '2189780', 
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });

   $.simpleWeather({
    woeid: '2189781', 
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error+'</p>');
    }
  });
});
