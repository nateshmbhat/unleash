module.exports = `
<div class="o-add-goal">
	<button class="o-add-goal__btn js-add-goal__btn">+</button>
	<div class="o-add-goal__overlay js-add-goal__overlay is-hidden">
	</div>
	<div class="o-add-goal__modal js-add-goal__modal is-hidden">
		<div class="o-add-goal__modal__content">
			<p class="o-add-goal__modal__title">Add a Goal</p>
			<form action="" class="o-add-goal__modal__form">
				<input class="o-add-goal__modal__input" type="text" placeholder="Goal name">
				<textarea class="o-add-goal__modal__input o-add-goal__modal__textarea" placeholder="Goal description"></textarea>
				<input type="submit" class="o-add-goal__modal__submit js-add-goal__modal__submit" value="Add">
			</form>
		</div>
	</div>
	<script src="js/add-goal.js"></script>
</div>
`