/** app init class **/
class App {
  /** create app **/
  constructor() {
    this.init();
  }

  /** init other modules **/
  init() {
    window.addEventListener('load', ()=>{
      const tg = window.Telegram.WebApp;
      console.log(tg.colorScheme, tg.headerColor, tg.backgroundColor, tg.colorScheme, tg.themeParams );
      createForm();
    });
  }
}

new App();
