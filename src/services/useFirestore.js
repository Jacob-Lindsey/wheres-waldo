import { useState, useEffect } from "react";
import { db } from "./firebase";

function useFirestore(collection) {
    const [docs, setDocs] = useState(null);

    useEffect(() => {
        const query = db
            .collection(collection)
            .orderBy('time', 'asc')
            .limit(10);

        const unsub = query.onSnapshot((snap) => {
            const documents = snap.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            console.log(`Getting ${collection}`);
            setDocs(documents);
        });
        return () => unsub();
    },[collection]);

    return [docs];
}

export default useFirestore;