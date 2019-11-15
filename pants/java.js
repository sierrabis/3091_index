console.log("hello it me")
var a = 10;

window.onload = function(){

	$(".image-container").mouseover(function () {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

}