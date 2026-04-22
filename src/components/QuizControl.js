import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(true);

  let currentlyVisibleState = null;

  if (newFormVisible) {
    currentlyVisibleState = <NewQuizForm getQuizData={getQuizData}/>
  } else {
    currentlyVisibleState = 
    <div>
      
    </div>
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default QuizControl;