import React from "react";

function Rightsidebar({ selectedtext, selectedtextend, selectedtextstart }) {
  const tablehead = ["Text", "Start", "End", ""];
  const tabledata = [
    {
      Text: "Apple MacBook Pro 17",
      Start: "Silver",
      End: "End",
    },
    {
      Text: "Apple MacBook Pro 17",
      Start: "Silver",
      End: "End",
    },
    {
      Text: selectedtext,
      Start: selectedtextstart,
      End: selectedtextend,
    },
  ];
  return (
    <div className="w-[38vw] mx-[1vw] mt-4">
      <div className="font-popp text-2xl pb-2">Highlights</div>
      <br />
      {tabledata.length ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
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
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white
                   whitespace-nowrap"
                  >
                    {item.Text}
                  </th>
                  <td className="px-6 py-4">{item.Start}</td>
                  <td className="px-6 py-4">{item.End}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="font-medium text-blue-600 
                    dark:text-blue-500"
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
  );
}

export default Rightsidebar;
