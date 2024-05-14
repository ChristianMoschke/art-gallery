import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./Buttons/FavoriteButton";
import styled from "styled-components";

const ArtPiecesListItem = styled.li`
  background-color: #c8bdb3;
  display: flex;
  gap: 20px;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ArtPiecesInfo = styled.div`
  width: 100%;
`;

const ArtPieceFavoriteButton = styled.div`
  display: flex;
  justify-content: right;
`;

const ArtPieceName = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  width: 80%;
`;

const ArtPieceArtist = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const ArtPiecesPreview = ({ image, artPiecesInfo, onHandleFavorites }) => {
  return (
    <ArtPiecesListItem>
      <Link href={`/art-pieces/${image.slug}`}>
        <Image
          src={image.imageSource}
          height={244}
          width={244}
          alt="a picture of art"
        />
      </Link>
      <ArtPiecesInfo>
        <ArtPieceFavoriteButton>
          <FavoriteButton
            currentPieceDetailsSlug={image}
            artPiecesInfo={artPiecesInfo}
            onHandleFavorites={onHandleFavorites}
          />
        </ArtPieceFavoriteButton>
        <ArtPieceName>{image.name}</ArtPieceName>
        <ArtPieceArtist>by {image.artist}</ArtPieceArtist>
      </ArtPiecesInfo>
    </ArtPiecesListItem>
  );
};

export default ArtPiecesPreview;
