import Leftsidebar from "./Components/Leftsidebar";
import Middleview from "./Components/Middleview";
import Rightsidebar from "./Components/Rightsidebar";
import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Home() {
  const [middletext, setmiddletext] = useState("");
  const [selectedtext, setselectedtext] = useState(null);
  const [tabledata, settabledata] = useState([]);
  const [selectedtextstart, setselectedtextstart] = useState(0);
  const [selectedtextend, setselectedtextend] = useState(0);
  const [text, settext] = useState([]);
  useEffect(() => {
    // Get initial all text data from database for first time page loads
    fetch("http://127.0.0.1:5000/api/gettextdata", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        res.json().then((ret) => settext(ret));
      }
    });
  }, []);
  const [num, setnum] = useState(null);
  return (
    <div className="Home">
      <Link
        to="/addText"
        class="bg-blue-500 hover:bg-blue-700 z-[1000] text-white
       font-bold py-2 px-4 rounded absolute bottom-2 right-2 font-robo"
      >
        Add text into DB
      </Link>
      <div className="overflow-y-auto absolute left-0 w-[20vw] bg-[rgb(15,23,42)] text-white h-[100vh]">
        <Leftsidebar
          text={text}
          num={num}
          middletext={middletext}
          setnum={setnum}
          setmiddletext={setmiddletext}
        />
      </div>
      <div className="font-robo overflow-y-auto absolute left-[20vw] w-[40vw] h-[100vh]">
        <Middleview
          middletext={middletext}
          num={num}
          selectedtextstart={selectedtextstart}
          selectedtextend={selectedtextend}
          setselectedtext={setselectedtext}
          setselectedtextend={setselectedtextend}
          tabledata={tabledata}
          selectedtext={selectedtext}
          setselectedtextstart={setselectedtextstart}
        />
      </div>
      <div className="overflow-y-auto absolute right-0 w-[40vw] h-[100vh] bg-[rgb(15,23,42)]">
        <Rightsidebar
          num={num}
          selectedtext={selectedtext}
          tabledata={tabledata}
          settabledata={settabledata}
        />
      </div>
    </div>
  );
}

export default Home;
