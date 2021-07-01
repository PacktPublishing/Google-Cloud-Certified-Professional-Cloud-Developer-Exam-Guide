const collectionRef = db.collection('myCollection');
const snapshot = await collectionRef.where('type', '==', 'myType').where('isActive', '==', true).get()
