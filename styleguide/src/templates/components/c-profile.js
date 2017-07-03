const avatar = require('../objects/o-avatar')
const info = require('../objects/o-profile-info')
const skills = require('../objects/o-skill-tags')
const link = require('../objects/o-profile-link')
const socialNetworks = require('../objects/o-social-icons')

module.exports = `
	<div class="profile">
		${avatar}
		<div class="profile__info js-profile__info">
			${info}	
			${skills({
				tags: ['HTML', 'Javascript', 'Angular', 'CSS', 'Python', 'React', 'AngularJS', 'SASS', 'LESS']
			})}
			${link}
			${socialNetworks}
		</div> <!--  profile__info  -->
	</div>
`
