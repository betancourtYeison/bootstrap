window.onload = function() {
	var rentday = document.getElementById('rentdays');
	rentday.onchange = function(event) {
		var value = event.target.value; // devuelve el valor del input
		var valuewrap = document.getElementById('valuewrap');
		valuewrap.innerHTML = '$'+(value * 5);
	}
}