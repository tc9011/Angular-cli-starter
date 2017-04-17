import { LoraAppPage } from './app.po';

describe('lora-app App', function() {
  let page: LoraAppPage;

  beforeEach(() => {
    page = new LoraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
