import { ProjectNamePage } from './app.po';
import { PagesPage } from './app.pages.po';
import { IssuePage } from './app.issue.po';

describe('project-name App', function() {
  let page: ProjectNamePage;
  let pages: PagesPage;
  let issue: IssuePage;

  beforeEach(() => {
    page = new ProjectNamePage();
    pages = new PagesPage();
    issue = new IssuePage();
  });

  it('should display message saying Issue Tracker', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Issue Tracker');
  });

  it('should display message saying Issue Tracker after Home-link Click', () => {
    page.nextHome();
    expect(page.getParagraphText()).toEqual('Issue Tracker');
  });

  it('should display message saying バグ管理システム, 背景, 基本的な機能', () => {
    page.nextPages();
    expect(pages.getParagraphText()).toEqual('バグ管理システム');
    expect(pages.getParagraphTexts(0)).toEqual('バグ管理システム');
    expect(pages.getParagraphTexts(1)).toEqual('背景');
    expect(pages.getParagraphTexts(2)).toEqual('基本的な機能');
  });

  it('Issue Count', () => {
    pages.nextIssuePage();
    
    issue.getInput().sendKeys('テスト');
    issue.getTextArea().sendKeys('これはテストです');
    issue.getButton().click();
    expect(issue.getListCount()).toEqual(3);
  });

});
