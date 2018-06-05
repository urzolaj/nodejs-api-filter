import { HotelsUiPage } from './app.po';

describe('hotels-ui App', () => {
  let page: HotelsUiPage;

  beforeEach(() => {
    page = new HotelsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
