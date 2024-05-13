import React from "react";
import { FaHeart } from "react-icons/fa";

export const FavoriteButton = ({ onHandleFavorite }) => {
  return (
    <>
      <button type="button" onClick={onHandleFavorite}>
        <FaHeart size={30} />
      </button>
    </>
  );
};
