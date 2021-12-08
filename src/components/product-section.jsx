import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="shadow-lg bg-gray-50 rounded-b-lg mb-4 md:mb-0">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          width="600"
          height="600"
          className="rounded-t-lg h-2/4"
        />
        <div className="px-4 py-6 rounded-b-lg mb-7 md:mb-0">
          <h1 className="align-center pb-4 font-semibold">
            [Localization 1] <br /> Docs Site Building & Maintenance
          </h1>
          <ul className="text-left">
            <li>- Introuction of docs.readmedigital.com</li>
            <li>- Ideal of lead conversion</li>
            <li>- Publishing under your own domain</li>
          </ul>
        </div>
      </div>
      <div className="shadow-lg bg-gray-50 rounded-b-lg">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          width="600"
          height="600"
          className="rounded-t-lg h-2/4"
        />
        <div className="px-4 py-6 rounded-b-lg">
          <h1 className="align-center pb-4 font-semibold">
            [Localization 2] <br /> Docs Site Building & Maintenance
          </h1>
          <ul className="text-left">
            <li>- Introuction of docs.readmedigital.com</li>
            <li>- Ideal of lead conversion</li>
            <li>- Publishing under your own domain</li>
          </ul>
        </div>
      </div>
      <div className="shadow-lg bg-gray-50 rounded-b-lg mb-8 md:mb-0">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          height="600"
          width="600"
          className="rounded-t-lg h-2/4"
        />
        <div className="px-4 py-6 rounded-b-lg">
          <h1 className="align-center pb-4 font-semibold">
            [Localization 3] <br /> Docs Site Building & Maintenance
          </h1>
          <ul className="text-left">
            <li>- Introuction of docs.readmedigital.com</li>
            <li>- Ideal of lead conversion</li>
            <li>- Publishing under your own domain</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="md:py-12 md:px-0 text-center m-auto md:w-10/12 px-4">
      <h3 className="pb-12 font-semibold text-3xl pt-4 md:pt-0">Products</h3>
      <ProductGrid />
    </div>
  );
};

export default ProductSection;
