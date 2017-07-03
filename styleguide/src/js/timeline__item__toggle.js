(function(){
  "use strict";
	
	// toggle mobile menu
	var buttons = document.querySelectorAll('.timeline__item__switch-view');
	for (var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function(e){
			e.preventDefault;
			e.target.classList.toggle('is-open');
			e.target.parentNode.parentNode.nextSibling.classList.toggle('is-hidden');
		});
	}

})();
