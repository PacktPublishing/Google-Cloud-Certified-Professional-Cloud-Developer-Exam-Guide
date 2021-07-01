const batch = db.batch();
const documentRefOne = db.collection('myCollection').doc('myDocumentOne');
batch.set(documentRefOne, {myField: 'myValue'});
const documentRefTwo = db.collection('myCollection').doc('myDocumentTwo');
batch.update(documentRefTwo, {myField: myNewValue});
const documentRefThree = db.collection('myCollection').doc('myDocumentThree');
batch.delete(documentRefThree);
await batch.commit();