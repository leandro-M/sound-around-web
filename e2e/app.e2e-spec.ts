import { SoundAroundWebPage } from './app.po';

describe('sound-around-web App', () => {
  let page: SoundAroundWebPage;

  beforeEach(() => {
    page = new SoundAroundWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
