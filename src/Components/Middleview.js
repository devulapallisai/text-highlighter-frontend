import React, { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
function Middleview({
  middletext,
  num,
  setselectedtext,
  setselectedtextstart,
  setselectedtextend,
  tabledata,
}) {
  const searchwords = [];
  for (let index = 0; index < tabledata.length; index++) {
    const element = tabledata[index];
    searchwords.push(element["highlight"]);
  }
  const [highlighter, sethighlighter] = useState(false);
  const selecttext = (event) => {
    setselectedtext(
      event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      )
    );
    setselectedtextstart(event.target.selectionStart);
    setselectedtextend(event.target.selectionEnd);
    const requestObj = {
      sno: num.toString(),
      highlight: event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      ),
      start: event.target.selectionStart,
      end: event.target.selectionEnd,
    };
    if (
      event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      ) !== ""
    ) {
      fetch("http://127.0.0.1:5000/api/addHighlight", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestObj),
      }).then((res) => {
        if (res.ok) {
          setselectedtext(null);
        }
      });
    }
  };
  return (
    <div>
      <div className="py-4 font-popp font-mediumbold text-xl text-center bg-[rgb(139,69,19)] text-white">
        Record #: {num}
      </div>
      <div className="mt-5 font-robo font-mediumbold mx-5">
        {middletext ? (
          <div>
            {highlighter ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={searchwords}
                autoEscape={true}
                textToHighlight={middletext}
              />
            ) : (
              <textarea
                name="textselection"
                id="textselection"
                className="w-[100%] h-[80vh] border-none focus:outline-none"
                value={middletext}
                // onBlur={() => sethighlighter(true)}
                onSelect={(event) => selecttext(event)}
              ></textarea>
            )}
            <button
              className="fixed bottom-2 right-[44vw] bg-blue-500
             hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-[10000]"
              onClick={() => sethighlighter((prev) => !prev)}
            >
              {highlighter ? "Highlight text" : "Highlighted text"}
            </button>
          </div>
        ) : (
          <h1 className="font-popp text-2xl font-semibold">
            No records selected
          </h1>
        )}
      </div>
    </div>
  );
}

export default Middleview;
