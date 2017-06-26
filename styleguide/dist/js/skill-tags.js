(function(){
  "use strict";
	
  var section = document.querySelector('.profile-recap__info');
  var tagsContainer = document.querySelector('.profile-recap__info__skills');
  var tags = document.querySelectorAll('.profile-recap__info__skill');
	var totalTags = tags.length;

  function hideTags() { 

  	// display all tags
		for (var i = 0; i < totalTags; i++) {
			tags[i].classList.remove('profile-recap__info__skill--hidden');
		}
		// set current number to empty
		tagsContainer.setAttribute("data-content", "");

    var sectionWidth = section.offsetWidth;
	  
		// calculate tags container width
		var tagsWidth = 0, itemWidth = 0;
		for (var i = 0; i < totalTags; i++) {
			itemWidth = tags[i].offsetWidth + 6; // margin-right: 6px;
			tagsWidth = tagsWidth + itemWidth;
		}

		// calculate tags width
		var i = 0, currentWidth = 0;
		while (
				tagsWidth > sectionWidth && 
				i < totalTags && 	
				currentWidth < sectionWidth - 80
		){
			currentWidth = currentWidth + tags[i].offsetWidth + 6; // margin-right: 6px;
			i++;
		}

		if (tagsWidth > sectionWidth) {

			// count overflowing tags
			var hiddenTags = totalTags - i;
			tagsContainer.setAttribute("data-content", "+" + hiddenTags);

			// hide overflowing tags
			for (i; i < totalTags; i++) {
				tags[i].classList.add('profile-recap__info__skill--hidden');
			}
			
			// click handler
			tagsContainer.addEventListener("click", function(event){
		  	tagsContainer.classList.add('profile-recap__info__skills--unfolded')
		  	tagsContainer.setAttribute("data-content", "");
		  });

		}


	}
  
  window.onresize = hideTags;

	hideTags();

})();
