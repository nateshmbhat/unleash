const items = require('../templates/timeline__items')

module.exports = `
	<section class="timeline">
		<header class="timeline__header">
			<div class="timeline__search">
				<input class="timeline__search__input" type="search" placeholder="Search">
			</div>
			<div class="timeline__sortby">
				<select name="" id="" class="timeline__sortby__dropdown">
					<option class="sortby__dropdown__option" value="byDate" selected>Sort by date</option>
					<option class="sortby__dropdown__option" value="byName">Sort by name</option>
				</select>
			</div>
		</header>

		<div class="timeline__date-label">
			Today
		</div>

		` + items + `

	</section> <!--  timeline  -->
`
