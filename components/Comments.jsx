import React from "react";
import { nanoid } from "nanoid";

const Comments = ({ artPiecesInfo, currentPieceDetails }) => {
  const commentList = artPiecesInfo.find(
    (piece) => piece.name === currentPieceDetails.name
  );
  console.log(commentList);
  if (!commentList)
    return (
      <>
        <h3>Comments</h3>
        <div style={{ fontStyle: "italic" }}>
          Nobody has left a comment yet ...
        </div>
      </>
    );
  return (
    <>
      <h3>Comments</h3>
      <ul style={{ listStyleType: "none" }}>
        {commentList.comment.map((piece) => {
          return (
            <>
              <br />
              <li key={nanoid()}>{piece.text}</li>
              <p>{piece.date}</p>
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
