const subscriptionName = 'SUBSCRIPTION_NAME';
const timeout = TIMEOUT_IN_SECONDS;
const {PubSub} = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

function listenForMessages() {

  const subscription = pubSubClient.subscription(subscriptionName);
  const messageHandler = message => {
    //TODO: get message information from message.data
    message.ack();
  };

  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
  }, timeout * 1000);
}
listenForMessages();