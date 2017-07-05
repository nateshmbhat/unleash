(function(){
  "use strict";
	
	// toggle mobile menu
	var buttons = document.querySelectorAll('.js-switch-view');
	for (var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function(e){
			e.target.classList.toggle('is-open');
			e.target.parentNode.parentNode.parentNode.classList.toggle('is-open');
		});
	}

})();
