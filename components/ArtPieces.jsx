import React from "react";

import ArtPiecesPreview from "./ArtPiecesPreview";
import Link from "next/link";

const ArtPieces = ({ pieces }) => {
  return (
    <>
      <ul>
        {pieces.map((image) => {
          return <ArtPiecesPreview key={image.slug} image={image} />;
        })}
      </ul>
    </>
  );
};

export default ArtPieces;
