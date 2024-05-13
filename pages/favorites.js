import ArtPieces from "@/components/ArtPieces";
import React from "react";

const favorites = ({ artPiecesInfo, onHandleFavorites, image }) => {
  const favoritesList = image.filter((item) => {
    artPiecesInfo.some((info) => info.name === item.name && info.isFavorite);
  });
  console.log(favoritesList);

  return (
    <>
      <ArtPieces pieces={favoritesList} onHandleFavorites={onHandleFavorites} />
    </>
  );
};

export default favorites;
