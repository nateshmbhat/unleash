function renderSkills (skills) {
  return skills.map(
    function(skill) {
      return `
      	<li class="o-skill-tags__skill js-skill-tags__skill">
					<a href="" class="o-skill-tags__skill__link">${skill}</a>
				</li>
      `
    }).join('\n')
}

module.exports = function (props) {
  return `
<ul class="o-skill-tags js-skill-tags" data-content="">
	${renderSkills(props)}
</ul>
`
}