(function(){

  "use strict";
	
	function socialIcons() {
		var windowWidth = window.innerWidth;
			if (windowWidth > 1160) {
				var nameWidth = document.querySelector('.profile-recap__info__name').offsetWidth;
				var margin = nameWidth + 20;
				var left = margin.toString();
				document.querySelector('.profile-recap__info__social-networks').style.left = left+"px";
			}
	}

	socialIcons();

  window.addEventListener('resize', function() {
    socialIcons();
  }, true);

})();
