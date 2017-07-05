(function(){
  "use strict";
	
	// add new step
	var buttons = document.querySelectorAll('.js-add-new-step');

	for (var i=0; i<buttons.length; i++){
		buttons[i].addEventListener('click', function(e){
			
			e.stopImmediatePropagation();

			var currentItem = e.target.parentNode;
			var lastItem = currentItem.previousElementSibling;
			var container = currentItem.parentNode;

			var newItem = document.createElement('li');
			newItem.classList.add('timeline__item__checkbox');
			newItem.innerHTML = `
				<input class="timeline__item__checkbox__input" type="checkbox">
				<input type="text" class="timeline__item__checkbox__edit js-timeline__item__edit">
			`

			container.insertBefore(newItem, currentItem);
			document.querySelector('.js-timeline__item__edit').focus();

		}, false);
	}

})();
