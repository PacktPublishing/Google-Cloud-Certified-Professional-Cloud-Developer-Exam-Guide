const opentelemetry = require('@opentelemetry/api');
const {NodeTracerProvider} = require('@opentelemetry/node');
const {SimpleSpanProcessor} = require('@opentelemetry/tracing');
require('@google-cloud/trace-agent').start();
require('@google-cloud/debug-agent').start({
  serviceContext: {
    service: 'debug-test',
    version: '1.0.0',
    enableCanary: false,
  }
});
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  opentelemetry.trace.setGlobalTracerProvider(provider);
  const tracer = opentelemetry.trace.getTracer('basic');
  const span = tracer.startSpan('cloud-trace-test');
  span.addEvent('simulate work');
  for (let i = 0; i <= Math.floor(Math.random() * 40000000); i += 1) { }
  span.end();
  var name = req.query.name;
  res.send('Hello ' + name);
})
 
app.listen(80);
