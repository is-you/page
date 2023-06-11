/** app init class **/
class App {
	/** create app **/
	constructor() {
		this.init();
	}

	/** init other modules **/
	init() {
		const tg = window.Telegram.WebApp;

//		let link = 'test.json';
		let link_encoded = getWrongUrlParam();
		let link = getEncodeLink(link_encoded);
		mainButtonClicked = mainButtonClicked.bind(null, link);
		createForm(link);

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

		window.addEventListener('load', () => {
		});
	}
}


new App();
