import logo from "../../assets/images/logo.png";
import { HiCurrencyDollar } from "react-icons/hi2";
const Nav = ({ creditValue }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg lg:mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
              <button className="btn" type="button">
                0 Coins{" "}
                <HiCurrencyDollar className="text-yellow-500 text-lg font-bold" />
              </button>
            </ul>
          </div>
          <div>
            <img className="ml-28 lg:ml-10" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex lg:items-center">
          <ul className="flex gap-5 px-10 py-4">
            <li className="pt-2">
              <a>Home</a>
            </li>
            <li className="pt-2">
              <a>Fixture</a>
            </li>
            <li className="pt-2">
              <a>Teams</a>
            </li>
            <li className="pt-2">
              <a>Schedules</a>
            </li>
            <button className="btn px-3 py-2" type="button">
              {creditValue} Coins{" "}
              <HiCurrencyDollar className="text-yellow-500 text-lg font-bold" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
