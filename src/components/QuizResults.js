import React from "react";

function QuizResults(props) {
  const styleCorrect = { color: "green" };
  const styleWrong = { color: "red" };

  const trimInput = (input) => {
    return input.replace(/[.,/\\#!$%^&*;:{}=\s\-_`~()@+"'<>?|]/g, "").toUpperCase();
  }

  const displayResults = () => {
    const output = [];
    for (let i = 0; i < props.results.questionCount; i++) {
      let elemStyle = null;
      if (trimInput(Object.values(props.quiz.answerList)[i]) === trimInput(Object.values(props.results.userAnswers)[i])) {
        elemStyle = styleCorrect;
      } else {
        elemStyle = styleWrong;
      }
      output.push(
        <div key={i}>
          <p><strong>Question {i + 1}: {Object.values(props.quiz.questionList)[i]}</strong></p>
          <p>Answer: {Object.values(props.quiz.answerList)[i]}</p>
          <p style={elemStyle}>Your answer: {Object.values(props.results.userAnswers)[i]}</p>
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

export default QuizResults;