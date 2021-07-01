const collectionRef = db.collection('myCollection').doc('myDocument');
await collectionRef.update({
  fieldThree: admin.firestore.FieldValue.arrayUnion(4)
});