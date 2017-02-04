import { RbPage } from './app.po';

describe('rb App', function() {
  let page: RbPage;

  beforeEach(() => {
    page = new RbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
