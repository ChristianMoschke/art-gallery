import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./Buttons/FavoriteButton";

const ArtPiecesPreview = ({ image, artPiecesInfo, onHandleFavorites }) => {
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
      <FavoriteButton
        currentPieceDetailsSlug={image}
        artPiecesInfo={artPiecesInfo}
        onHandleFavorites={onHandleFavorites}
      />
      <p>{image.artist}</p>
      <p>{image.name}</p>
    </li>
  );
};

export default ArtPiecesPreview;
