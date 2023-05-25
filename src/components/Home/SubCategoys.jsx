import { useEffect, useState } from "react";
import TabCards from "./TabCards";

const SubCategoys = () => {
  const [myToys, setMyToys] = useState([]);
  const [activeTab, setActiveTab] = useState("police");

  useEffect(() => {
    fetch(`https://toy-store-server-theta.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold mb-5">Sub-Category</h2>
      <div className="tabs flex justify-center">
        <a className="tab tab-lifted tab-lg">Action figure Category</a>
        <a className="tab tab-lifted tab-lg tab-active">Car Category</a>
        <a className="tab tab-lifted tab-lg">Sports toys Category</a>
      </div>
      <div className="flex justify-center">
        <div className="tabs">
          <a
            onClick={() => handleTabClick("police")}
            className={`tab tab-lifted tab-lg hover:text-emerald-700 ${
              activeTab == "police" ? "tab-active text-emerald-700" : ""
            }`}
          >
            Police
          </a>
          <a
            onClick={() => handleTabClick("truck")}
            className={`tab tab-lifted tab-lg hover:text-cyan-700 ${
              activeTab == "truck" ? "tab-active text-cyan-700" : ""
            }`}
          >
            Truck
          </a>
          <a
            onClick={() => handleTabClick("sports")}
            className={`tab tab-lifted tab-lg hover:text-purple-800 ${
              activeTab == "sports" ? "tab-active text-purple-800" : ""
            }`}
          >
            Sports
          </a>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 gap-3">
        {myToys.map((myToy) => (
          <TabCards key={myToy._id} myToy={myToy}></TabCards>
        ))}
      </div>
    </div>
  );
};

export default SubCategoys;
