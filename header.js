
function setNavigation() {
	$("#calendar").click(function() {
		$("#main").load("calendar.php");
	});

	$("#search").click(function() {
		$("#main").load("search.html");
	});

	$("#messages").click(function() {
		$("#main").load("messages.php");
	});

	$("#notes").click(function() {
		$("#main").load("notes.php");
	});

	$("#settings").click(function() {
		$("#main").load("settings.php");
	});

	$("#help").click(function() {
		$("#main").load("help.php");
	});
}