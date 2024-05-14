import React from "react";
import styled from "styled-components";
import { Libre_Baskerville } from "next/font/google";

const Libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #717F98;
  margin-bottom: 80px;
`;
const HeaderTitle = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-size: 32px;
  color: #0C0D10;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Art Gallery</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
