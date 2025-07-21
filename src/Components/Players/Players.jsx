import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Something is error", error));
  }, []);

  return (
    <div className="mx-10 my-20">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          Available Players : {players.length}
        </h2>

        <div className="flex rounded-lg overflow-hidden border border-gray-300 w-fit">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              activeTab === "available"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-400"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              activeTab === "selected"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-400"
            }`}
          >
            Selected (0)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
