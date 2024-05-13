import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ArtPieceDetails = ({ currentPieceDetails }) => {
  return (
    <>
      <Image
        src={currentPieceDetails.imageSource}
        height={244}
        width={244}
        alt="cute art"
      />
      <h3>{currentPieceDetails.name}</h3>
      <p>Artist: {currentPieceDetails.artist}</p>
      <p>Year: {currentPieceDetails.year}</p>
      <p>Genre: {currentPieceDetails.genre}</p>
      <Link href="/art-pieces">Back to Home</Link>
    </>
  );
};