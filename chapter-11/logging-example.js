const { Logging } = require('@google-cloud/logging');

const logging = new Logging();
const log = logging.log('cloud-logging-test');

exports.helloWorld = (req, res) => {
  
const METADATA = {
  resource: {
    type: 'cloud_function',
    labels: {
      function_name: 'cloud-logging-test',
      region: 'us-central1'
    }
  }
};

const data = {
  event: 'userSearch',
  value: '12345',
  message: 'User not found'
};

const entry = log.entry(METADATA, data);
log.write(entry);

res.status(200).send("OK");

};