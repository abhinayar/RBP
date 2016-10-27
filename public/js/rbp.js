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
    //google.maps.event.addDomListener(window, 'load', init_map);
    
    $(".mobile-hamburger").click(function(){
        $(".landing-nav .navigation").toggleClass("closed");
        $(this).toggleClass("active");
    })
    
    $(window).on('resize', function(){
        if($(this).width() >= 768) {
           $(".landing-nav").removeClass("mobile");
           $(".landing-nav").addClass("desktop");
        } 
        
        else {
            $(".landing-nav").removeClass("desktop");
           $(".landing-nav").addClass("mobile");
        }
    });
    
    $(window).load(function(){
        if($(this).width() >= 768) {
           $(".landing-nav").removeClass("mobile");
           $(".landing-nav").addClass("desktop");
        } 
        
        else {
            $(".landing-nav").removeClass("desktop");
           $(".landing-nav").addClass("mobile");
        }
    })
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1 || $("body").scrollTop() > 1) {
            $(".landing-nav").addClass("affixed");
        } else {
            $(".landing-nav").removeClass("affixed");
        }
    });    
    
    
    var desktopFonts = "@font-face { font-family: MS; src: url('../fonts/Montserrat-Regular.ttf'); } @font-face { font-family: MSThin; src: url('../fonts/Montserrat-Thin.ttf'); } @font-face { font-family: MSLight; src: url('../fonts/Montserrat-Light.ttf'); } @font-face { font-family: MSBold; src: url('../fonts/Montserrat-Bold.ttf'); }";
    
    var mobileFonts = "@font-face { font-family: MS; src: url('../fonts/Montserrat-Regular.ttf'); } @font-face { font-family: MSThin; src: url('../fonts/Montserrat-Light.ttf'); } @font-face { font-family: MSLight; src: url('../fonts/Montserrat-Regular.ttf'); } @font-face { font-family: MSBold; src: url('../fonts/Montserrat-Bold.ttf'); }";
    

    if($("body").css("animation")[0] == "mob") {
        var style = document.createElement("style");
        style.innerHTML = mobileFonts;
        $("head").append(style);
        alert("mobile detected");
    }
    
    else {
        var style = document.createElement("style");
        style.innerHTML = desktopFonts;
        $("head").append(style);
        alert("desktop");
    }
});

/* Loader */
/*
$(window).load(function(){
    setTimeout(function(){
        $("body").addClass("loading");
    }, 10);

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
      }, 5000, mina.easeinout);

    arc2.attr({
        'stroke-dasharray': len2,
        'stroke-dashoffset': len2
      }).animate({
        'stroke-dashoffset': 0
      }, 5000, mina.easeinout);



    arc1.animate({ d: "M39.198,64c0-13.709,11.093-24.802,24.802-24.802 M88.803,64c0-13.709-11.094-24.802-24.803-24.802" }, 5000, mina.easeinout);
    arc2.animate({ d: "M88.803,64c0,13.708-11.094,24.802-24.803,24.802 M39.198,64c0,13.709,11.093,24.803,24.802,24.803" }, 5000, mina.easeinout);

    setTimeout(function () {
       circle.animate({r: 44}, 1000, mina.bounce)
    }, 2500);                                   

    setTimeout(function(){
        $("body").removeClass("loading");
        $(".page-wrapper").hide().removeClass("hidden").fadeIn("slow");
        $(".icon").addClass("hidden");
        console.log("removed");
    }, 2500)
})
*/