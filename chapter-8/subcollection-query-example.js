const querySnapshot = await db.collectionGroup('mySubCollection').where('isActive', '==', true).get()