//Google Cloud client library for Cloud Storage
const {Storage} = require('@google-cloud/storage');
// The client library will use ADC to get service account
credentials.
const storage = new Storage();
async function listBuckets() {
const results = await storage.getBuckets();
const [buckets] = results;
buckets.forEach(bucket => {
console.log(bucket.name);
});
}
listBuckets();