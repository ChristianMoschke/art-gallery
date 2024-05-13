import ArtPieces from "@/components/ArtPieces";

export default function HomePage({ image }) {
  return (
    <div>
      <ArtPieces pieces={image} />
    </div>
  );
}
