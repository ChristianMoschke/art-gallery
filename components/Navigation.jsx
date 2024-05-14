import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  background-color: #717f98;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
`;

const NavigationItem = styled.li`
  text-decoration: none;
  list-style: none;
  color: white;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: #0c0d10;
  font-weight: 600;
  font-size: 1.2rem;

  &:hover {
    color: #a2af91;
    transition: 0.3s;
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href={"/"}>Spotlight</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href={"/art-pieces"}>Pieces</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href={"/favorites"}>Favorites</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
