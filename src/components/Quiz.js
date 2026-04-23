import React from "react";

function Quiz(props) {
  const {title, formData} = props;

  let count = 0;

  for (const pair in formData) {
    count++;
  }

  return (
    <React.Fragment>
      <h4>{title}</h4>
      <p>{count} questions</p>
      <button type="button">Take Quiz</button>
    </React.Fragment>
  );
}

export default Quiz;