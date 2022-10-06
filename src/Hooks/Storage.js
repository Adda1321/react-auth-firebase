import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { projectstorage, projectfirestore } from "../firebase";
import {
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";

const StorageFunction = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);
  useEffect(() => {
    //refernce to store
    const storageRef = ref(projectstorage, file.name);
    //firebase.storage().ref() . Put()
    //const storageRef = ref(storage, 'images/' + file.name);
    const collectionRef = collection(projectfirestore, `images`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(`storageRef os equal to: ${storageRef}`);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(percentage);
        console.log("Upload is " + percentage + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        seterror(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
        }
      },
      async () => {
        const urll = getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => {
            console.log("File available at", downloadURL);

            const createdAt = serverTimestamp();

            addDoc(collectionRef, {
              url: downloadURL,
              createdAt,
            });
            seturl(urll);
          }
        );
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default StorageFunction;
