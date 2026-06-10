import React from "react";
import { auth } from "../firebase";
import PropTypes from "prop-types";

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

QuizPreview.propTypes = {
  onPreviewClicked: PropTypes.func,
  onEditClicked: PropTypes.func,
  onDeleteClicked: PropTypes.func,
  title: PropTypes.string,
  questionList: PropTypes.object,
  id: PropTypes.string,
  creatorId: PropTypes.string
}

export default QuizPreview;