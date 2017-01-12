document.addEventListener("DOMContentLoaded",function(){	
	
	var fuserseen = false;



	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("about");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onmouseover = setTimeout(function() {
		if (fuserseen == false) {
			modal.style.display = "block";
			fuserseen = true;
		};
	}, 3000);


	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
})




// setTimeout(function(){


// }, 3000);	