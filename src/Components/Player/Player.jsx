const Player = ({ player }) => {
  const { name, cover, nationality, playing_type, ratings, type, price } =
    player;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            className="w-full h-[280px] object-fit rounded-b-md"
            src={cover}
            alt={`Image of ${name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
