(function(){
  "use strict";
	
  var section = document.querySelector('.profile-recap__info');
  var tagsContainer = document.querySelector('.profile-recap__info__skills');
  var tags = document.querySelectorAll('.profile-recap__info__skill');
	var totalTags = tags.length;

  var sectionWidth = section.offsetWidth;

  function resize() { 
    sectionWidth = section.offsetWidth;
  }
  window.onresize = resize;


	// calculate tags container width
	var tagsWidth = 0, itemWidth = 0;
	for (var i = 0; i < totalTags; i++) {
		itemWidth = tags[i].offsetWidth;
		tagsWidth = tagsWidth + itemWidth + 6; // margin-right: 6px;
	}
	
	var i = 0, currentWidth = 0;
	while
		(
			tagsWidth > sectionWidth && 
			i < totalTags && 	
			currentWidth < sectionWidth - 50
		)
	{
		currentWidth = currentWidth + tags[i].offsetWidth + 6; // margin-right: 6px;
		i++;
		console.log(i + " = " + currentWidth);
	}
	
	// hidden tags
	var hiddenTags = totalTags - i;
	tagsContainer.setAttribute("data-content", "+" + hiddenTags);

	// hide overflowing tags
	for (i; i < totalTags; i++) {
		tags[i].classList.add('profile-recap__info__skill--hidden');
	}

	tagsContainer.addEventListener("click", function(event){
  	tagsContainer.classList.add('profile-recap__info__skills--unfolded')
  	tagsContainer.setAttribute("data-content", "");
  });

})();
