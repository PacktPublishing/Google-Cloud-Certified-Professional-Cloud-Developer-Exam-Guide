const collectionRef = db.collection('myCollection').doc('myDocument');
const res = await collectionRef.update({
  fieldFour: admin.firestore.FieldValue.increment(1)
});