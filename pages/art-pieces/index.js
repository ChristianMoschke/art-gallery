import ArtPieces from "@/components/ArtPieces";

export default function HomePage({ image, artPiecesInfo, onHandleFavorites }) {
  return (
    <div>
      <ArtPieces
        artPiecesInfo={artPiecesInfo}
        onHandleFavorites={onHandleFavorites}
        pieces={image}
      />
    </div>
  );
}
