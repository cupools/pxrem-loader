'use strict'

var pxrem = require('pxrem')
var loaderUtils = require('loader-utils')
var assign = require('lodash.assign')

var defaultOptions = {
  root: 75,
  filter: null,
  fixed: 6,
  keepPx: false,
  commentFilter: 'no'
}

module.exports = function(content) {
  var config = loaderUtils.getLoaderConfig(this, 'pxrem')
  var options = assign({}, defaultOptions, config)
  return pxrem(content, options)
}