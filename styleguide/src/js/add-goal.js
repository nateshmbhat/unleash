(function(){
  "use strict";
	
	// toggle mobile menu
	document.querySelector('.js-add-goal__btn').addEventListener("click", function(e){
		e.preventDefault;
  	document.querySelector('.js-add-goal__overlay').classList.toggle('is-hidden');
  	document.querySelector('.js-add-goal__modal').classList.toggle('is-hidden');
  });
	document.querySelector('.js-add-goal__overlay').addEventListener("click", function(e){
		document.querySelector('.js-add-goal__overlay').classList.add('is-hidden');
		document.querySelector('.js-add-goal__modal').classList.add('is-hidden');
	});

})();
