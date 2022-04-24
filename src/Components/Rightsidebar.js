import React, { useEffect, useState } from "react";

function Rightsidebar({ num, selectedtext }) {
  const tablehead = ["Text", "Start", "End", ""];
  const [tabledata, settabledata] = useState([]);
  const [deletedtext, setdeletedtext] = useState(null);
  // const [deletedstart, setdeletedstart] = useState(null);
  // const [deletedend, setdeletedend] = useState(null);
  useEffect(() => {
    if (num) {
      fetch(`http://127.0.0.1:5000/api/getallhighlights/${num}`).then((res) => {
        if (res.ok) {
          res.json().then((ret) => settabledata(ret));
        } else {
          settabledata([]);
        }
      });
    }
  }, [num, selectedtext, deletedtext]);
  const deleteItem = (text, end, start) => {
    const deleteObj = {
      deletedtext: text,
      deletedstart: start,
      deletedend: end,
    };
    setdeletedtext(text);

    if (num) {
      fetch(`http://127.0.0.1:5000/api/deletehighlight/${num}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(deleteObj),
      }).then((res) => {
        if (res.ok) {
          // res.json()
          // console.log(res);
          setdeletedtext(null);
          alert("Your unwanted highlight is being deleted");
        }
      });
    }
  };
  return (
    <>
      <div
        className="w-[40vw] text-center font-popp text-2xl py-4 text-black 
      bg-white font-bold"
      >
        Highlights
      </div>
      <div className="w-[38vw] mx-[1vw] mt-4">
        <br />
        {tabledata.length ? (
          <div className="overflow-x-auto sm:rounded-lg">
            <table
              className="w-full text-sm text-left text-gray-500 
          dark:text-gray-400"
            >
              <thead
                className="text-xs text-gray-700 uppercase bg-gray-50 
          dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  {tablehead.map((item, index) => (
                    <th key={index} scope="col" className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabledata.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b dark:bg-gray-800 dark:border-gray-700 
              odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 
              even:dark:bg-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {item.highlight}
                    </th>
                    <td className="px-6 py-4">{item.start}</td>
                    <td className="px-6 py-4">{item.end}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className="font-medium text-blue-600 
                    dark:text-blue-500"
                        onClick={() => {
                          deleteItem(item.highlight, item.end, item.start);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-4 bg-slate-200 font-robo">
            No Highlights Found
          </div>
        )}
      </div>
    </>
  );
}

export default Rightsidebar;
