'use strict'

var pxrem = require('pxrem')
var loaderUtils = require('loader-utils')

module.exports = function (content) {
  var config = loaderUtils.getOptions(this)
  return pxrem.process(content, config).toString()
}
