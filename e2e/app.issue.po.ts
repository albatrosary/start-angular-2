import { browser, element, by } from 'protractor';

export class IssuePage {
  getInput() {
    return element(by.css('form input'));
  }

  getTextArea() {
    return element(by.css('form textarea'));
  }

  getButton() {
    return element(by.css('form button'));
  }

  getListCount() {
    return element.all(by.css('app-issue-list div app-issue-detail')).count();
  }
}
