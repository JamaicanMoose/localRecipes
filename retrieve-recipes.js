var map;
var lat = 999;
var lng = 999;
var userLocation = new google.maps.LatLng(lat, lng);
var myOptions = {
    zoom: 15, 
    center: userLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var request = new XMLHttpRequest();

//reading in input from user
$(document).ready(function() {
    console.log("ready");
    $('userLocation').keypress(function(entry) {
        console.log("enter");
        //taking location input (city, state)
        var keycode = entry.keyCode || entry.which;
        if(keycode == '13') {
            var citystate = $('userLocation').val();
            map = new google.maps.Map(document.getElementById("map"), myOptions);
            if ((myLat == 999) && (myLng == 999)) {
                getMyLocation(citystate);
            } 
        } 
    });
});

function getMyLocation(var) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
            userLocation = new google.maps.LatLng(lat, lng);
            map = new google.maps.Map(document.getElementById('map'), {
                center: userLocation,
                zoom: 15
            });
            var request = {
                location: userLocation,
                radius: '500',
                query: citystate
            };
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, function(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                    }
                }
            });

        
    } else {
        alert("Your geolocation cannot be retrieved. Where the heck are you?");
    }
}


//STEP 2
var testIngredients = {'carrots', 'lettuce', 'onions'};



/// grab the UL element
var li, ul = document.getElementById('ingredients');
/// grab the LI elements
var lis = testIngredients, i = lis.length;
      /// loop each LI and apply a click handler
      while( i-- ){
        if ( !(li = lis[i]) ){ continue };
        /// internet explorer version
        if ( li.attachEvent ) {
          li.attachEvent('onclick', clickEvent);
        }
        /// pretty much everything else
        else if ( li.addEventListener ) {
          li.addEventListener('click', clickEvent);
        }
      }

/// create our click event listener
var chosen = {};
var clickEvent = function( e ){
    /// fallback support for IE events
    if ( !e ){ e = window.Event };
        chosen.push(e.target ? e.target : e.srcElement);  
    }

const element = chosen;
ReactDOM.render(
  element,
  document.getElementById('ingredients')
);