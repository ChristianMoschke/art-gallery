import ArtPieces from "@/components/ArtPieces";
import React from "react";

const favorites = ({ artPiecesInfo, onHandleFavorites, image }) => {
  const favoritePieces = image.filter((item) =>
    artPiecesInfo.some((info) => info.name === item.name && info.isFavorite)
  );

  return (
    <>
      <ArtPieces
        artPiecesInfo={artPiecesInfo}
        pieces={favoritePieces}
        onHandleFavorites={onHandleFavorites}
      />
    </>
  );
};

export default favorites;
