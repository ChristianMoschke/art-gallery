import React from "react";
import Image from "next/image";
import ArtPiecesPreview from "./ArtPiecesPreview";

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
