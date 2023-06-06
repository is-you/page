async function createForm(){
	const form = document.querySelector('.form');
	const header_block = form.querySelector('#header');

	const data = await getData();

	for (const input of data) {
		header_block.after(buildFormGroup(input));
	}
	datepicker_init();
	timepicker_init();
	// after
}

function buildElement(elementName, options, childs = []) {
	const buildElement = (options.attrs || [])
		.reduce((buildElement, attr) => {
				return buildElement.setAttribute(attr.name, attr.value) || buildElement},
			document.createElement(elementName));
	buildElement.className = (options.classes || []).join(' ');
	buildElement.textContent = options.textContent;
	if (options.id)
		buildElement.id = options.id;

	return childs.reduce((buildElement, child) => buildElement.appendChild(child) && buildElement, buildElement);
}

function getData(){
	return fetch('test.json')
		.then(response => {
			if (response.ok) {
				return  response.json();
			}
			else{
				return Promise.reject(response);
			}
		})
		.catch(err=>{
			console.log(err.status)
		})
}

function getInput(data_input){
	switch (data_input.type) {
		case "text":
			return buildInputText(data_input);
			break;
		case "textarea":
			return buildInputTextArea(data_input);
			break;
		case "select":
			return buildInputSelect(data_input);
			break;
		case "radio":
			return buildInputCheck(data_input);
			break;
		case "checkbox":
			return buildInputCheck(data_input);
			break;
		case "timepicker":
			return buildInputTimepicker(data_input);
			break;
		case "datepicker":
			return buildInputDatepicker(data_input);
			break;
	}
}

function buildFormGroup(data_input) {
	return buildElement('div', { classes : ['form_group']},[
			buildElement('h4', { classes : ['form_group__header'], textContent: data_input.header}),
		 	buildElement('div', { classes : ['input']}, getInput(data_input))
		]
	)
}

function buildInputText(data_input){
	return [
		buildElement('input', {
				classes : ['input__control', 'form-control'],
				attrs: [{name: 'type', value: 'text'},  {name: 'name', value: data_input.name},],
			}),
		buildElement('p', {
			classes : ['input__placeholder'],
			textContent: data_input.placeholder
		}),
	]
}

function buildInputTextArea(data_input){
	return [
		buildElement('textarea', {
			classes : ['input__control', 'form-control'],
			attrs: [{name: 'row', value: '3'}, {name: 'name', value: data_input.name}],
		}),
		buildElement('p', { classes : ['input__placeholder']}),
	]
}

function buildInputSelect(data_input){
	const options = data_input.options.map(item=>buildInputSelectOption(item));
	console.log(options);
	return [
		buildElement('select', {
				classes : ['form-select'],
				attrs: [{name: 'name', value: data_input.name}, {name: 'type', value: 'select'}],
			},
			options
		),
	]
}

function buildInputSelectOption(option_data){
	return buildElement('option', {
		attrs: [{name: 'value', value: option_data.value}],
		textContent: option_data.label,
	})
}

function buildInputCheck(data_input){
	const typo = data_input.type;
	const name = data_input.name;
	const options = data_input.options.map((item, index)=>buildInputCheckOption(item, name, typo, index));
	console.log(options);
	console.log(typo);
	return options;
}

function buildInputCheckOption(option_data, option_name, option_type, index){
	const id = (option_name + index);
	return buildElement('div', {
		classes: ['form-check']
	},
		[
			buildElement('input', {
				attrs: [{name: 'name', value: option_name}, {name: 'value', value: option_data.value}, {name: 'type', value: option_type}],
				classes: ['form-check-input', 'input__check'],
				id: id,
			}),
			buildElement('label', {
				attrs: [{name: 'for', value: id}],
				textContent: option_data.label,
				classes: ['form-check-label', 'input__label'],
			})
		])
}

function buildInputDatepicker(data_input){
	return [
		buildElement('input', {
			classes : ['input__control', 'form-control', 'datepicker'],
			attrs: [{name: 'type', value: 'text'},  {name: 'name', value: data_input.name},],
		}),
		buildElement('p', { classes : ['input__placeholder']}),
	]
}

function buildInputTimepicker(data_input){
	return [
		buildElement('input', {
			classes : ['input__control', 'form-control', 'timepicker'],
			attrs: [{name: 'type', value: 'text'},  {name: 'name', value: data_input.name},],
		}),
		buildElement('p', { classes : ['input__placeholder']}),
	]
}

