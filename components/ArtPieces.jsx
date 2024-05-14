import React from "react";
import ArtPiecesPreview from "./ArtPiecesPreview";
import styled from "styled-components";

const ArtPiecesList = styled.ul`
  display: flex;
  gap: 40px 0;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

const ArtPieces = ({ pieces, artPiecesInfo, onHandleFavorites }) => {
  return (
    <>
      <ArtPiecesList>
        {pieces.map((image) => {
          return (
            <ArtPiecesPreview
              artPiecesInfo={artPiecesInfo}
              onHandleFavorites={onHandleFavorites}
              key={image.slug}
              image={image}
            />
          );
        })}
      </ArtPiecesList>
    </>
  );
};

export default ArtPieces;
