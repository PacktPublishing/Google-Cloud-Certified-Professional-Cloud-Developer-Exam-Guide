require('@google-cloud/debug-agent').start({
  serviceContext: {
    service: 'debug-test',
    version: '1.0.0',
    enableCanary: false,
    allowExpressions: true
  }
});
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {

  var name = req.query.name;
  res.send('Hello ' + name);

})
 
app.listen(80);