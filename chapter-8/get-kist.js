const collectionRef = db.collection('myCollection');
const snapshot = await collectionRef.where('isActive', '==', true).get();

if (snapshot.empty) {
  //TODO: Handle no document list found case.
}  

snapshot.forEach(doc => {
//TODO: Render doc.data() for each document in the list. 
}); 
