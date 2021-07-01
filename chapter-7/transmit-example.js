const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const myBucket = storage.bucket(BUCKET_NAME);
const file = myBucket.file(DESTINATION_FILE_NAME);

fs.createReadStream(FILE_NAME)
.pipe(file.createWriteStream())
.on('error', function(err) {
//TODO: handle upload error.
})
.on('finish', function() {
//TODO: upload complete.
});