import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./Buttons/FavoriteButton";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

export const ArtPieceDetails = ({
  onHandleSubmit,
  artPiecesInfo,
  currentPieceDetails,
  onHandleFavorites,
}) => {
  return (
    <>
      <Image
        src={currentPieceDetails.imageSource}
        height={244}
        width={244}
        alt="cute art"
      />
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        currentPieceDetailsSlug={currentPieceDetails}
        onHandleFavorites={onHandleFavorites}
      />
      <h3>{currentPieceDetails.name}</h3>
      <p>Artist: {currentPieceDetails.artist}</p>
      <p>Year: {currentPieceDetails.year}</p>
      <p>Genre: {currentPieceDetails.genre}</p>
      <br />
      <Comments
        artPiecesInfo={artPiecesInfo}
        currentPieceDetails={currentPieceDetails}
      />
      <br />
      <CommentForm
        currentPieceDetails={currentPieceDetails}
        onHandleSubmit={onHandleSubmit}
      />
      <br />
      <Link href="/art-pieces">Back to Home</Link>
    </>
  );
};
