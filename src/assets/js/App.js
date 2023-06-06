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
			
			tg.MainButton.setText('Send');
     			tg.MainButton.show();
      			tg.MainButton.enable();

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
	return url_callback_value;
}

function getEncodeLink(link_encoded){
	return atob(link_encoded);
}

function setColorScheme(scheme) {
	document.documentElement.style.setProperty("--color-form-background", scheme.bg_color);
	document.documentElement.style.setProperty("--color-background", scheme.secondary_bg_color);
	document.documentElement.style.setProperty("--color-decor", scheme.button_color);
	document.documentElement.style.setProperty("--color-button-text", scheme.button_text_color);
	document.documentElement.style.setProperty("--color-text", scheme.text_color);
}

new App();
