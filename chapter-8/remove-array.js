await collectionRef.update({
  fieldThree: admin.firestore.FieldValue.arrayRemove(1)
});