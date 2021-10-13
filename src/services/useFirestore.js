import { useState, useEffect } from 'react';
import { db } from './firebase';

function useFirestore(collection,document,subCollection) {
  const [docs, setDocs] = useState(null);

  useEffect(
    () => {
      const query = db
        .collection(collection)
        .doc(document)
        .collection(subCollection)
        .limit(10);

      const unsub = query.onSnapshot((snap) => {
        const documents = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(`Getting ${collection},${document},${subCollection}`);
        setDocs(documents);
      });
      return () => unsub();
    },
    [collection, document]
  );

  return [docs];
}

export default useFirestore;