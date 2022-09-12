/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('click button visible', async () => {
    await expect(element(by.id('click'))).toBeVisible();
  });
  it('click button click', async () => {
    await expect(element(by.id('click'))).toBeVisible();

    await element(by.id('click')).tap();
    await expect(element(by.id('email'))).toHaveText('true');
  });

  it('Enter name test ', async () => {
    await expect(element(by.id('entername'))).toBeVisible();
    await element(by.id('entername')).typeText('Raj');
    await expect(element(by.id('enteredname'))).toHaveText('Raj');
  });
});
