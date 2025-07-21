import user from "../../assets/user.png";
import { FaFlag } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

const Player = ({ player }) => {
  const { name, cover, nationality, playing_type, ratings, type, price } =
    player;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg">
        {/* Cover Image */}
        <figure className="p-5">
          <img
            className="w-full h-[260px] object-fit rounded-lg"
            src={cover}
            alt={`Image of ${name}`}
          />
        </figure>

        <div className="pt-0 px-5 pb-5">
          {/* Profile info */}
          <div className="flex gap-3">
            <img className="w-6 h-6" src={user} alt="User" />
            <h2 className="text-lg font-bold">{name}</h2>
          </div>

          <div className="flex justify-between items-center py-3">
            <span className="flex gap-1 items-center">
              <FaFlag className="text-gray-500" />
              <p className="text-sm text-gray-500">{nationality}</p>
            </span>
            <p className="px-4 py-2 bg-base-300 rounded-lg text-sm">
              {playing_type}
            </p>
          </div>
          <hr className="text-gray-300" />

          {/* Player Details */}
          <div className="text-sm font-semibold space-y-4 pt-3">
            <span className="flex justify-between">
              <p>Rating</p>
              <span className="flex items-center justify-center gap-1">
                <TiStarFullOutline className="text-lg text-yellow-400" />{" "}
                <p className="text-gray-500">{ratings}</p>
              </span>
            </span>
            <span className="flex justify-between">
              <p>Type</p>
              <p className="text-gray-500">{type}</p>
            </span>
            <span className="flex justify-between items-center">
              <p>Price : {price}</p>
              <button className=" text-sm py-1 px-3 border border-slate-300 bg-base-300 rounded-md text-gray-800 cursor-pointer hover:bg-[#E7FE29] hover:shadow-lg transition-all duration-100">
                Choose Player
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
