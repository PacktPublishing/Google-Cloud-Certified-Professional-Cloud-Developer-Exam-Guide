const data = {
  fieldOne: 'valueOne',
  nestedfieldTwo: 
{
fieldOne: 'valueOne',
fieldTwo: 'valueTwo'
},
fieldThree:[1,2,3]
};


const collectionRef = db.collection('myCollection').doc('myDocument');
await collectionRef.set({
  fieldFour: 1
}, { merge: true });
