import ArtPieces from "@/components/ArtPieces";
import React from "react";

const favorites = ({ artPiecesInfo, onHandleFavorites }) => {
  return (
    <>
      <ArtPieces pieces={artPiecesInfo} />
    </>
  );
};

export default favorites;
