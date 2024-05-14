import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const currentDate = new Date();
  const handleSubmit = (name) => (event) => {
    event.preventDefault();
    const { value } = event.target.elements.comments;
    const existingArtPieceIndex = artPiecesInfo.findIndex(
      (piece) => piece.name === name
    );
    if (existingArtPieceIndex !== -1) {
      const updatedArtPiecesInfo = [...artPiecesInfo];

      const existingComments =
        updatedArtPiecesInfo[existingArtPieceIndex].comment || [];
      existingComments.push({ text: value, date: currentDate.getDate() });
      updatedArtPiecesInfo[existingArtPieceIndex].comment = existingComments;
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      const newArtPiece = {
        name: name,
        isFavorite: false,
        comment: [
          {
            text: value,
            date:
              `${currentDate.getDate()}` +
              `/${currentDate.getMonth()}` +
              `/${currentDate.getFullYear()}`,
          },
        ],
      };
      setArtPiecesInfo((prevArtPieces) => [...prevArtPieces, newArtPiece]);
    }
  };
  console.log(artPiecesInfo);

  function handleFavorites(pieceName) {
    const existingIndex = artPiecesInfo.findIndex(
      (item) => item.name === pieceName
    );
    if (existingIndex !== -1) {
      const updatedArtPiecesInfo = [...artPiecesInfo];
      updatedArtPiecesInfo[existingIndex] = {
        ...updatedArtPiecesInfo[existingIndex],
        isFavorite: !updatedArtPiecesInfo[existingIndex].isFavorite,
      };
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      setArtPiecesInfo((prevState) => [
        ...prevState,
        { name: pieceName, isFavorite: true },
      ]);
    }
  }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          onHandleSubmit={handleSubmit}
          {...pageProps}
          image={data}
          artPiecesInfo={artPiecesInfo}
          onHandleFavorites={handleFavorites}
        />
      </Layout>
    </>
  );
}
