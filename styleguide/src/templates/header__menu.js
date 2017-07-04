module.exports = function (props) {
  return `
		<nav class="header__menu js-header__menu">
			<ul class="header__menu__list">
				<li class="header__menu__item">
					<a href="index.html" class="${props.currentPage == 'home' ? 'header__menu__link header__menu__link--current js-menu-toggle' : 'header__menu__link'}">
						<span class="${props.currentPage == 'home' ? 'header__menu__link__label header__menu__link__label--current' : 'header__menu__link__label'}">Home</span>
					</a>
				</li>
				<li class="header__menu__item">
					<a href="#" class="${props.currentPage == 'myPath' ? 'header__menu__link header__menu__link--current js-menu-toggle' : 'header__menu__link'}">
						<span class="${props.currentPage == 'myPath' ? 'header__menu__link__label header__menu__link__label--current' : 'header__menu__link__label'}">My Path</span>
					</a>
				</li>
				<li class="header__menu__item">
					<a href="profiles.html" class="${props.currentPage == 'profiles' ? 'header__menu__link header__menu__link--current js-menu-toggle' : 'header__menu__link'}">
					<span class="${props.currentPage == 'profiles' ? 'header__menu__link__label header__menu__link__label--current' : 'header__menu__link__label'}">Profiles</span></a>
				</li>
				<li class="header__menu__item">
					<a href="#" class="${props.currentPage == 'goals' ? 'header__menu__link header__menu__link--current js-menu-toggle' : 'header__menu__link'}">
					<span class="${props.currentPage == 'goals' ? 'header__menu__link__label header__menu__link__label--current' : 'header__menu__link__label'}">Goals</span></a>
				</li>
				<li class="header__menu__item">
					<a href="#" class="${props.currentPage == 'skills' ? 'header__menu__link header__menu__link--current js-menu-toggle' : 'header__menu__link'}">
					<span class="${props.currentPage == 'skills' ? 'header__menu__link__label header__menu__link__label--current' : 'header__menu__link__label'}">Skills</span></a>
				</li>
			</ul>
			<script src="js/mobile-menu.js"></script>
		</nav>
`
}
