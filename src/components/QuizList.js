import React from "react";
import QuizPreview from "./QuizPreview";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) =>
        <QuizPreview
          onPreviewClicked={props.onPreviewClicked}
          title={quiz.title}
          questionList={quiz.questionList}
          answerList={quiz.answerList}
          id={quiz.id}
          key={quiz.id}/>
      )}
    </React.Fragment>
  );
}

export default QuizList;