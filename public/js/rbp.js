//RBP js by Abhi Nayar


$(document).ready(function(){
    /* Map JS */
   function init_map(){
        var myOptions = {
           zoom:15,
           center:new google.maps.LatLng(35.122999,-89.78990499999998),
           mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

        marker = new google.maps.Marker({
            map: map,position: new google.maps.LatLng(35.1217, -89.79),
            icon: './public/img/common/rbpMapMarker.png'
        });

        infowindow = new google.maps.InfoWindow({content:"<b>The Right Brain People</b><br/>279 Norseman Drive<br/>Cordova, TN, 38018" });

        google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
        infowindow.open(map,marker);
       
       setTimeout(function(){
            $(".landing .moving-bg").addClass("animate");
        }, 1000);   
   }
    
    google.maps.event.addDomListener(window, 'load', init_map); 
});