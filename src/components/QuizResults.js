import React from "react";

function QuizResults(props) {
  const displayResults = () => {
    const output = [];
    for (let i = 0; i < Object.entries(props.resultsData.questionList).length; i++) {
      output.push(
        <div key={i}>
          <p><strong>Question {i + 1}: {Object.values(props.resultsData.questionList)[i]}</strong></p>
          <p>Answer: {Object.values(props.resultsData.answerList)[i]}</p>
          <p>Your answer: {Object.values(props.resultsData.userAnswers)[i]}</p>
        </div>
      );
    }
    return output;
  }

  const elems = displayResults();
 
  return (
    <React.Fragment>
      <h4>{props.resultsData.title}</h4>
      {elems}
    </React.Fragment>
  );
}

export default QuizResults;