import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ image }) {
  return (
    <div>
      <Spotlight image={image} />
    </div>
  );
}
