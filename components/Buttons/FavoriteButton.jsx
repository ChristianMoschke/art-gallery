import React from "react";
import { FaHeart } from "react-icons/fa";

export const FavoriteButton = ({
  onHandleFavorites,
  currentPieceDetailsSlug,
  artPiecesInfo,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onHandleFavorites(currentPieceDetailsSlug);
        }}
      >
        <FaHeart size={30} />
      </button>
    </>
  );
};
