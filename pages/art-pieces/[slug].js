import { useRouter } from "next/router";

import { ArtPieceDetails } from "@/components/ArtPieceDetails";

export default function DetailsPage({ image }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPieceDetails = image.find((detail) => slug === detail.slug);

  return (
    <div>
      <ArtPieceDetails currentPieceDetails={currentPieceDetails} />
    </div>
  );
}
