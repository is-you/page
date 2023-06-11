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
	});
}

function getFormData() {
	let form = document.querySelector('.form');
	let formObj = {};

	let el_inputs = [...form.querySelectorAll('input:not([readonly="readonly"]), .timepicker, textarea, select')];

	let name_types = el_inputs.map(el=> ({
			name: el.name,
			type: el.type,
			value: el.value,
			check: el.checked
		})
	).filter((item)=>
		(
			(!item.check && !(item.type === 'checkbox' || item.type === 'radio'))
			||
			(item.check && (item.type === 'checkbox' || item.type === 'radio' ))
		)
	);

	name_types.forEach(item => {
		if(item.type === 'checkbox'){
			if(formObj[item.name] === undefined) {
				formObj[item.name] = [item.value];
			} else {
				formObj[item.name].push(item.value);
			}
		} else {
			formObj[item.name] = item.value;
		}
	})


	return name_types;
}
