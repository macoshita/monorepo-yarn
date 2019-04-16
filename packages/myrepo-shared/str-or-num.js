const _ = require('lodash')

module.exports = function(v) {
  return _.isString(v) || _.isNumber(v)
}
