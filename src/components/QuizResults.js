import React from "react";

function QuizResults(props) {
  const displayResults = () => {
    const output = [];
    for (let i = 0; i < Object.entries(props.resultsData.questionList).length; i++) {
      output.push(
        <div key={i}>
          <p><strong>Question 1:</strong> {props.resultsData.questionList[i]}</p><br/>
          <p>Answer: {props.resultsData.answerList[i]}</p><br/>
          <p>Your answer: {props.resultsData.userAnswers[i]}</p>
        </div>
      );
    }
    return output;
  }

  const elems = displayResults();
 
  return (
    <React.Fragment>
      {elems}
    </React.Fragment>
  );
}

export default QuizResults;