export class AngularCliAppPlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-cli-app-playground-app h1')).getText();
  }
}
