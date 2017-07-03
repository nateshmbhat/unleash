const head = require('../templates/head')
const header = require('../templates/header')
const profile = require('../templates/components/c-profile')
const unleash = require('../templates/components/c-unleash-tempo')
const timeline = require('../templates/timeline')
const add = require('../templates/objects/o-add-goal')
const footer = require('../templates/footer')

module.exports = `
	${head}
	${header({currentPage: 'home'})}
	<div class="wrap">

	<section class="profile">
		${profile}
		${unleash}
	</section>
	
	${timeline}
	${add}
	${footer}
`
