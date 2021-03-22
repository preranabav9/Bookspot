import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }
  // get header
  getdashboard(): ElementFinder {
    return element(by.css('nav'));
  }
  // check header is present or not
  isDashboardPresent(): promise.Promise<boolean> {
    return this.getdashboard().isPresent();
  }
  // for div in dashboard
  getdiv(): ElementFinder {
    return element(by.css('div'));
  }
  isdivpresent(): promise.Promise<boolean> {
    return this.getdiv().isPresent();
  }
    // for h1 in dashboard
    getheader(): ElementFinder {
      return element(by.css('h1'));
    }
    isheaderPresent(): promise.Promise<boolean> {
      return this.getheader().isPresent();
    }
    // section
    getsection(): ElementFinder {
      return element(by.css('section'));
    }
    issectionPresent(): promise.Promise<boolean> {
      return this.getsection().isPresent();
    }
    // footer
  getfooter(): ElementFinder {
    return element(by.css('section'));
  }
  isfooterPresent(): promise.Promise<boolean> {
    return this.getfooter().isPresent();
  }}
