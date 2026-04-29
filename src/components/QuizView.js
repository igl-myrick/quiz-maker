import React from "react";

function QuizView(props) {
  const {title, formData, id} = props;

  const parseFormData = () => {
    console.log(formData);
  }

  return (
    <React.Fragment>
      <h4>{title}</h4>
      <button onClick={parseFormData}>Click</button>
    </React.Fragment>
  );
}

export default QuizView;