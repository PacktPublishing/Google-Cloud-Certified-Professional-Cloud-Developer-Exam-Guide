const data = {
  fieldOne: 'valueOne',
  fieldTwo: 'valueTwo',
  lastField: 'lastValue'
};

// Add a document in collection "myCollection" with ID 'myDocument'
const res = await db.collection('myCollection').doc('myDocument').set(data);