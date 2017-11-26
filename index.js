var rule = {
  proto: /^([A-Za-z]+:)?/,
  host: /([0-9.\-A-Za-z]+)/,
  port: /(::(\d+))?/,
  pathName: /(?:\/([^?#]*))?/,
  param: /(?:\?([^#]*))?/,
  hash: /(?:#(.*))?$/
}

function CCUrlParse(url) {
  this.url = url;
  this._parse();
}

CCUrlParse.prototype._parse = function() {
  this.proto = this._parseProto()
  this.host = this._parseHost()
  this.port = this._parsePort()
  this.pathname = this._parsePathname()
  this.param = this._parseParam()
  this.hash = this._parseHash()
}

CCUrlParse.prototype._parseProto = function() {
  return this.url.match(rule['proto'])
}

CCUrlParse.prototype._parseHost = function() {
  return this.url.match(rule['host'])
}

CCUrlParse.prototype._parsePort = function() {
  return this.url.match(rule['port'])
}

CCUrlParse.prototype._parsePathname = function() {
  return this.url.match(rule['pathName'])
}

CCUrlParse.prototype._parseParam = function() {
  return this.url.match(rule['param'])
}

CCUrlParse.prototype._parseHash = function() {
  return this.url.match(rule['hash'])
}

module.exports = function(url) {
  var urlParse = new CCUrlParse(url)
  return urlParse
}
