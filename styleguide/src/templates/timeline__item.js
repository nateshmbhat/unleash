function renderChecklist (items) {
  return items.map((item) => {
    return `
      <li class="timeline__item__checkbox">
				<input class="timeline__item__checkbox__input" type="checkbox" id="${item.label.replace(" ", "").toLowerCase()}"
				${(item.solved ? 'checked' : '')}>
		    <label class="timeline__item__checkbox__label" for="${item.label.replace(" ", "").toLowerCase()}">
		    	${item.label}
		    </label>
			</li>
		`
  }).join('\n')
}

function renderItems (items) {
  return items.map((item) => {
    return `
	  <li class="timeline__item">
      <div class="timeline__item__intro ${(item.currentSteps == item.totalSteps ? 'timeline__item__intro--full' : '')}">
      	<h3 class="timeline__item__title">${item.title}</h3>
      	<p class="timeline__item__description">${(item.description ? item.description : '')}</p>
      	<div class="timeline__item__progress">
					<div class="timeline__item__steps">
						<span class="timeline__item__steps__label">Steps:</span>
						<span class="timeline__item__steps__current">${item.currentSteps}</span>
						<span class="timeline__item__steps__bar">/</span>
						<span class="timeline__item__steps__total">${item.totalSteps}</span>
					</div>
					<progress class="timeline__item__progress-bar ${((item.currentSteps/item.totalSteps < .3) ? 'timeline__item__progress-bar--red' : '')}" max="${item.totalSteps}" value="${item.currentSteps}"></progress>
					<button class="timeline__item__switch-view js-switch-view"></button>
				</div>
      </div>  <!--  timeline__item__intro  -->
      <div class="timeline__item__info">
				<ul class="timeline__item__checklist">
					${renderChecklist(item.checklist)}
					<li class="timeline__item__addnew">
						<button class="timeline__item__addnew__btn">
							<span class="timeline__item__addnew__btn__icon">+</span> add a new step
						</button>
					</li>
				</ul>
			</div> <!--  timeline__item__info  -->
		</li> <!--  timeline__item  -->
    `
  }).join('\n')
}

module.exports = function (props) {
  return `
		${renderItems(props.items)}
`
}
