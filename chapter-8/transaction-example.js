const documentRef = db.collection('myCollection').doc('myDocument');
try {
  await db.runTransaction(async (t) => {
    const doc = await t.get(documentRef);
    const newValue = doc.data().counter + 1;
    t.update(documentRef, {counter: newValue});
  });
} catch (e) {
  // TODO: Handle transaction error.
} 