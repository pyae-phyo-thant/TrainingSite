import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="shadow-lg rounded-b-lg mb-4 md:mb-0">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          className="rounded-t-lg h-2/4"
        />
        <div className="px-4 py-6 bg-gray-50 rounded-b-lg mb-7 md:mb-0">
          <h1 className="align-center pb-4">[Localization 1]</h1>
          <ul className="text-left">
            <li>- Introuction of docs.readmedigital.com</li>
            <li>- Ideal of lead conversion</li>
            <li>- Publishing under your own domain</li>
          </ul>
        </div>
      </div>
      <div className="shadow-lg rounded-b-lg">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          className="rounded-t-lg"
        />
        <div className="px-4 py-6 bg-gray-50 rounded-b-lg">
          <h1 className="align-center pb-4">[Localization 2]</h1>
          <ul className="text-left">
            <li>- Introuction of docs.readmedigital.com</li>
            <li>- Ideal of lead conversion</li>
            <li>- Publishing under your own domain</li>
          </ul>
        </div>
      </div>
      <div className="shadow-lg rounded-b-lg mb-8 md:mb-0">
        <StaticImage
          src="../images/Free-Polygon-Backgrounds-and-Textures-Prototypr.jpeg"
          alt="localization-1"
          className="rounded-t-lg"
        />
        <div className="px-4 py-6 bg-gray-50 rounded-b-lg">
          <h1 className="text-center pb-4">[Localization 3]</h1>
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
    <div className="md:py-12 md:px-0 text-center m-auto container md:w-10/12 px-4">
      <h3 className="pb-12 font-bold text-2xl pt-4 md:pt-0">Products</h3>
      <ProductGrid />
    </div>
  );
};

export default ProductSection;