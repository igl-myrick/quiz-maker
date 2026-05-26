import React from "react";

function ResultsPreview(props) {
  const { title, questionList, onPreviewClicked, id } = props;

  const questionCount = Object.entries(questionList).length;

  return (
      <React.Fragment>
        <div>
          <h4>{title}</h4>
          <p>{questionCount} questions</p>
          <button type="button" onClick={() => onPreviewClicked(id)}>View Results</button>
        </div>
      </React.Fragment>
    );
}

export default ResultsPreview;