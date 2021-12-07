import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";

const LocalOne = () => {
  return (
    <>
      <Layout>
        <Hero
          title={`[Localization 1]`}
          extra="Docs Site Building & Maintenance"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <div className="md:py-8 py-4 md:w-11/12">
          <h1 className="text-center font-bold text-2xl pb-6">
            Product Feature
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default LocalOne;
