import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <Link href={"/"}>Spotlight</Link>
      <br />
      <Link href={"/art-pieces"}>Pieces</Link>
    </>
  );
};

export default Navigation;
