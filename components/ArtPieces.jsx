import React from "react";

import ArtPiecesPreview from "./ArtPiecesPreview";

const ArtPieces = ({ pieces, artPiecesInfo, onHandleFavorites }) => {
  return (
    <>
      <ul>
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
      </ul>
    </>
  );
};

export default ArtPieces;
