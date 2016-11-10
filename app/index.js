var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var Raven = require('raven-js');
var sentryKey = '79d04cb8b73342cda5fc0d23e635d5cb';
var sentryApp = '113072';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'GitHub Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
    name: _APP_INFO.name
  }
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
