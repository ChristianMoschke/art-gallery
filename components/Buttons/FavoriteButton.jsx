import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
background-color: #C8BDB3;
border: none;
`

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
      <Button
        type="button"
        onClick={() => {
          onHandleFavorites(currentPieceDetailsSlug.name);
        }}
      >
        <FaHeart
          style={containsName ? { color: "red" } : { color: "black" }}
          size={30}
        />
      </Button>
    </>
  );
};
