const avatar = require('../objects/o-avatar')
const info = require('../objects/o-profile-info')
const skills = require('../objects/o-skill-tags')
const link = require('../objects/o-profile-link')
const socialNetworks = require('../objects/o-social-icons')

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

			<div class="profile__unleash">

				<h4 class="profile__unleash__title">Unleash Tempo</h4>

				<div class="profile__unleash__graph">
					<!-- canvas -->
					<img class="profile__unleash__graph__img" src="images/graph.png" alt="">
				</div>

				<ul class="profile__unleash__goals">
					<li class="profile__unleash__goal">
						<span class="profile__unleash__goal__label">Paths</span>
						<span class="profile__unleash__goal__amount">8</span>
					</li>
					<li class="profile__unleash__goal">
						<span class="profile__unleash__goal__label">Open Steps</span>
						<span class="profile__unleash__goal__amount">54</span>
					</li>
					<li class="profile__unleash__goal">
						<span class="profile__unleash__goal__label">Finished Steps</span>
						<span class="profile__unleash__goal__amount">186</span>
					</li>
				</ul>

			</div> <!--  profile__unleash  -->
	</section>
`
