import React from "react";
import QuizPreview from "./QuizPreview";

function QuizList(props) {
  return (
    <React.Fragment>
      {props.quizList.map((quiz) =>
        <QuizPreview
          onPreviewClicked={props.onPreviewClicked}
          onEditClicked={props.onEditClicked}
          onDeleteClicked={props.onDeleteClicked}
          title={quiz.title}
          questionList={quiz.questionList}
          answerList={quiz.answerList}
          id={quiz.id}
          creatorId={quiz.creatorId}
          key={quiz.id}/>
      )}
    </React.Fragment>
  );
}

export default QuizList;