function renderSkills (items) {
  return items.map(
    function(skill) {
      return `
      	<li class="profile__skill">
					<a href="" class="profile__skill__link">${skill}</a>
				</li>
      `
    }).join('\n')
}

module.exports = function (props) {
  return `
<ul class="profile__skills" data-content="">
	${renderSkills(props)}
</ul>`
}