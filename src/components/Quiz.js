import React, { useState } from "react";

function Quiz(props) {
  const {title, formData} = props;

  let currentlyVisibleState = null;

  return (
    <React.Fragment>
      <p>{title}</p>
      {currentlyVisibleState}
    </React.Fragment>
  )
}