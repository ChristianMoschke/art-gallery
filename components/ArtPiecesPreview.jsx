import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArtPiecesPreview = ({ image }) => {
  return (
    <li>
      <Link href={`/art-pieces/${image.slug}`}>
        <Image
          src={image.imageSource}
          height={244}
          width={244}
          alt="a picture of art"
        />
      </Link>
      <p>{image.artist}</p>
      <p>{image.name}</p>
    </li>
  );
};

export default ArtPiecesPreview;
