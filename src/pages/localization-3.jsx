import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";

const LocalThree = () => {
  return (
    <>
      <Layout title="Localization-3">
        <Hero
          title={`[Localization 3]`}
          extra="Docs Site Building & Maintenance"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <div className="md:py-8 py-4 md:w-11/12 px-4 md:px-0 m-auto">
          <h1 className="text-center font-bold md:text-4xl pb-6 text-2xl">
            Product Feature
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pb-8">
            <div>
              <StaticImage
                src="../images/book.jpeg"
                alt="product feature"
                width="600"
                height="400"
              />
            </div>
            <div>
              <h1 className="font-bold md:text-xl pb-6 text-lg">
                Introduction of docs.readmedigital.com
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                expedita officia repellendus, fugiat quis ut voluptatem quisquam
                voluptates provident nam? Voluptatem consequatur doloribus
                tempora sapiente, obcaecati voluptatibus voluptatum quo eos!
              </p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 grid-cols-1 flex flex-col-reverse gap-8 pb-6">
            <div>
              <h1 className="font-bold md:text-xl text-lg pb-6">
                Idea for lead conversion and customer support
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                expedita officia repellendus, fugiat quis ut voluptatem quisquam
                voluptates provident nam? Voluptatem consequatur doloribus
                tempora sapiente, obcaecati voluptatibus voluptatum quo eos!
              </p>
            </div>
            <div>
              <StaticImage
                src="../images/book.jpeg"
                alt="product feature"
                width="600"
                height="400"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <StaticImage
                src="../images/book.jpeg"
                alt="product feature"
                width="600"
                height="400"
              />
            </div>
            <div>
              <h1 className="font-bold md:text-xl text-lg pb-6">
                Publishing under your own domain is available for higher plans
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                expedita officia repellendus, fugiat quis ut voluptatem quisquam
                voluptates provident nam? Voluptatem consequatur doloribus
                tempora sapiente, obcaecati voluptatibus voluptatum quo eos!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LocalThree;
