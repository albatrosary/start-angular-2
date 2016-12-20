import { browser, element, by } from 'protractor';

export class PagesPage {
  getParagraphText() {
    return element(by.css('h2')).getText();
  }

  getParagraphTexts(i: number) {
    return element.all(by.css('h2')).get(i).getText();
  }

  nextTopPage () {
     element(by.css('[href="/pages/top"]')).click();
  }

  nextIssuePage () {
     element(by.css('[href="/pages/issue"]')).click();
  }

  nextWikiPage () {
     element(by.css('[href="/pages/wiki"]')).click();
  }
}
