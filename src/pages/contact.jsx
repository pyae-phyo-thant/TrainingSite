import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="relative text-center">
          <StaticImage
            src="../images/hero.png"
            alt="hero image"
            className="w-full "
            height="430"
          />
          <div className="absolute text-white items-center text-xs w-full md:text-lg top-7 md:top-16">
            <h3 className="md:text-4xl text-2xl">GET IN TOUCH</h3>
            <p className="text-md pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="md:w-11/12 m-auto md:mb-10 md:h-screen">
            <div className="shadow-md md:px-12 md:py-12 py-5 px-3 text-center md:rounded-lg bottom-0 bg-white md:absolute left-0 right-0 md:w-10/12 m-auto">
              <h1 className="pb-6 md:text-xl text-lg">
                For inquiries and service demonstration requests,
                <br />
                Please use the form below.
              </h1>
              <span className="text-sm md:pb-12">
                <i className="text-red-600">*</i> This item is required to be
                entered.
              </span>
              <form class="px-8 pt-6 pb-8 mb-4">
                <div class="mb-4 grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="firstname"
                    >
                      First Name <i className="text-red-600">*</i>
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="text"
                      placeholder="FirstName"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2 text-left"
                      for="username"
                    >
                      Last Name <i className="text-red-600">*</i>
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 text-left"
                    for="email"
                  >
                    Email <i className="text-red-600">*</i>
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  {/* If want to show error use below code with condition. */}
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 text-left"
                    for="Company name"
                  >
                    Company name <i className="text-red-600">*</i>
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="company-name"
                    type="text"
                    placeholder="Company name"
                  />
                  {/* If want to show error use below code with condition. */}
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 text-left"
                    for="Department"
                  >
                    Department <i className="text-red-600">*</i>
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Department"
                    type="text"
                    placeholder="Department"
                  />
                  {/* If want to show error use below code with condition. */}
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 text-left"
                    for="Position"
                  >
                    Position <i className="text-red-600">*</i>
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Position"
                    type="text"
                    placeholder="Position"
                  />
                  {/* If want to show error use below code with condition. */}
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 text-left"
                    for="Message"
                  >
                    Message <i className="text-red-600">*</i>
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Message"
                    type="text"
                    placeholder="Message"
                  />
                  {/* If want to show error use below code with condition. */}
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                </div>
                <div class="text-center">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
