$("document").ready(function() {
	$("#menu-toggle").click(function(e) {
  	e.preventDefault();
  	$("#wrapper").toggleClass("toggled");
	});

	$(window).resize( function() {
		if ($(window).width() > 768) {
  		$("#wrapper").removeClass("toggled");
		}
	}); 
});