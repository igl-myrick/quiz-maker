import React from "react";

function Quiz(props) {
  const {title, questionList, id} = props;

  const count = (Object.entries(questionList).length);

  return (
    <React.Fragment>
      <div onClick={() => props.onPreviewClicked(id)}>
        <h4>{title}</h4>
        <p>{count} questions</p>
        <button type="button">Take Quiz</button>
      </div>
    </React.Fragment>
  );
}

export default Quiz;