import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");
  const [selectPlayers, setSelectPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Something is error", error));
  }, []);

  // Choose Player button function
  const handleChoosePlayer = (player) => {
    const existing = selectPlayers.find((p) => p.id === player.id);

    if (!existing) {
      if (selectPlayers.length >= 6) {
        toast.error("Stop Choosing.. Already Reached 6");
        return;
      } else {
        setSelectPlayers([...selectPlayers, player]);
      }
    } else {
      toast.error("Already Added this Player");
    }
  };

  const handleDelete = (player) => {
    const filtered = selectPlayers.filter((p) => p.id !== player.id);
    setSelectPlayers(filtered);
  };

  return (
    <div className="lg:mx-auto">
      <div className="flex justify-between mx-3 lg:mx-10 mt-10 lg:mt-20">
        {activeTab === "available" ? (
          <h2 className="text-lg lg:text-2xl font-bold">
            Available Players : {players.length}
          </h2>
        ) : (
          <h2 className="text-lg lg:text-2xl font-bold">
            Selected Players : {selectPlayers.length}/6
          </h2>
        )}

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
            Selected ({selectPlayers.length})
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <div className="mt-10 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
          {players.map((player) => (
            <Player
              key={player.id}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            ></Player>
          ))}
        </div>
      ) : (
        <div className="mx-10 mt-20">
          {selectPlayers.map((selectPlayer) => (
            <SelectedPlayers
              key={selectPlayer.id}
              selectPlayer={selectPlayer}
              handleDelete={handleDelete}
            ></SelectedPlayers>
          ))}
        </div>
      )}
    </div>
  );
};

export default Players;
