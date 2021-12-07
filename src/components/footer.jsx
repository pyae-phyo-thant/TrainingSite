import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto md:w-10/12 w-full px-4 md:px-0">
        <div className="text-black px-4 py-6 pb-10 flex justify-between">
          <div className="">
            <div>
              <Link key="logo" to="/">
                <StaticImage
                  src="../images/logo.png"
                  width={150}
                  height={50}
                  alt="Readme logo"
                />
              </Link>
              <div className="something pt-5">
                xxxxxxxxx <br /> xxxxxxxxxxx <br /> xxxxxx
              </div>
            </div>
          </div>
          <div className="md:flex md:space-x-7  text-black">
            <ul className="md:flex text-sm font-semibold md:space-x-7">
              <li className="pb-4 md:pb-0">
                <div className="dropdown inline-block relative">
                  <button className="text-black font-semibold md:px-6 rounded inline-flex items-center">
                    <span className="md:mr-1">Products</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute text-sm hidden text-black pt-1">
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
                      <Link
                        key="Localization-3"
                        className="rounded-b bg-gray-200 hover:text-purple-600 py-2 px-4 block whitespace-no-wrap"
                        to="/localization-3"
                      >
                        Localization 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pb-4 md:pb-0">
                <Link
                  key="pricing"
                  to="/pricing"
                  className="hover:text-purple-600"
                >
                  pricing
                </Link>
              </li>
              <li className="pb-4 md:pb-0">
                <Link key="about" to="/about" className="hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li className="pb-4 md:pb-0">
                <Link
                  key="contact"
                  to="/contact"
                  className="hover:text-purple-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End Top */}
        <div className="py-4 md:flex border-t-2 border-black justify-between items-center text-black">
          <div className="text-xs md:text-sm">
            Copyright &copy; {new Date().getFullYear()} · Digital Research
            Corporation - Confidential
          </div>
          <div className="text-xs md:text-xs">
            <ul className="flex item-center space-x-12">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-purple-600"
                  key="privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/term-conditions"
                  className="hover:text-purple-600"
                  key="term-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
