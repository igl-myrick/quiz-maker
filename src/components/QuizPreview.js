import React from "react";

function Quiz(props) {
  const {title, questionList, id} = props;

  const count = (Object.entries(questionList).length);

  return (
    <React.Fragment>
      <div>
        <h4>{title}</h4>
        <p>{count} questions</p>
        <button type="button" onClick={() => props.onPreviewClicked(id)}>Take Quiz</button>
        <button type="button" onClick={() => props.onEditClicked()}>Edit Quiz</button>
      </div>
    </React.Fragment>
  );
}

export default Quiz;