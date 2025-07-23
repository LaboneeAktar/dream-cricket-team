import bannerShadow from "../../assets/images/bg-shadow.png";
import bannerImage from "../../assets/images/banner-main.png";
import { ToastContainer } from "react-toastify";
const Banner = ({ handleCreditValue }) => {
  return (
    <div>
      <div
        className="hero lg:w-[1300px] lg:h-[490px] mx-auto rounded-2xl bg-slate-900"
        style={{
          backgroundImage: `url(${bannerShadow})`,
        }}
      >
        <div className="hero-content text-neutral-content">
          <div className="">
            <img
              className="mx-auto h-48 w-56 object-cover mb-5 lg:mb-6"
              src={bannerImage}
              alt=""
            />

            <h1 className="mb-5 text-xl lg:text-3xl font-bold text-center">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <div className="max-w-md text-center mx-auto">
              <p className="mb-5">Beyond Boundaries Beyond Limits</p>
              <span className="border border-[#E7FE29] px-1 py-3 rounded-xl">
                <button
                  onClick={() => {
                    handleCreditValue();
                  }}
                  className="px-4 py-2 text-sm font-semibold text-black bg-[#E7FE29] border border-lime-400 rounded-xl shadow-md hover:bg-lime-300 hover:shadow-lg transition-all duration-300"
                >
                  Claim Free Credit
                </button>
              </span>
              <ToastContainer position="top-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
