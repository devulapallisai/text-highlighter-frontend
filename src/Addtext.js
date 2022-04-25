import React, { useState } from "react";
import { Link } from "react-router-dom";
function Addtext() {
  const [text, settext] = useState("Add your text here");
  const addtext = () => {
    if (text) {
      fetch("http://127.0.0.1:5000/api/posttextdata", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ text: text }),
      }).then((res) => {
        if (res.ok) {
          settext("Add your text here");
          alert("Text entry success :)");
        }
      });
    }
  };
  return (
    <div>
      <div className="ml-10 mt-10 font-bold text-2xl font-popp">
        Welcome to TextHighlighter
      </div>

      <p className="font-robo font-semibold ml-10 mt-5">
        Add your new text here
      </p>
      <div className="ml-10 mt-2">
        <textarea
          className="w-[80vw] h-[50vh] border-2"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></textarea>
        <br />
        <button
          to="/addText"
          class="bg-blue-500 hover:bg-blue-700 z-[1000] text-white
       font-bold py-2 px-4 rounded font-robo"
          onClick={addtext}
        >
          Add text into DB
        </button>
        <br />
        <br />
        <Link
          to="/"
          class="mt-2 bg-red-500 hover:bg-red-700 z-[1000] text-white
       font-bold py-2 px-4 rounded font-robo"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}

export default Addtext;
