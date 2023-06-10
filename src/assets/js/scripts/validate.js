function pseudoValidate(el_form, valid, invalid) {
	const text_inputs = el_form.querySelectorAll('input[type="text"]:not([readonly="readonly"]), textarea');
	let is_valid = false;

	el_form.addEventListener('change', () => {
		for (let i = 0, length = text_inputs.length - 1; i <= length; i++) {
			console.log(text_inputs.name, text_inputs[i].value);
			if (text_inputs[i].value !== '') {
				is_valid = true;
				valid();
			} else {
				is_valid = false;
				invalid();
				break;
			}
		}
		;
	});
}

function getFormData() {
	let form = document.querySelector('.form');
	let formData = new FormData(form);
	let formObj = {};

	for (let pair of formData.entries()) {
		if(formObj[pair[0]] !== undefined) {
			formObj[pair[0]] = [formObj[pair[0]], pair[1]];
			formObj[pair[0]] = formObj[pair[0]].flat();
		}
		else{
			formObj[pair[0]] = pair[1];
		}
	}

	return formObj;
}
