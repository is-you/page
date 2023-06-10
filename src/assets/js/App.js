/** app init class **/
class App {
	/** create app **/
	constructor() {
		this.init();
	}

	/** init other modules **/
	init() {
		const tg = window.Telegram.WebApp;
		tgSetting(tg);

//		let link = 'test.json';
		let link_encoded = getWrongUrlParam();
		let link = getEncodeLink(link_encoded);

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
	btn.setText('Send');
	btn.disable();
	btn.show();
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
}

new App();
