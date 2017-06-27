const head = require('../templates/head')
const header = require('../templates/header')
const profile = require('../templates/profile')
const timeline = require('../templates/timeline')
const footer = require('../templates/footer')

module.exports = head + header + '<div class="wrap">' + profile + timeline + footer