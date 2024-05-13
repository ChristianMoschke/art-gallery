import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Navigation />
    </div>
  );
};

export default Layout;
