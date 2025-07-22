import footerImg from "../../assets/images/logo-footer.png";
import bgShadowImg from "../../assets/images/bg-shadow.png";

const Footer = () => {
  return (
    <div className="mt-80">
      <footer className="bg-gray-900 relative">
        <div className="p-2 border border-gray-50 inline-block rounded-2xl absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 -top-44">
          <div
            className="bg-slate-200 lg:h-[330px] lg:w-[940px] rounded-2xl"
            style={{
              backgroundImage: `url(${bgShadowImg})`,
            }}
          >
            <div className="pt-24">
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
                  className="px-6 py-2 rounded-md font-semibold text-sm text-black bg-gradient-to-r from-purple-300 via-orange-200 to-amber-400 hover:bg-gradient-to-bl cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="mb-6 lg:mb-16 md:mb-0 flex justify-center pt-44">
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
                <button className="join-item px-6 py-2 font-semibold text-sm text-black bg-gradient-to-r from-purple-300 via-orange-300 to-pink-400 hover:bg-pink-500 hover:bg-gradient-to-l cursor-pointer">
                  Subscribe
                </button>
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
