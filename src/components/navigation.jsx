import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./navigation.css";
import "./mobile-menu.css";

const Navigation = () => {
  return (
    <>
      <div className="text-gray-900 text-sm">
        <nav className="bg-white container xs:hidden mb-hide mx-auto w-10/12 text-black px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link key="logo" to="/">
              <StaticImage
                src="../images/logo.png"
                width={150}
                height={50}
                alt="Readme logo"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-7 text-black">
            <ul className="flex items-center font-semibold space-x-7 text-md">
              <li>
                <div className="dropdown inline-block relative">
                  <button className="bg-white text-black font-semibold py-2 rounded inline-flex items-center">
                    <span className="mr-1">Products</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu md:z-10 absolute hidden text-black md:w-max pt-1">
                    <li className="">
                      <Link
                        key="Localization-1"
                        activeClassName="text-purple-600"
                        className="rounded-t hover:text-purple-600 bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-1"
                      >
                        Localization 1
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        key="Localization-2"
                        activeClassName="text-purple-600"
                        className="bg-gray-200 hover:text-purple-600 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-2"
                      >
                        Localization 2
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        key="Localization-3"
                        activeClassName="text-purple-600"
                        className="rounded-b bg-gray-200 hover:text-purple-600 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-3"
                      >
                        Localization 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  key="pricing"
                  to="/pricing"
                  activeClassName="text-purple-600"
                  className="hover:text-purple-600"
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  key="about"
                  to="/about"
                  activeClassName="text-purple-600"
                  className="hover:text-purple-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  key="contact"
                  to="/contact"
                  activeClassName="text-purple-600"
                  className="hover:text-purple-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Mobile Nav */}
        <div className="flex justify-between md:hidden">
          <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li className="text-center">
                <div className="dropdown inline-block relative">
                  <button className="bg-white text-black font-semibold py-2 md:px-6 rounded inline-flex items-center">
                    <span className="mr-1">Products</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu relative md:absolute hidden text-black pt-1">
                    <li className="">
                      <Link
                        key="Localization-1"
                        className="rounded-t hover:text-purple-600 bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-1"
                      >
                        Localization 1
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        key="Localization-2"
                        className="bg-gray-200 hover:text-purple-600 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-2"
                      >
                        Localization 2
                      </Link>
                    </li>
                    <li className="">
                      <a
                        key="Localization-3"
                        className="rounded-b bg-gray-200 hover:text-purple-600 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-3"
                      >
                        Localization 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link key="about" to="/about" className="hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  key="contact"
                  to="/contact"
                  className="hover:text-purple-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </header>
          <div className="flex items-center space-x-4 absolute right-4 top-4">
            <Link key="logo" to="/">
              <StaticImage
                src="../images/logo.png"
                layout="fixed"
                width={36}
                height={36}
                alt="Readme logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
