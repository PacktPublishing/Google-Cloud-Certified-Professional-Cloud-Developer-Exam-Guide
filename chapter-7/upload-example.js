const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
async function uploadFile() {
await storage.bucket(BUCKET_NAME).upload(FILE_NAME, {
destination: DESTINATION_FILE_NAME,
metadata: {
cacheControl: CACHE_CONTROL,
},
});
}
uploadFile().catch(console.error);