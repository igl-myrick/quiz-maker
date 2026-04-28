import React from "react";

function Quiz(props) {
  const {title, formData, id} = props;

  const count = (Object.entries(formData).length / 2);

  return (
    <React.Fragment>
      <h4>{title}</h4>
      <p>{count} questions</p>
      <button type="button">Take Quiz</button>
    </React.Fragment>
  );
}

export default Quiz;