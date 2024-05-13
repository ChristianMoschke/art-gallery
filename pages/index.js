import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ image, artPiecesInfo, onHandleFavorites }) {
  return (
    <div>
      <Spotlight
        artPiecesInfo={artPiecesInfo}
        onHandleFavorites={onHandleFavorites}
        image={image}
      />
    </div>
  );
}
