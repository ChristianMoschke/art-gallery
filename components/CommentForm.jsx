import React from "react";

const CommentForm = ({ onHandleSubmit, currentPieceDetails }) => {
  return (
    <>
      <form
        id="commentForm"
        onSubmit={onHandleSubmit(currentPieceDetails.name)}
      >
        <label htmlFor="comments">Put your comments here:</label>
        <textarea rows={5} cols={32} name="comments" id="comments"></textarea>
        <br />
        <button type="submit">Send</button>
        <button type="reset">Reset Form</button>
      </form>
    </>
  );
};

export default CommentForm;
