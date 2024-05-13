import React from "react";
import Image from "next/image";

const ArtPiecesPreview = ({ image }) => {
  return (
    <li>
      <Image
        src={image.imageSource}
        height={244}
        width={244}
        alt="a picture of art"
      />
      <p>{image.artist}</p>
      <p>{image.name}</p>
    </li>
  );
};

export default ArtPiecesPreview;
