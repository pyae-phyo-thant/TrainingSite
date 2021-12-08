import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Hero from "../components/hero";
import Layout from "../components/layout";

const About = () => {
  return (
    <>
      <Layout title="About">
        <Hero
          title="About Us"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        provident dolores illo labore, dignissimos porro? Neque odio, magni`}
        />
        <div className="container m-auto md:w-10/12 w-11/12 text-center mb-6 md:mb-0 md:py-16">
          <div className="md:pb-10">
            <StaticImage
              src="../images/logo.png"
              layout="fixed"
              width={150}
              height={50}
              alt="Readme logo"
              className="mb-5 mt-8 md:mt-0"
            />
            <p className="text-md text-justify pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum provident dolores illo labore, dignissimos porro? Neque
              odio, magni ducimus dignissimos accusantium optio qui? Obcaecati
              ducimus libero, commodi quas vel dolore?
            </p>
          </div>
          <div className="md:pb-10 pb-4">
            <StaticImage
              src="../images/logo.png"
              layout="fixed"
              width={150}
              height={50}
              alt="Readme logo"
              className="mb-5"
            />
            <p className="text-md text-justify md:pb-2 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum provident dolores illo labore, dignissimos porro? Neque
              odio, magni ducimus dignissimos accusantium optio qui? Obcaecati
              ducimus libero, commodi quas vel dolore?
            </p>
            {/* <a
              href="https://digitalresearch.net"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-900 md:float-left float-none"
            >
              https://digitalresearch.net
            </a> */}
          </div>
          <Link
            key="see-more"
            to="/contact"
            className="bg-purple-600 hover:bg-purple-800 rounded-full text-center text-white py-2 px-6 mb-6 md:mb-0"
          >
            Contact Us
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default About;
