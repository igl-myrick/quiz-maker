import React from "react";
import QuizPreview from "./QuizPreview";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) =>
        <QuizPreview
          title={quiz.title}
          formData={quiz.formData}
          id={quiz.id}
          key={quiz.id}/>
      )}
    </React.Fragment>
  );
}

export default QuizList;