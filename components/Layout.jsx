import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import styled from "styled-components";

const Body = styled.body`
  background-color: #f8f9fa;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <Header />
      <div>{children}</div>
      <Navigation />
    </Body>
  );
};

export default Layout;
