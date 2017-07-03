(function(){
  "use strict";
	
	var buttons = document.querySelectorAll('.js-skill-tags__btn');
	for (var i = 0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function(e){
	  	e.target.classList.toggle('is-active');
	  });
	}

})();
