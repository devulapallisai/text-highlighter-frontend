import React from "react";

function Middleview({
  middletext,
  num,
  setselectedtext,
  setselectedtextstart,
  setselectedtextend,
}) {
  const selecttext = (event) => {
    // console.log(
    //   "text selected is : ",
    //   event.target.value.substring(
    //     event.target.selectionStart,
    //     event.target.selectionEnd
    //   )
    // );
    setselectedtext(
      event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      )
    );
    setselectedtextstart(event.target.selectionStart);
    setselectedtextend(event.target.selectionEnd);
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
