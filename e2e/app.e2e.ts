import { AngularCliAppPlaygroundPage } from './app.po';

describe('angular-cli-app-playground App', function() {
  let page: AngularCliAppPlaygroundPage;

  beforeEach(() => {
    page = new AngularCliAppPlaygroundPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-cli-app-playground works!');
  });
});
