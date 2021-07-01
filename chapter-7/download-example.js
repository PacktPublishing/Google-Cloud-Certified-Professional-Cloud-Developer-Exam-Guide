const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
async function downloadFile() {
const options = {
destination: DESTINATION_FILE_NAME,
};
await storage.bucket(BUCKET_NAME).file(FILE_NAME).
download(options);
}
downloadFile().catch(console.error);