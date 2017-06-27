(function(){
  "use strict";
	
	// toggle mobile menu
	document.querySelector('.timeline__item__switch-view').addEventListener("click", function(e){
		e.preventDefault;
  	document.querySelector('.timeline__item__info').classList.toggle('is-hidden');
  });

})();
