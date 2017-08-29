const pxrem = require('pxrem')
const loaderUtils = require('loader-utils')

module.exports = function loader(content) {
  const config = loaderUtils.getOptions(this)
  return pxrem.process(content, config).toString()
}
