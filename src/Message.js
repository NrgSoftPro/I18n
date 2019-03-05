const vsprintf = require('sprintf-js').vsprintf

module.exports = class {

  constructor (text, ...params) {
    this.text = text
    this.params = params
  }

  toString () {
    return vsprintf(this.text, this.params)
  }
}