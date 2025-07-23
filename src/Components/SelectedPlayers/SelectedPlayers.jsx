const SelectedPlayers = ({ selectPlayer, handleDelete }) => {
  const { name, cover, type } = selectPlayer;
  return (
    <div>
      <div className="card w-full bg-base-100 card-xs shadow-lg mb-6 border border-gray-200">
        <div className="flex justify-between p-4">
          <div>
            <div className="flex gap-4">
              <img
                className="w-20 h-20 rounded-lg"
                src={cover}
                alt={`Image of ${name}`}
              />
              <span className="pt-4 ">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-500">{type}</p>
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDelete(selectPlayer)}
              className="btn mt-5"
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayers;
