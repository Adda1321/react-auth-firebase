import React from "react";
import { collection } from "./storage";
function ButtonDot(props) {
  const call = (e) => {
    console.log(props.docp.id);
    e.stopPropagation();
    console.log(props.docp);
    // props.docp.forEach(docSnap => {
    var query = collection.where("id", "==", props.docp.id);
    //props.docp.id = gives the id of the document which is being clicked
    // above collection is equal to firebase.firestore().collection('images);
    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
    // })
  };
  const calll = () => {
    // console.log(props.docp.id);
    // var x;
    // for (x of props.docp) { console.log(x) }
    props.docp.forEach((x, y) => console.log(x, y));
  };
  return (
    <div>
      <button onClick={calll}>X </button>
    </div>
  );
}

export default ButtonDot;
