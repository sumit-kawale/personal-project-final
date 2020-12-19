import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('pb-menu a')).getText() as Promise<string>;
  }

  getClick(){
    return element(by.partialLinkText('Login'));
  }
}
