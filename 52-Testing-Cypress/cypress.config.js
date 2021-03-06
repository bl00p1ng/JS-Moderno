const { defineConfig } = require("cypress");

const execa = require('execa');
const findBrowser = () => {
  // the path is hard-coded for simplicity
  const browserPath =
    '/usr/bin/vivaldi';

  return execa(browserPath, ['--version']).then((result) => {
    // STDOUT will be like "Brave Browser 77.0.69.135"
    const [, version] = /Vivaldi (\d+\.\d+\.\d+\.\d+)/.exec(result.stdout);
    // const [, version] = /vivaldi 5.3.2679.68
    const majorVersion = parseInt(version.split('.')[0]);

    return {
      name: 'Vivaldi',
      channel: 'stable',
      family: 'chromium',
      displayName: 'Vivaldi',
      version,
      path: browserPath,
      majorVersion,
    };
  });
};

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      return findBrowser().then((browser) => {
        return {
          browsers: config.browsers.concat(browser),
        };
      });
    },
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress/'
  }
});