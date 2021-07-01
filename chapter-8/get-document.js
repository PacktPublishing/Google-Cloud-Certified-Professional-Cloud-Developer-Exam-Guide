const collectionRef = db.collection('myCollection').doc('myDocument');
const doc = await collectionRef.get();

if (!doc.exists) {
  //TODO: Handle no document found case.
} else {
  //TODO: Render doc.data() of the document.
}