const skills = require('../templates/profile__skills')
const socialNetworks = require('../templates/profile__social-icons')

module.exports = `
	<section class="profile">
		
			<div class="profile__avatar">
				<img src="images/avatar.png" alt="" class="profile__avatar__img">
			</div>

			<div class="profile__info">
					
				<h2 class="profile__info__name">Lester Boone</h2>

				<p class="profile__info__intro">Ad nemo dolore quis architecto ab animi, alias atque maxime! Sequi, fugit reiciendis totam corporis ad aliquid minima iure a fuga numquam?</p>

				`+ skills +`

				<a href="" class="profile__info__profile-link">https://lesterboone.com</a>

				`+ socialNetworks +`

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
		<script src="js/skill-tags.js"></script>
		<script src="js/social-icons.js"></script>
	</section>
`
