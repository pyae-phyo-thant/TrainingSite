import React from "react";
import Footer from "./footer";
import Header from "./header";

import { Seo } from "./seo";

function Layout({ children }) {
  return (
    <div>
      <Seo />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
