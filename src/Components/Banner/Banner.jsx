import bannerImage from "../../assets/images/bg-shadow.png";
const Banner = () => {
  return (
    <div>
      <div
        className="hero w-[1300px] h-[445px] mx-auto rounded-4xl bg-black"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
