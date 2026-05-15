import React from "react";
import { auth } from "../firebase";

function Quiz(props) {
  const {title, questionList, id, creatorId, onPreviewClicked, onEditClicked } = props;

  let editBtn = null;

  if (auth.currentUser.uid === creatorId) {
    editBtn = <button type="button" onClick={() => onEditClicked(id)}>Edit Quiz</button>
  }
  
  const count = (Object.entries(questionList).length);

  return (
    <React.Fragment>
      <div>
        <h4>{title}</h4>
        <p>{count} questions</p>
        <button type="button" onClick={() => onPreviewClicked(id)}>Take Quiz</button>
        {editBtn}
      </div>
    </React.Fragment>
  );
}

export default Quiz;