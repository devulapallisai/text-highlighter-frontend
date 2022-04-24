import React from "react";

function Middleview({
  middletext,
  num,
  setselectedtext,
  setselectedtextstart,
  setselectedtextend,
}) {
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
      ) != ""
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
        <textarea
          name="textselection"
          id="textselection"
          className="w-[100%] h-[80vh] border-none focus:outline-none"
          value={middletext}
          onSelect={(event) => selecttext(event)}
        ></textarea>
      </div>
    </div>
  );
}

export default Middleview;
