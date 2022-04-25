import React, { useEffect, useState } from "react";
import { Selection } from "react-highlight-within-textarea";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";
function Middleview({
  middletext,
  num,
  setselectedtext,
  selectedtext,
  setselectedtextstart,
  setselectedtextend,
  selectedtextend,
  selectedtextstart,
  tabledata,
}) {
  const words = [[]];
  for (let index = 0; index < tabledata.length; index++) {
    const element = tabledata[index];
    words.push([element["start"], element["end"]]);
  }
  let [state, setState] = useState(() => ({
    anchor: 0,
    focus: 0,
    selection: undefined,
  }));
  const onChange = (value, selection) => {
    const { anchor, focus } = selection;
    console.log(anchor, focus);
    if (anchor !== focus) {
      if (anchor > focus) {
        if (anchor !== selectedtextstart && focus !== selectedtextend) {
          setselectedtext(middletext.slice(focus, anchor));
          setselectedtextstart(focus);
          setselectedtextend(anchor);
        } else {
          setselectedtext(null);
        }
      } else {
        if (anchor !== selectedtextstart && focus !== selectedtextend) {
          setselectedtext(middletext.slice(anchor, focus));
          setselectedtextstart(anchor);
          setselectedtextend(focus);
        } else {
          setselectedtext(null);
        }
      }
    }
    const requestObj = {
      sno: num.toString(),
      highlight: selectedtext,
      start: selectedtextstart,
      end: selectedtextend,
    };
    if (selection && requestObj.highlight && requestObj.highlight != " ") {
      fetch("http://127.0.0.1:5000/api/addHighlight", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestObj),
      }).then((res) => {
        if (res.ok) {
          // setState({ anchor: 0, focus: 0, selection: undefined });
          setselectedtext(null);
        }
      });
    }
    setState({ anchor: 0, focus: 0, selection: undefined });
    return value;
  };
  return (
    <div>
      <div className="py-4 font-popp font-mediumbold text-xl text-center bg-[rgb(139,69,19)] text-white">
        Record #: {num}
      </div>
      <div className="mt-5 font-robo font-mediumbold mx-5">
        {middletext ? (
          <div>
            <HighlightWithinTextarea
              value={middletext}
              highlight={words}
              onChange={onChange}
              selection={state.selection}
            />
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
