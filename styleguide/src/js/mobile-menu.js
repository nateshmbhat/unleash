(function(){
  "use strict";
	
	var windowWidth = window.innerWidth;
	
	function mobileMenu() {
		var mobileMenu = document.querySelector('.header__nav--mobile');
		if (!mobileMenu) {
			var menu = document.querySelector('.header__nav');
			var menuCloned = menu.cloneNode(true);
			menuCloned.className = 'header__nav--mobile';
			document.querySelector('body').appendChild(menuCloned);
		}
		
		// toggle mobile menu
		document.querySelector('.header__nav__link__label--current').addEventListener("click", function(e){
			e.preventDefault;
	  	document.querySelector('.header').classList.toggle('is-open');
	  	document.querySelector('.header__nav--mobile').classList.toggle('is-open');
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
