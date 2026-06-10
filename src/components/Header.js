import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { toggleControlState, buttonText } = props;

  return (
    <React.Fragment>
      <h1>Quiz Maker</h1>
      <button type="button" id="quiz-button" onClick={toggleControlState}>{buttonText}</button>
    </React.Fragment>
  );
}

Header.propTypes = {
  buttonText: PropTypes.string,
  toggleControlState: PropTypes.func
}

export default Header;