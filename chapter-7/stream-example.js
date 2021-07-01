const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket(BUCKET_NAME);
const fs = require('fs');
const remoteFile = bucket.file(FILE_NAME);
const localFilename = DESTINATION_FILE_NAME;
remoteFile.createReadStream()
.on('error', function(err) {
//TODO: handle download error.
})
.on('response', function(response) {
//TODO: download in progress.
})
.on('end', function() {
//TODO: download complete.
})
.pipe(fs.createWriteStream(localFilename));