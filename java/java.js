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

	$(".image-container").mouseover(function () {
	  $(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
	  $(this).attr('src', $(this).data("src"));
	});

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

$("#red").mouseover(function() {
    $(this).animate({ marginTop: 200 });
});

$("#red").mouseout(function() {
    $(this).animate({ marginTop: 0 });
});

}

