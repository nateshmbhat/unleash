const avatar = require('../objects/o-avatar')
const info = require('../objects/o-profile-info')
const skills = require('../objects/o-skill-tags')
const link = require('../objects/o-profile-link')
const socialNetworks = require('../objects/o-social-icons')

module.exports = `
	<div class="profile profile--profiles">
		${avatar}
		<div class="profile__info profile__info--profiles js-profile__info">
			${info}	
			${link}
			${skills({
				tags: ['HTML', 'Javascript', 'Angular', 'Python', 'React', 'SASS', 'LESS']
			})}
			${socialNetworks}
		</div> <!--  profile__info  -->
	</div>
`
