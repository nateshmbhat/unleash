const header = require('../templates/timeline__header')
const items = require('../templates/timeline__items')

module.exports = `
	<section class="timeline">
		` + header + `

		<div class="timeline__date-label">
			Today
		</div>

		` + items + `

	</section> <!--  timeline  -->
`
