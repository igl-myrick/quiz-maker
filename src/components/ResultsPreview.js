import React from "react";

function ResultsPreview(props) {
  const { title, questionCount, onPreviewClicked, id } = props;

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