document.getElementById("sb_btn").onclick = function(event) {
	event.preventDefault();
	var em1 = document.forms["my_form"]["em1"].value
	var em2 = document.forms["my_form"]["em2"].value

	var eVal = false
	
	if(em1 == em2) {
		eVal = true
	}

	if (eVal == true) {
		window.location.href='http://localhost:4567/success'
	}
	else {
		alert("Please make sure that email addresses match.")
	}
}