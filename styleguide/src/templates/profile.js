const avatar = require('../templates/objects/o-avatar')
const info = require('../templates/objects/o-profile-info')
const skills = require('../templates/objects/o-skill-tags')
const link = require('../templates/objects/o-profile-link')
const socialNetworks = require('../templates/objects/o-social-icons')
const unleash = require('../templates/components/c-unleash-tempo')

module.exports = `
	<section class="profile">
	
		${avatar}

		<div class="profile__info js-profile__info">
			
			${info}	

			${skills([
				'HTML', 'Javascript', 'Angular', 'CSS', 'Python', 'React', 'AngularJS', 'SASS', 'LESS'
			])}

			${link}

			${socialNetworks}

		</div> <!--  profile__info  -->

		${unleash}
		
	</section>
`
