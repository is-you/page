function pseudoValidate() {
	const el_form = document.querySelector('.form');
	const text_inputs = el_form.querySelectorAll('input[type="text"]:not([readonly="readonly"]), .timepicker, input[type="hidden"], textarea');
	const radio_inputs = el_form.querySelectorAll('input[type="radio"]');
	const group_radio_inputs = radioInputsToGroup(radio_inputs);

	el_form.addEventListener('input', () => {
		let curr_valid = true;

		let radio_group = Object.keys(group_radio_inputs);
		for (let i = 0, length = radio_group.length - 1; i <= length && curr_valid; i++) {
			let is_checked = group_radio_inputs[radio_group[i]].find(item => item.el.checked === true);
			curr_valid = (is_checked !== undefined);
		}

		for (let i = 0, length = text_inputs.length - 1; i <= length && curr_valid; i++) {
			curr_valid = (text_inputs[i].value !== '');
		}

		tgValid(curr_valid);
	});
}

function radioInputsToGroup(radio_inputs){
	return [...radio_inputs]
		.map(el => ({
			el: el,
			name: el.name,
		}))
		.sort((a, b) => a.name > b.name ? 1 : -1)
		.reduce((group, item) => {
			if(group[item.name] === undefined) {
				group[item.name] = [];
			}
			group[item.name].push(item);
			return group;
		}, {});
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
			(!item.check && item.type !== 'radio')
			||
			(item.check && item.type === 'radio')
			||
			item.type === 'checkbox'
		)
	);

	console.log(name_types);

	name_types.forEach(item => {
		if(item.type === 'checkbox'){
			if(formObj[item.name] === undefined) {
				formObj[item.name] = [];
			}
			if(item.check){
				formObj[item.name].push(item.value);
			}
		} else {
			formObj[item.name] = item.value;
		}
	})
	return formObj;
}
