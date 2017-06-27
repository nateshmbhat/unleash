const items = require('../templates/timeline__item')({
	items: [
		{
			title: 'Blog post published',
			description: 'Publish a blog post about React Native development.',
			currentSteps: '1',
			totalSteps: '4',
			checklist: [
				{label: 'Gain feedback'},
				{label: 'Write the second draft of the blog post'},
				{label: 'Write a synopsis'},
				{label: 'Write the first draft', solved: true}
			]
		},
		{
			title: 'Meetups & Conferences',
			currentSteps: '6',
			totalSteps: '8',
			checklist: [
				{label: 'Alias ratione repudiandae sed quae laudantium'},
				{label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, sed.'},
				{label: 'Illum nisi officiis perferendis'},
				{label: 'Alias ratione repudiandae sed quae laudantium hoc.', solved: true},
				{label: 'Illum nisi officiis perferendis hoc.', solved: true},
				{label: 'Alias ratione repudiandae sed quae laudantium eva.', solved: true},
				{label: 'Illum nisi officiis perferendis nam.', solved: true},
				{label: 'Illum nisi officiis perferendis cian.', solved: true},
				{label: 'Complete the Building React Applications with Idiomatic Redux course', solved: true}
			]
		},
		{
			title: 'Online Course Video Review',
			currentSteps: '5',
			totalSteps: '5',
			checklist: [
				{label: 'Deserunt, cupiditate laboriosam!', solved: true},
				{label: 'Perspiciatis ab beatae harum dolor earum non doloremque recusandae.', solved: true},
				{label: 'Natus eius unde aliquam amet', solved: true},
				{label: 'Necessitatibus animi at laboriosam incidunt', solved: true},
				{label: 'Tempora fugiat repellendus esse sapiente reiciendis', solved: true},
			]
		},
	]
})

module.exports = `
	<ol class="timeline__items">`
		+ items +
	`</ol>
	<script src="js/timeline__item__toggle.js"></script>
`
