import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto md:w-11/12 w-full md:px-0">
        <div className="text-black px-4 py-6 pb-10 md:flex justify-between">
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
                <span className="md:mr-1">Products</span>

                <ul className="md:absolute text-sm grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0  text-black pt-1">
                  <li className="">
                    <Link
                      key="Localization-1"
                      className="rounded-t hover:text-purple-600 bg-gray-100 py-2 block whitespace-no-wrap"
                      to="/localization-1"
                    >
                      Localization 1
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      key="Localization-2"
                      className="bg-gray-100 hover:text-purple-600 py-2 block whitespace-no-wrap"
                      to="/localization-2"
                    >
                      Localization 2
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      key="Localization-3"
                      className="rounded-b bg-gray-100 hover:text-purple-600 py-2 block whitespace-no-wrap"
                      to="/localization-3"
                    >
                      Localization 3
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="pb-4 md:pb-0 md:ml-9">
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
        <div className="py-4 md:flex border-t-2 border-gray-300 justify-between items-center text-black">
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
