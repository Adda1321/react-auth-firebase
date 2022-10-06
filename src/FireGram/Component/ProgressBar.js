import React, { useEffect } from "react";
import StorageFunction from "../../Hooks/Storage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setfile }) => {
  const { progress, url } = StorageFunction(file);
  console.log("progress in progress bar");
  console.log(progress);
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, file]);
  return (
    <div
      className="progress-bar"
      style={{ width: progress + "%", backgroundColor: "pink" }}
    >
      {" "}
    </div>
  );
};
export default ProgressBar;
