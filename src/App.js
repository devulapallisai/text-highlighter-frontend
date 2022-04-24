import Leftsidebar from "./Components/Leftsidebar";
import Middleview from "./Components/Middleview";
import Rightsidebar from "./Components/Rightsidebar";
import { useEffect, useState } from "react";
import "./index.css";
function App() {
  const [middletext, setmiddletext] = useState("");
  const [selectedtext, setselectedtext] = useState("");
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
    <div className="App">
      <div className="overflow-y-auto absolute left-0 w-[20vw] bg-[rgb(26,17,16)] text-white h-[100vh]">
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
          setselectedtext={setselectedtext}
          setselectedtextend={setselectedtextend}
          setselectedtextstart={setselectedtextstart}
        />
      </div>
      <div className="overflow-y-auto absolute right-0 w-[40vw] h-[100vh] bg-[rgb(15,23,42)]">
        <Rightsidebar num={num} selectedtext={selectedtext} />
      </div>
    </div>
  );
}

export default App;
