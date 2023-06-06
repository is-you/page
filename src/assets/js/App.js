/** app init class **/
class App {
	/** create app **/
	constructor() {
		this.init();
	}

	/** init other modules **/
	init() {
		window.addEventListener('load', () => {
			const tg = window.Telegram.WebApp;
			tgSetting();

			//let link = 'test.json';
			let link_encoded = getWrongUrlParam();
			let link = getEncodeLink(link_encoded);

			if(tg.headerColor !== null){
				setColorScheme(tg.themeParams);
			}

			createForm(link);
		});
	}
}

function getWrongUrlParam(){
	let url = window.location.href;
	let url_clear = url.split('#')[0];
	let url_params_row = url_clear.split('?')[1];
	let url_callback_value = url_params_row.split('=')[1]
	console.log(url_clear,'\n---------\n', url_params_row, '\n---------\n', url_callback_value);


	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams.get('callback'));

	return url_callback_value;
}

function getEncodeLink(link_encoded){
	return atob(link_encoded);
}

function tgSetting(tg){
	tg.enableClosingConfirmation();
	const btn = tg.MainButton;
	btn.setText('Send');
	btn.disable();
	btn.show();
}

function setColorScheme(scheme) {
	document.documentElement.style.setProperty("--color-form-background", scheme.bg_color);
	document.documentElement.style.setProperty("--color-background", scheme.secondary_bg_color);
	document.documentElement.style.setProperty("--color-decor", scheme.button_color);
	document.documentElement.style.setProperty("--color-button-text", scheme.button_text_color);
	document.documentElement.style.setProperty("--color-text", scheme.text_color);
}

new App();
