import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomPiece = Math.random() * (11 - 1) + 1;

  const roundedRandomPiece = Math.round(randomPiece);

  // render data

  return (
    <div>
      <h1>Art Gallery</h1>
      <h2>Spotlight</h2>
      <Spotlight image={data[roundedRandomPiece]} />
      <h2>Pieces</h2>
      <ArtPieces pieces={data} />
    </div>
  );
}
