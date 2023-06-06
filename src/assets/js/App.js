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
			
			getWrongUrlParam();

			if(tg.headerColor !== null){
				setColorScheme(tg.themeParams);
			}
			
			tg.MainButton.show();

			console.log(tg.colorScheme, tg.headerColor, tg.backgroundColor, tg.themeParams);
			createForm();
		});
	}
}

function getWrongUrlParam(){
	let url = window.location.href;
	let url_clear = url.split('#tgWebAppData')[0];
	let url_params_row = url.split('?')[1];
	let url_callback_value = url.split('=')[1]
	console.log(url_clear, url_params_row, url_callback_value);
	return url_callback_value;
}

function setColorScheme(scheme) {
	document.documentElement.style.setProperty("--color-form-background", scheme.bg_color);
	document.documentElement.style.setProperty("--color-background", scheme.secondary_bg_color);
	document.documentElement.style.setProperty("--color-decor", scheme.button_color);
	document.documentElement.style.setProperty("--color-button-text", scheme.button_text_color);
	document.documentElement.style.setProperty("--color-text", scheme.text_color);
}

new App();
