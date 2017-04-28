import { ScrumCliPage } from './app.po';

describe('scrum-cli App', () => {
  let page: ScrumCliPage;

  beforeEach(() => {
    page = new ScrumCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
