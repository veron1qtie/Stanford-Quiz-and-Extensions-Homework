const choiceElement = document.getElementsByClassName('choice-grid'); //arr[el,el,el]

let isDisabled = false;

const wrapper = document.getElementsByClassName('wrapper');


for (let el of choiceElement) {

	for (let i = 0; i < el.children.length; i++) {
		el.children[i].addEventListener('click', function handleClick(e) {

			renderElements(el, 'remove');

			el.children[i].className = "active";

			renderElements(el, 'disable');

			if (!el.classList.contains('completed')) {
				el.classList.add('completed');
			}

			let counter = 0;

			for (let n = 0; n < choiceElement.length; n++) {
				if (choiceElement[n].classList.contains('completed')) {
					counter++;
					console.log(counter);

				}

				if (counter == 3) {
					isDisabled = true;
					console.log(counter);

				}

			}

			if (isDisabled == true) {
				wrapper[0].classList.add('freeze');
				calcResult();
			}

		});
	}
}

function renderElements(el, action) { // deletes class active  and adds disabled
	for (let j = 0; j < el.children.length; j++) {

		if (action == 'remove' && el.children[j].classList.contains("active")) {
			el.children[j].classList.remove("active");
		}
		if (action == 'disable' && !el.children[j].classList.contains("active")) {
			el.children[j].classList.add("disabled");
		}
	}
}

function calcResult() {

	let result = [];
	for (let el of choiceElement) {
		for (let i = 0; i < el.children.length; i++) {
			if (el.children[i].classList.contains('active')) { // adding in result array all items that contains class active
				result.push(el.children[i].dataset.choiceId);
			}
		}
	}

	console.log('quiz finished!');

	const parsedResult = parseResult(result);

	const finalResult = document.getElementById('result');
	finalResult.classList.add('finished');
	finalResult.children[0].textContent = RESULTS_MAP[parsedResult].title;
	finalResult.children[1].textContent = RESULTS_MAP[parsedResult].contents;

}


function parseResult(arr, firstEl) {
	const first = firstEl || arr[0];

	if (arr.length == 1) {
		return firstEl;
	}

	const firstWord = arr.shift();

	if (arr.includes(firstWord)) {
		return firstWord;
	} else {
		return parseResult(arr, first);
	}
}

const button = document.getElementById('btn');
button.addEventListener('click', function removeChoices(e) {

	isDisabled = false;

	const finalResult = document.getElementById('result');
	finalResult.classList.remove('finished');
	finalResult.children[0].textContent = '';
	finalResult.children[1].textContent = '';

	for (let el of choiceElement) {
		renderElements(el, 'remove');
		if (el.classList.contains('completed')) {
			el.classList.remove('completed');
		}

		wrapper[0].classList.remove('freeze');


		for (let n = 0; n < el.children.length; n++) {

			if (el.children[n].classList.contains('disabled')) {
				el.children[n].classList.remove('disabled');
			}
		}
	}

	console.log('quiz restarted!');
})