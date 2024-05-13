import React from "react";
import { FaHeart } from "react-icons/fa";

export const FavoriteButton = ({
  onHandleFavorites,
  currentPieceDetailsSlug,
  artPiecesInfo,
}) => {
  const nameToCheck = currentPieceDetailsSlug.name;
  const containsName = artPiecesInfo.some(
    (info) => info.name === nameToCheck && info.isFavorite
  );

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onHandleFavorites(currentPieceDetailsSlug.name);
        }}
      >
        <FaHeart
          style={containsName ? { color: "red" } : { color: "black" }}
          size={30}
        />
      </button>
    </>
  );
};
