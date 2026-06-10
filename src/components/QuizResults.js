import React from "react";
import PropTypes from "prop-types";

function QuizResults(props) {
  const styleCorrect = { color: "green" };
  const styleWrong = { color: "red" };

  const trimInput = (input) => {
    return input.replace(/[.,/\\#!$%^&*;:{}=\s\-_`~()@+"'<>?|]/g, "").toUpperCase();
  }

  const sortObj = (obj) => {
    const sortedObj = Object.entries(obj).sort(([keyA], [keyB]) => 
      keyA.localeCompare(keyB)
    );
    const output = [];
    for (let i = 0; i < sortedObj.length; i++) {
      output.push(sortedObj[i][1]);
    }
    return output;
  }

  const sortedQuestionList = sortObj(props.quiz.questionList);
  const sortedAnswerList = sortObj(props.quiz.answerList);
  const sortedUserAnswers = sortObj(props.results.userAnswers);

  const displayResults = () => {
    const output = [];
    for (let i = 0; i < props.results.questionCount; i++) {
      let elemStyle = null;
      if (trimInput(sortedAnswerList[i]) === trimInput(sortedUserAnswers[i])) {
        elemStyle = styleCorrect;
      } else {
        elemStyle = styleWrong;
      }
      output.push(
        <div key={i}>
          <p><strong>Question {i + 1}: {sortedQuestionList[i]}</strong></p>
          <p>Answer: {sortedAnswerList[i]}</p>
          <p style={elemStyle}>Your answer: {sortedUserAnswers[i]}</p>
        </div>
      );
    }
    return output;
  }
  
  const elems = displayResults();
 
  return (
    <React.Fragment>
      <h4>{props.results.title}</h4>
      {elems}
    </React.Fragment>
  );
}

QuizResults.propTypes = {
  quiz: PropTypes.object,
  results: PropTypes.object
}

export default QuizResults;