import React from "react";
import QuizPreview from "./QuizPreview";
import PropTypes from "prop-types";

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
          id={quiz.id}
          creatorId={quiz.creatorId}
          key={quiz.id}/>
      )}
    </React.Fragment>
  );
}

QuizList.propTypes = {
  quizList: PropTypes.array,
  onPreviewClicked: PropTypes.func,
  onEditClicked: PropTypes.func,
  onDeleteClicked: PropTypes.func
}

export default QuizList;