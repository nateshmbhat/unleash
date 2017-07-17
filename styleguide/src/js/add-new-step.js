(function(){
  "use strict";
	
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
				<input class="timeline__item__checkbox__input" type="checkbox" disabled>
				<input type="text" class="timeline__item__checkbox__edit js-timeline__item__edit">
			`

			container.insertBefore(newItem, currentItem);
			currentItem.previousElementSibling.querySelector('.js-timeline__item__edit').focus();
			currentItem.classList.add('is-hidden');

			// edit mode
			document.querySelector('.js-timeline__item__edit').addEventListener("blur", function(e) {
				var newValue = e.target.value;
				if (newValue != '') {
					currentItem.classList.remove('is-hidden');
					e.target.parentNode.innerHTML = `
						<input class="timeline__item__checkbox__input" type="checkbox" id="` + newValue.replace(" ", "").toLowerCase() + `">
						<label class="timeline__item__checkbox__label" for="` + newValue.replace(" ", "").toLowerCase() + `">` + newValue + `</label>
					`					
				} else {
					currentItem.classList.remove('is-hidden');
					e.target.parentNode.remove();
				}
			}, true);

		}, false);
	}

})();
