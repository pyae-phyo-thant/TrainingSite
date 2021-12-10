import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const Pricing = () => {
  return (
    <>
      <Layout title="Pricing">
        <div className="relative text-center">
          <StaticImage
            src="../images/hero.png"
            alt="hero image"
            className="w-full "
            height="330"
          />
          <div className="absolute text-white items-center text-xs w-full md:text-lg top-7 md:top-16">
            <h3 className="md:text-4xl text-4xl">Pricing Plan</h3>
            <p className="text-md pt-2">
              We offer a range of support services to help you get the most out
              of your Digital Stacks
            </p>
          </div>
        </div>
        <div className="md:py-16 m-auto md:flex md:justify-around md:w-10/12 px-4 md:px-0">
          <div className="shadow-lg border-t-8 border-gray-100 md:w-80 w-full bg-gray-100 py-10 md:px-4 px-2 text-center">
            <p className="text-purple-800 dark:text-white text-center text-3xl font-bold">
              Standard
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-center text-sm mb-4">
              Support and services
            </p>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>

            <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  We can help you set up an S on your existing website
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  The first step is to make the necessary settings
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  During the monthly operation, we will assist you in setting up
                  content
                </p>
              </li>
            </ul>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>
            <div className="flex justify-between text-sm py-4">
              <p>Initial price</p>
              <span className="text-purple-600">$2,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <p>Operational price</p>
              <span className="text-purple-600">$2,000/Monthly</span>
            </div>
            <p className="text-red-600 text-sm py-4 text-left">
              *to be paid in full
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-800 rounded-full text-white py-2 px-6 mb-6 md:mb-0"
              type="button"
            >
              Purchase Now
            </button>
          </div>
          <div className="shadow-lg border-t-8 border-purple-900 md:w-80 w-full bg-gray-100 py-10 md:px-4 px-2 text-center">
            <p className="text-purple-800 dark:text-white text-center text-3xl font-bold">
              Professional
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-center text-sm mb-4">
              Support and services
            </p>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>

            <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  We can help you set up an S on your existing website
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  The first step is to make the necessary settings
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  During the monthly operation, we will assist you in setting up
                  content
                </p>
              </li>
            </ul>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>
            <div className="flex justify-between text-sm py-4">
              <p>Initial price</p>
              <span className="text-purple-600">$2,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <p>Operational price</p>
              <span className="text-purple-600">$2,000/Monthly</span>
            </div>
            <p className="text-red-600 text-sm py-4 text-left">
              *to be paid in full
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-800 rounded-full text-white py-2 px-6 mb-6 md:mb-0"
              type="button"
            >
              Purchase Now
            </button>
          </div>
          <div className="shadow-lg border-t-8 border-gray-100 md:w-80 w-full bg-gray-100 py-10 md:px-4 px-2 text-center">
            <p className="text-purple-800 dark:text-white text-center text-3xl font-bold">
              Enterprise
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-center text-sm mb-4">
              Support and services
            </p>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>

            <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  We can help you set up an S on your existing website
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  The first step is to make the necessary settings
                </p>
              </li>
              <li className="mb-3 flex text-left">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3">
                  During the monthly operation, we will assist you in setting up
                  content
                </p>
              </li>
            </ul>
            <span className="md:w-72 block bg-gray-400 h-1 rounded-lg my-2"></span>
            <div className="flex justify-between text-sm py-4">
              <p>Initial price</p>
              <span className="text-purple-600">$2,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <p>Operational price</p>
              <span className="text-purple-600">$2,000/Monthly</span>
            </div>
            <p className="text-red-600 text-sm py-4 text-left">
              *to be paid in full
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-800 rounded-full text-white py-2 px-6 mb-6 md:mb-0"
              type="button"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pricing;
