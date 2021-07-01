const topicName = 'TOPIC_NAME';
const data = JSON.stringify({field: 'value'});

const {PubSub} = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

async function publishMessage() {
  
  const dataBuffer = Buffer.from(data);

  try {
    
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    
  } catch (error) {
    //TODO: Handle error.
  }
}

publishMessage();