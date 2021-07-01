const FieldValue = admin.firestore.FieldValue;
const collectionRef = db.collection('myCollection').doc('myDocument');

const res = await collectionRef.update({
  myDocumentField: FieldValue.delete()
});
