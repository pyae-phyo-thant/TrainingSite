import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./footer";
import Header from "./header";

import { Seo } from "./seo";

function Layout({ children, title }) {
  return (
    <div>
      <Seo title={title} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
