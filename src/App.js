import Leftsidebar from "./Components/Leftsidebar";
import Middleview from "./Components/Middleview";
import Rightsidebar from "./Components/Rightsidebar";
import { useState } from "react";
import "./index.css";
function App() {
  const [middletext, setmiddletext] = useState("");
  const [selectedtext, setselectedtext] = useState("");
  const [selectedtextstart, setselectedtextstart] = useState(0);
  const [selectedtextend, setselectedtextend] = useState(0);
  const text = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",lorem100. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which g hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    "Now is the winter of our discontent. Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:font-serif to apply the font-serif utility at only medium screen sizes and above.",
    "In electronics and telecommunication, coupling is the desirable or undesirable transfer of energy from one medium, such as a metallic wire or an optical fiber, to another medium \n Coupling is also the transfer of electrical energy from one circuit segment to another. For example, energy is transferred from a power source to an electrical load by means of conductive coupling, which may be either resistive or direct coupling. An AC potential may be transferred from one circuit segment to another having a DC potential by use of a capacitor. Electrical energy may be transferred from one circuit segment to another segment with different impedance by use of a transformer; this is known as impedance matching. These are examples of electrostatic and electrodynamic inductive coupling.GitHub.com was a bootstrapped start-up business, which in its first years provided enough revenue to be funded solely by its three founders and start taking on employees.[19] In July 2012, four years after the company was founded, Andreessen Horowitz invested $100 million in venture capital.[4] In July 2015 GitHub raised another $250 million of venture capital in a series B round. Investors were Sequoia Capital, Andreessen Horowitz, Thrive Capital and other venture capital funds.[20] As of 2018, GitHub was estimated to be generating $200–300 million in Annual Recurring Revenue.[1] The GitHub service was developed by Chris Wanstrath, P. J. Hyett, Tom Preston-Werner and Scott Chacon using Ruby on Rails, and started in February 2008. The company, GitHub, Inc., has existed since 2007 and is located in San Francisco.[21]  The shading of the map illustrates the number of users as a proportion of each country's Internet population. The circular charts surrounding the two hemispheres depict the total number of GitHub users (left) and commits (right) per country.    On February 24, 2009, GitHub announced that within the first year of being online, GitHub had accumulated over 46,000 public repositories, 17,000 of which were formed in the previous month. At that time, about 6,200 repositories had been forked at least once and 4,600 had been merged.That same year, the site was used by over 100,000 users, according to GitHub, and had grown to host 90,000 unique public repositories, 12,000 having been forked at least once, for a total of 135,000 repositories.[22]In 2010, GitHub was hosting 1 million repositories.[23] A year later, this number doubled.[24] ReadWriteWeb reported that GitHub had surpassed SourceForge and Google Code in total number of commits for the period of January to May 2011.[25] On January 16, 2013, GitHub passed the 3 million users mark and was then hosting more than 5 million repositories.[26] By the end of the year, the number of repositories was twice as great, reaching 10 million repositories.[27]In 2012, GitHub raised $100 million in funding from Andreessen Horowitz with $750 million valuation.[28] On July 29, 2015, GitHub stated it had raised $250 million in funding in a round led by Sequoia Capital. Other investors of that round included Andreessen Horowitz, Thrive Capital, and IVP (Institutional Venture Partners).[29] The round valued the company at approximately $2 billion.[30]    In 2015, GitHub opened an office in Japan, its first outside of the U.S.[31] In 2016, GitHub was ranked No. 14 on the Forbes Cloud 100 list.[32] It has not been featured on the 2018, 2019 and 2020 lists.[33]   On February 28, 2018, GitHub fell victim to the third largest distributed denial-of-service (DDoS) attack in history, with incoming traffic reaching a peak of about 1.35 terabits per second.[34]   On June 19, 2018, GitHub expanded its GitHub Education by offering free education bundles to all schools.[35][36]",
  ];
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
      <div className="overflow-y-auto absolute right-0 w-[40vw] h-[100vh]">
        <Rightsidebar
          selectedtext={selectedtext}
          selectedtextend={selectedtextend}
          selectedtextstart={selectedtextstart}
        />
      </div>
    </div>
  );
}

export default App;
