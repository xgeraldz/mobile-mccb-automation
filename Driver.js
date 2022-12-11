const { remote } = require('webdriverio');

const options = {
  port: 4723,
  desiredCapabilities: {
    platformName: 'iOS',
    deviceName: 'iPhone 11 Pro',
    app: '/path/to/your/app.app'
  }
};

const driver = remote(options);
