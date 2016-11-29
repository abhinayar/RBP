$(document).ready(function(){
	function changeNavBG() {
        var top = $(window).scrollTop(); 
		console.log(top);
        
		if (top == 0) {
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
});