(function(){
  "use strict";
	
	var windowWidth = window.innerWidth;
	
	function mobileMenu() {

		// duplicate DOM menu
		var mobileMenu = document.querySelector('.header__menu--mobile');
		if (!mobileMenu) {
			var menu = document.querySelector('.js-header__menu');
			var menuCloned = menu.cloneNode(true);
			menuCloned.classList.add('header__menu--mobile');
			document.querySelector('body').appendChild(menuCloned);
		}
		
		// toggle mobile menu
		document.querySelector('.js-menu-toggle').addEventListener("click", function(e){
			e.preventDefault();
	  	document.querySelector('.header').classList.toggle('is-open');
	  	document.querySelector('.header__menu--mobile').classList.toggle('is-open');
	  });
		
	}
		
	if (windowWidth < 768) {
		mobileMenu();
	}

	window.addEventListener('resize', function() {
    if (windowWidth < 768) {
			mobileMenu();
		}
  }, true);

})();
