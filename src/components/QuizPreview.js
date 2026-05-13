import React from "react";

function Quiz(props) {
  const {title, questionList, quizId, onPreviewClicked, onEditClicked } = props;
  
  const count = (Object.entries(questionList).length);

  return (
    <React.Fragment>
      <div>
        <h4>{title}</h4>
        <p>{count} questions</p>
        <button type="button" onClick={() => onPreviewClicked(quizId)}>Take Quiz</button>
        <button type="button" onClick={() => onEditClicked(quizId)}>Edit Quiz</button>
      </div>
    </React.Fragment>
  );
}

export default Quiz;