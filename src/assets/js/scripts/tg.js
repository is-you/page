function tgSetting(form_button) {
	const tg = window.Telegram.WebApp;

	tg.enableClosingConfirmation();
	tg.isClosingConfirmationEnable = true;
	const btn = tg.MainButton;
	tg.onEvent('mainButtonClicked', mainButtonClicked);
	btn.setText(form_button);
	btn.disable();
	btn.show()
}

function getWrongUrlParam() {
	let url = window.location.href;

	let url_clear = url.split('#')[0];

	let url_params_row = url_clear.split('?')[1];
	let url_callback_value = url_params_row.split('=')[1]

	return url_callback_value;
}

function getEncodeLink(link_encoded) {
	return atob(link_encoded);
}

function mainButtonClicked(link){
	const data = getFormData();

	console.log(link, data);

	fetch(link, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				window.Telegram.WebApp.close();
			}
			else{
				return Promise.reject(response);
			}
		})
		.catch(err=>{
			console.log(err.status)
		});
}

function tgValid(is_valid) {
	console.log(is_valid);
	if(is_valid)
		window.Telegram.WebApp.MainButton.enable();
	else
		window.Telegram.WebApp.MainButton.disable();
}

function setColorScheme(scheme) {
	document.documentElement.style.setProperty("--color-form-background", scheme.bg_color);
	document.documentElement.style.setProperty("--color-background", scheme.secondary_bg_color);
	document.documentElement.style.setProperty("--color-decor", scheme.button_color);
	document.documentElement.style.setProperty("--color-button-text", scheme.button_text_color);
	document.documentElement.style.setProperty("--color-text", scheme.text_color);
	document.documentElement.style.setProperty("--color-hint", scheme.hint_color);
}
