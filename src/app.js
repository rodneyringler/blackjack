
export class App {

  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
      this.router = router;
      config.title = 'Blackjack Game';
      config.map([
        { route: '', home: 'home', moduleId: 'home', nav: true, title: 'Home' },
        { route: 'blackjack', name: 'blackjack', moduleId: 'blackjack', nav: true, title: 'Blackjack' },
      ]);
  }
}
