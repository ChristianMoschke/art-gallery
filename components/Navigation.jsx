import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <Link href={"/"}>Spotlight</Link>
      <br />
      <Link href={"/art-pieces"}>Pieces</Link>
      <br />
      <Link href={"/favorites"}>Favorites</Link>
    </>
  );
};

export default Navigation;
