import React from "react";
import useImageHook from "../../Hooks/useImageHook";
import { motion } from "framer-motion";
// import ButtonDot from "./Button";
const ImageGrid = ({ setselected }) => {
  const m_doc = useImageHook("images");
  console.log("Image Grid  :");
  console.log(m_doc); //Array of Objects

  let demo = { lname: "adil", fname: "mustafa", id: 1 };
  const cars = ["BMW", "Volvo", "Mini"];
  let demo2 = [
    { lname: "adda", id: 1 },
    { lname: "addu", id: 2 },
  ];
  return (
    <div className="img-grid">
      {m_doc &&
        m_doc.map((docs) => (
          <div
            className="img-wrap"
            docs_id={docs.id}
            key={docs.id}
            onClick={() => setselected(docs.url)}
          >
            <img src={docs.url} alt="uploaded pic" />
            {/* <ButtonDot docp={demo2} /> */}
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
