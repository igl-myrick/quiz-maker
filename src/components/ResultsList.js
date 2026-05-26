import React from "react";
import ResultsPreview from "./ResultsPreview";

function ResultsList(props) {
  return (
    <React.Fragment>
      <h4>Your History</h4>
      {props.resultsList.map((results) =>
        <ResultsPreview
          onPreviewClicked={props.onPreviewClicked}
          title={results.title}
          questionList={results.questionList}
          id={results.id}
          key={results.id}/>
      )}
    </React.Fragment>
  )
}

export default ResultsList;