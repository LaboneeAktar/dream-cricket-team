import footerImg from "../../assets/images/logo-footer.png";
import bgShadowImg from "../../assets/images/bg-shadow.png";

const Footer = () => {
  return (
    <div className="mt-90">
      <footer className="bg-gray-900 relative">
        <div className="p-2 border border-gray-50 inline-block rounded-2xl absolute left-48 -top-44">
          <div
            className="bg-white lg:h-[330px] lg:w-[940px] rounded-2xl"
            style={{
              backgroundImage: `url(${bgShadowImg})`,
            }}
          >
            <div className="">
              <span>
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                  Get the latest updates and news right in your inbox!
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-md font-semibold text-sm text-white bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 hover:opacity-90 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="mb-6 lg:mb-16 md:mb-0 flex justify-center pt-56">
            <img src={footerImg} className="" alt="Footer Logo" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-500 px-20">
            <div>
              <h3 className="text-white font-bold pb-3">About Us</h3>
              <p className="text-sm">
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold pb-3">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  {" "}
                  <a href="">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="">Services</a>
                </li>
                <li>
                  {" "}
                  <a href="">About</a>
                </li>
                <li>
                  {" "}
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold pb-3">Subscribe</h3>
              <p className="pb-3 text-sm">
                Subscribe to our newsletter for <br /> the latest updates.
              </p>
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </label>
                </div>
                <button className="btn join-item">Subscribe</button>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center text-gray-500 text-sm">
            {" "}
            © 2026{" "}
            <a href="#" className="hover:underline">
              Dream Cricket Team
            </a>
            . All Rights Reserved.{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
