console.log("hello it me")
var a = 10;

window.onload = function(){

	$(".image-container").mouseover(function () {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

	$(".image-container").mouseover(function () {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

	$(".image-container").mouseover(function () {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

$('.skewable').mouseover(function(){
		var skewX = Math.random()*60;
		var skewY = Math.random()*60;
		$(this).css('transform', 'skew('+skewX+'deg, '+skewY+'deg)');
	}).mouseout(function(){
		$(this).css('transform', 'skew(10deg, 10deg)');
	})

$("#orange").mouseover(function() {
    $(this).animate({ marginTop: 100 });
});

$("#orange").mouseout(function() {
    $(this).animate({ marginTop: 0 });
    ({ marginLeft: 400});
});


$("#green").mouseover(function() {
    $(this).animate({ marginTop: 0 });
});


$("#green").mouseout(function() {
    $(this).animate({ marginTop: -100 });
});

}

