(function(){
  "use strict";
	
	// toggle mobile menu
	document.querySelector('.js-add-goal').addEventListener("click", function(e){
		e.preventDefault;
  	document.querySelector('.js-add-goal-modal').classList.toggle('is-hidden');
  });

})();
