const express = require('express')
const njk = require('nunjucks')

const app = express()

const env = njk.configure('src/', {
  autoescape: true,
  express: app,
  watch: true
})

app.use('/static', express.static('static'))

app.get('/', function(req, res) {
  res.render('pages/index.njk')
})

app.get('/*.html$/', function(req, res) {
  res.render(`pages/${req.params[0]}.njk`)
})

var listener = app.listen(9000)
console.log(`listening on port ${listener.address().port}`)