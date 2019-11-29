window.onload = function(){

	$(".image-container").mouseover(function() {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

	

	$('.skewable').mouseover(function(){
		var skewX = Math.random()*60;
		var skewY = Math.random()*80;
		$(this).css('transform', 'skew('+skewX+'deg, '+skewY+'deg)');
	}).mouseout(function(){
		$(this).css('transform', 'skew(0deg, 0deg)');
	})

	// $(document).mousemove(function(event){
	// 	var mouseX = event.pageX;
	// 	var mouseY = event.pageY;
	// 	$('#cursor').css('top', mouseY);
	// 	$('#cursor').css('left', mouseX);	
	// });


	$("#quarter-circle").click(() => {
		document.body.classList.toggle("open")
	})

}

