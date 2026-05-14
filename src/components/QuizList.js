import React from "react";
import QuizPreview from "./QuizPreview";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) =>
        <QuizPreview
          onPreviewClicked={props.onPreviewClicked}
          onEditClicked={props.onEditClicked}
          title={quiz.title}
          questionList={quiz.questionList}
          answerList={quiz.answerList}
          quizId={quiz.quizId}
          creatorId={quiz.creatorId}
          key={quiz.quizId}/>
      )}
    </React.Fragment>
  );
}

export default QuizList;