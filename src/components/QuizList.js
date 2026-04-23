import React from "react";
import Quiz from "./Quiz";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) =>
        <Quiz
          title={quiz.title}
          quizData={quiz.quizData}
          id={quiz.id}
          key={quiz.id}/>
      )}
    </React.Fragment>
  );
}

export default QuizList;