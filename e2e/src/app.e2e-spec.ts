import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

// -------------------------dashboard--------------------------
  // for navbar
  it('should check nav is present in dashboard page', () => {
    page.navigateTo();
    expect(page.isDashboardPresent()).toBeTruthy('<navbar> should exist in dashboard.component.html');
  });
   // for div
    it('should check div is present dashboard page', () => {
      page.navigateTo();
      expect(page.isdivpresent()).toBeTruthy('<div> should exist in dashboard.component.html');
    });
  // for section
  it('should check section is present dashboard page', () => {
    page.navigateTo();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in dashboard.component.html');
   });
  // for h1
  it('should check h1 is present dashboard page', () => {
   page.navigateTo();
   expect(page.isheaderPresent()).toBeTruthy('<h1> should exist in dashboard.component.html');
  });
  // for footer
  it('should check footer is present dashboard page', () => {
    page.navigateTo();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in dashboard.component.html');
   });

   
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
