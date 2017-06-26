var http = require('http')
var auth = require('basic-auth')
var ecstatic = require('ecstatic')

var port = process.env.PORT || 5001
var username = process.env.USERNAME || 'xteam'
var password = process.env.PASSWORD || 'xteam'

var serveStaticFiles = ecstatic({
  root: __dirname + '/dist'
})

// Create server
var server = http.createServer(function (req, res) {
  var creds = auth(req)

  if (!creds || creds.name !== username || creds.pass !== password) {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="staging"')
    return res.end('Access denied')
  }

  return serveStaticFiles(req, res)
})

// Listen
server.listen(port)
