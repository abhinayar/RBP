$(document).ready(function(){
	setTimeout(function(){
		$(".show-start").fadeOut("1200");
		$(".hide-start").removeClass("hidden");
	}, 1200);
	setTimeout(function(){
		$(".show-start").addClass("hidden");
	}, 2400);
	
	function changeNavBG() {
        var top = $(window).scrollTop(); 
		console.log(top);
        
		if (top === 0) {
			$(".navigation").removeClass("dark");
        }
		
		else {
			if(!$(".navigation").hasClass("dark")) {
				$(".navigation").addClass("dark");	
			}
		}
    }
    changeNavBG();
    
    $(window).scroll(function(){
		console.log("scrolled");
      	changeNavBG(); 
    });
	
	new WOW().init();
	
	$(".small-image img").click(function(){
		function switchSources(obj1, obj2) {
			var src = $(obj1).attr("src");
			var big_src = $(obj2).attr("src");
			$(obj1).attr("src", big_src);
			$(obj2).attr("src", src);
		}
		
		$(this).add(".main-image img").animate({'opacity': '0'}, 250).animate({'opacity':1}, 250);
		var that = this;
		setTimeout(function(){
			switchSources(that, ".main-image img");
		}, 250);
	});
	
	$(".navigation .mobile-hamburger i").click(function(){
		$(".navigation .mobile-nav").addClass("show");
	}); $(".mob-nav-close i").click(function(){
		$(".navigation .mobile-nav").removeClass("show");
	});
	
	$(".solution-card").click(function(){
		var target = $(this).attr("data-target");
		window.location = target;
	})
	
	$(function() {	
		$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 110)
			}, 1000);
			return false;
		  }
		}
	  });
	});
});















