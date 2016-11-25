$(document).ready(function(){
    var populateClientList = function() {
        var smallList = ["Abbot Labs","American Express", "Amgen", "AT&T", "Bristol Myers-Squibb", "Cadillac", "Chrysler", "Maybelline", "McDonalds", "Merck", "Nationwide", "Nissan", "Powerball", "Purina Mills"];
    
        var i = 0;
        $.each($(".client-list-section ul.client-list li"), function(i, item){
            $(item).html(smallList[i]);
            i++;
        });
    } 
    populateClientList();
    
    $('.mobile-control').on('click', function(){
        $(".mobile-nav-ul").toggleClass("closed");
    });
    
    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 1 || $("body").scrollTop() > 1) {
            $(".navigation").addClass("affixed");
            $("ul.desktop-nav-ul").addClass("closed");
        } else {
            $(".navigation").removeClass("affixed");
            $("ul.desktop-nav-ul").removeClass("closed");
        }
    });
    
    $(".desktop-nav-rollout").on('click', function(){
        $("ul.desktop-nav-ul").toggleClass("closed");
    })
    
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
   }
    
    //google.maps.event.addDomListener(window, 'load', init_map);
});

/*
$(window).load(function(){
    $("body").addClass("loading");
    $(".load-icon").removeClass("hidden");
    
    var snap = Snap.select('.loader');
    var arc1 = snap.select('#arc1');
    var arc2 = snap.select('#arc2');
    var circle = snap.select('#circle');

    var len1 = arc1.getTotalLength();
    var len2 = arc2.getTotalLength();

    arc1.attr({
        'stroke-dasharray': len1,
        'stroke-dashoffset': len1
      }).animate({
        'stroke-dashoffset': 0
      }, 2000, mina.easeinout);

    arc2.attr({
        'stroke-dasharray': len2,
        'stroke-dashoffset': len2
      }).animate({
        'stroke-dashoffset': 0
      }, 2000, mina.easeinout);



    arc1.animate({ d: "M39.198,64c0-13.709,11.093-24.802,24.802-24.802 M88.803,64c0-13.709-11.094-24.802-24.803-24.802" }, 2000, mina.easeinout);
    arc2.animate({ d: "M88.803,64c0,13.708-11.094,24.802-24.803,24.802 M39.198,64c0,13.709,11.093,24.803,24.802,24.803" }, 2000, mina.easeinout);

    setTimeout(function () {
       circle.animate({r: 44}, 500, mina.bounce)
    }, 750);
    
    setTimeout(function(){
        $("body").removeClass("loading");
        $(".load-icon").hide().addClass("hidden");
        $(".non-loader-wrapper").hide().removeClass("hidden").fadeIn("750");
    }, 750);
})
*/