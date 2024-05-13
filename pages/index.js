import useSWR from "swr";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  // render data

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
