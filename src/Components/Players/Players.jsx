import { useEffect, useState } from "react";
import Player from "../Player/Player";

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
    <div className="lg:mx-auto">
      <div className="flex justify-between mx-3 lg:mx-10 mt-10 lg:mt-20">
        <h2 className="text-lg lg:text-2xl font-bold">
          Available Players : {players.length}
        </h2>

        <div className="flex rounded-lg overflow-hidden border border-gray-300 w-fit">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "available"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-400"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab("selected")}
            className={`px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "selected"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-400"
            }`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
