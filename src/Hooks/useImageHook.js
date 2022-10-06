import React, { useEffect, useState } from "react";
import { projectfirestore } from "../firebase";
import {
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
  getDocs,
  collection,
} from "firebase/firestore";

const useImageHook = (_collection) => {
  const [docs, setdocs] = useState([]);
  useEffect(() => {
    // const unsub = collection(projectfirestore, _collection)
    let documents = [];
    const unsub = getDocs(collection(projectfirestore, _collection)).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          documents.push({ ...doc.data(), id: doc.id });
          //   snap.forEach((doc) => {
          //   });

          setdocs(documents);
        });
      }
    );

    //   .orderBy("createdAt", "desc")
    //   .onSnapshot((snap) => {
    //     let documents = [];
    //     snap.forEach((doc) => {
    //       documents.push({ ...doc.data(), id: doc.id });
    //     });

    //     setdocs(documents);
    //   });

    // return () => unsub();
    //   querySnapshot;
    // };
  }, [_collection]);

  return docs;
};

export default useImageHook;
