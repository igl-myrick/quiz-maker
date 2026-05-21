import React from "react";
import { auth } from "../firebase";

function QuizPreview(props) {
  const {title, questionList, id, creatorId, onPreviewClicked, onEditClicked, onDeleteClicked } = props;

  let editBtn = null;
  let deleteBtn = null;

  if (auth.currentUser.uid === creatorId) {
    editBtn = <button type="button" onClick={() => onEditClicked(id)}>Edit Quiz</button>
    deleteBtn = <button type="button" onClick={() => onDeleteClicked(id)}>Delete Quiz</button>
  }
  
  const count = (Object.entries(questionList).length);

  return (
    <React.Fragment>
      <div>
        <h4>{title}</h4>
        <p>{count} questions</p>
        <button type="button" onClick={() => onPreviewClicked(id)}>Take Quiz</button>
        {editBtn}
        {deleteBtn}
      </div>
    </React.Fragment>
  );
}

export default QuizPreview;