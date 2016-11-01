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
});