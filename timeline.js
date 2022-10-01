$(".Role").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".first-Role").click( function() {
	$(".line-progress").css("width", "0%");
	$(".TANK").addClass("active").siblings().removeClass("active");
});

$(".second-Role").click( function() {
	$(".line-progress").css("width", "20%");
	$(".MARKSMAN").addClass("active").siblings().removeClass("active");
});

$(".third-Role").click( function() {
	$(".line-progress").css("width", "40%");
	$(".ASSASSIN").addClass("active").siblings().removeClass("active");
});

$(".fourth-Role").click( function() {
	$(".line-progress").css("width", "60%");
	$(".FIGHTER").addClass("active").siblings().removeClass("active");
});

$(".fifth-Role").click( function() {
	$(".line-progress").css("width", "80%");
	$(".MAGE").addClass("active").siblings().removeClass("active");
});

$(".sixth-Role").click( function() {
	$(".line-progress").css("width", "100%");
	$(".SUPPORTER").addClass("active").siblings().removeClass("active");
});