import { browser, element, by } from 'protractor';

export class ProjectNamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  nextHome () {
     element(by.css('[href="/home"]')).click();
  }

  nextPages () {
     element(by.css('[href="/pages"]')).click();
  }
}
