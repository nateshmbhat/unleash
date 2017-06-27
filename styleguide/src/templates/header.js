module.exports = `
	<header class="header">
		<a href="#" class="header__logo">
			<img src="images/logo.png" alt="Unleash" class="header__logo__img">
			<span class="header__logo__text">Unleash</span>
		</a>
		<nav class="header__nav">
			<ul class="header__nav__list">
				<li class="header__nav__item">
					<a href="#" class="header__nav__link">
						<span class="header__nav__link__label">Home</span>
					</a>
				</li>
				<li class="header__nav__item">
					<a href="#" class="header__nav__link header__nav__link--current">
						<span class="header__nav__link__label header__nav__link__label--current">My Path</span>
					</a>
				</li>
				<li class="header__nav__item">
					<a href="#" class="header__nav__link">
					<span class="header__nav__link__label">Profiles</span></a>
				</li>
				<li class="header__nav__item">
					<a href="#" class="header__nav__link">
					<span class="header__nav__link__label">Goals</span></a>
				</li>
				<li class="header__nav__item">
					<a href="#" class="header__nav__link">
					<span class="header__nav__link__label">Skills</span></a>
				</li>
			</ul>
		</nav>
		<nav class="header__user-menu">
			<input type="checkbox" class="header__user-menu__btn" id="header__user-menu__btn">
			<label class="header__user-menu__label" for="header__user-menu__btn">NO</label>
			<ul class="header__user-menu__list">
				<li class="header__user-menu__item">Name</li>
				<li class="header__user-menu__item">email</li>
				<li class="header__user-menu__item">Edit Profile</li>
				<li class="header__user-menu__item">Sign Out</li>
			</ul>
		</nav>
		
		<script src="js/mobile-menu.js"></script>
	</header>
`
