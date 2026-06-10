import React from "react";
import PropTypes from "prop-types";

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

ResultsPreview.propTypes = {
  onPreviewClicked: PropTypes.func,
  title: PropTypes.string,
  questionCount: PropTypes.number,
  id: PropTypes.string
}

export default ResultsPreview;