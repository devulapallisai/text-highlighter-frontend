import React from "react";
import "../index.css";
function Leftsidebar({ text, num, middletext, setnum, setmiddletext }) {
  return (
    <div className="sidebar overflow-x-hidden">
      <div
        className="w-[20vw] py-4 bg-white text-black font-bold text-2xl
       text-center font-popp"
        style={{ fontFamily: "Poppins" }}
      >
        Records
      </div>
      {text.map((text, index) => (
        <div
          key={index}
          className="font-robo font-normal py-4 cursor-pointer color-white w-[20vw] pl-1 border-b-2 hover:bg-white hover:text-black"
          onClick={() => {
            setnum(index + 1);
            setmiddletext(text);
          }}
        >
          {text.slice(0, 30)} ...
        </div>
      ))}
    </div>
  );
}

export default Leftsidebar;
