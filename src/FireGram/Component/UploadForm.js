import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setfile] = useState(null); // difference b/w null , undefined (''()) , blank
  const [error, seterror] = useState(null);
  let types = ["image/png", "image/jpeg"];

  const buttonHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setfile(selected);
      console.log(selected);
      seterror("");
    } else {
      setfile("");
      seterror("Please select a valid image png or jpeg");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={buttonHandler} />
        <span>+</span>
      </label>
      <div className="Output">
        {error && <div className="error"> {error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setfile={setfile} />}
      </div>
    </form>
  );
};

export default UploadForm;
