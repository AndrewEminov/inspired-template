var postcss = require('postcss'),
    main = require('./main');

module.exports = postcss.plugin('postcss-merge-grid-template', main);