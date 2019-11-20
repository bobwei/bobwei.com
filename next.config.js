const R = require('ramda');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = R.pipe(withSass, withCss)({});
