const head = require('../templates/head')
const header = require('../templates/header')
const profile = require('../templates/profile')
const timeline = require('../templates/timeline')
const footer = require('../templates/footer')

const skills = require('../templates/profile__skills')

module.exports = head + header + '<div class="wrap">' +
`
<section class="profiles__search">
	<div class="timeline__search">
		<input class="timeline__search__input" type="search" placeholder="Search by name">
	</div>
</section>

<section class="tags-cloud">
	` + skills + skills + `
</section>
`
 + footer