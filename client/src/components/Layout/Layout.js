import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-Helmet";

const Layout = ({ children }) => {
  return (
    <div>
        <Helmet>
            <meta charset="utf-8" />
            <title>My Project</title>
        </ Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
