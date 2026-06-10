import React from "react";
import ResultsPreview from "./ResultsPreview";

function ResultsList(props) {
  let currentlyVisibleState = null;

  if (Object.entries(props.resultsList).length > 0) {
    currentlyVisibleState = props.resultsList.map((results) =>
      <ResultsPreview
        onPreviewClicked={props.onPreviewClicked}
        title={results.title}
        questionCount={results.questionCount}
        quizId={results.quizId}
        id={results.id}
        key={results.id}/>
    );
  } else {
    currentlyVisibleState = <p>No history yet!</p>;
  }

  return (
    <React.Fragment>
      <h4>Your History</h4>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default ResultsList;