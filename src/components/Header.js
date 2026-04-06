import React from "react";

function Header(props) {
  const { toggleControlState, buttonText } = props;

  return (
    <React.Fragment>
      <h1>Quiz Maker</h1>
      <button type="button" id="quiz-button" onClick={toggleControlState}>{buttonText}</button>
    </React.Fragment>
  );
}

export default Header;