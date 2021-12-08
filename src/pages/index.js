import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import ProductSection from "../components/product-section";
import Hero from "../components/hero";
import { Link } from "gatsby";
import Loading from "../components/loading";

const AboutUs = () => {
  return (
    <div className="md:py-12 mb-8 md:mb-0 md:px-0 text-center m-auto container md:w-10/12 px-4">
      <h3 className="pb-16 font-semibold text-3xl">About Us</h3>
      <StaticImage
        src="../images/logo.png"
        layout="fixed"
        width={150}
        height={80}
        alt="Readme logo"
        className="pb-8"
      />
      <p className="text-md text-justify pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        provident dolores illo labore, dignissimos porro? Neque odio, magni
        ducimus dignissimos accusantium optio qui? Obcaecati ducimus libero,
        commodi quas vel dolore?
      </p>
      <Link
        key="see-more"
        to="/about"
        className="bg-purple-600 hover:bg-purple-800 rounded-full text-white py-2 px-6 mb-6 md:mb-0"
      >
        See More
      </Link>
    </div>
  );
};

// markup
const IndexPage = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Layout>
        <Hero
          description={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          provident dolores illo labore, dignissimos porro? Neque odio, magni
          ducimus dignissimos accusantium optio qui? Obcaecati ducimus libero,
          commodi quas vel dolore?`}
          title={"Title"}
        />
        <ProductSection />
        <AboutUs />
      </Layout>
    </>
  );
};

export default IndexPage;
