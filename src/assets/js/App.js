/** app init class **/
class App {
	/** create app **/
	constructor() {
		this.init();
	}

	/** init other modules **/
	init() {
		const tg = window.Telegram.WebApp;

		//let link = 'https://bs1.konser.ru/3121/notifybot/doget?action=timezone&userid=563861630';
		let link_encoded = getWrongUrlParam();
		let link = getEncodeLink(link_encoded);
		console.log(link);

		mainButtonClicked = mainButtonClicked.bind(null, link);

		if (tg.headerColor !== null) {
			setColorScheme(tg.themeParams);
		} else {
			const theme_params = {
				bg_color: "#212121",
				button_color: "#8774e1",
				button_text_color: "#ffffff",
				hint_color: "#aaaaaa",
				link_color: "#8774e1",
				secondary_bg_color: "#0f0f0f",
				text_color: "#ffffff"
			};
			setColorScheme(theme_params);
		}

		tgSetting(tg);
		createForm(link);

		window.addEventListener('load', () => {
		});
	}
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

function tgSetting(tg) {
	tg.enableClosingConfirmation();
	tg.isClosingConfirmationEnable = true;
	const btn = tg.MainButton;
	tg.onEvent('mainButtonClicked', mainButtonClicked);
	btn.setText('Send');
	btn.disable();
	btn.show();
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
	});
}

function tgValid() {
	window.Telegram.WebApp.MainButton.enable();
}

function tgInvalid() {
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

new App();
