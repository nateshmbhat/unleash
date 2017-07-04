(function(){
  "use strict";
	
	var buttons = document.querySelectorAll('.js-skill-tags__btn');

	// toggle each tag
	for (var i = 0; i<buttons.length; i++) {
		buttons[i].addEventListener("click", function(e){
	  	e.target.classList.toggle('is-active');
	  });
	}
	
	// clear all button
	document.querySelector('.js-tags-cloud__clear__btn').addEventListener("click", function(){
		for (var i = 0; i<buttons.length; i++) {
			buttons[i].classList.remove('is-active');
		}
	});

})();
