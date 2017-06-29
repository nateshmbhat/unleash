(function(){

  "use strict";
	
	// if there's enough space, icons are placed alongside dev name
	
	var windowWidth = window.innerWidth;

	function socialIcons() {
		var name = document.querySelector('.js-profile-info__name').offsetWidth;
		var section = document.querySelector('.js-profile__info').offsetWidth;
		var width = name + 180; // 164px icons width
		if (section > width) {
			var margin = name + 20;
			var left = margin.toString();
			document.querySelector('.js-social-icons').classList.add('js-social-icons--top');
			document.querySelector('.js-social-icons').style.left = left+"px";
		} else {
			document.querySelector('.js-social-icons').classList.remove('js-social-icons--top');
		}
	}

	if (windowWidth > 1024) {
		socialIcons();
	}

  window.addEventListener('resize', function() {
  	if (windowWidth > 1024) {
    	socialIcons();
  	}
  }, true);

})();
