import { ProjectNamePage } from './app.po';

describe('project-name App', function() {
  let page: ProjectNamePage;

  beforeEach(() => {
    page = new ProjectNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
