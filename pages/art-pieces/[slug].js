import { useRouter } from "next/router";
import { ArtPieceDetails } from "@/components/ArtPieceDetails";

export default function DetailsPage({
  onHandleSubmit = { onHandleSubmit },
  image,
  artPiecesInfo,
  onHandleFavorites,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPieceDetails = image.find((detail) => slug === detail.slug);

  return (
    <div>
      <ArtPieceDetails
        onHandleSubmit={onHandleSubmit}
        artPiecesInfo={artPiecesInfo}
        onHandleFavorites={onHandleFavorites}
        currentPieceDetails={currentPieceDetails}
      />
    </div>
  );
}
