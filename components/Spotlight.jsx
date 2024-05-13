import React from "react";
import ArtPiecesPreview from "@/components/ArtPiecesPreview";

const Spotlight = ({ image, artPiecesInfo, onHandleFavorites }) => {
  const randomPiece = Math.random() * (11 - 1) + 1;
  const roundedRandomPiece = Math.round(randomPiece);
  const randomImage = image[roundedRandomPiece];

  return (
    <>
      <ArtPiecesPreview
        artPiecesInfo={artPiecesInfo}
        onHandleFavorites={onHandleFavorites}
        image={randomImage}
      />
    </>
  );
};

export default Spotlight;
