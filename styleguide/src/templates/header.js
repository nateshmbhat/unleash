const menu = require('../templates/header__menu')
const userMenu = require('../templates/header__user-menu')

module.exports = `
	<header class="header">
		<a href="#" class="header__logo">
			<img src="images/logo.png" alt="Unleash" class="header__logo__img">
			<span class="header__logo__text">Unleash</span>
		</a>
		` +
		menu + userMenu
		+`
	</header>
`
