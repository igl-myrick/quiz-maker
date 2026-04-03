import React, { useState } from "react";
import QuizControl from "./QuizControl";
import AccountControl from "./AccountControl";
import Header from "./Header";

function App() {
  const [quizControlVisible, setQuizControlVisible] = useState(false);

  const handleAcctCtrlClicked = () => {
    if (quizControlVisible) {
      setQuizControlVisible(false);
      document.getElementById("account-button").toggleAttribute("disabled");
      document.getElementById("quiz-button").toggleAttribute("disabled");
    }
  }

  const handleQuizCtrlClicked = () => {
    if (quizControlVisible === false) {
      setQuizControlVisible(true);
      document.getElementById("account-button").toggleAttribute("disabled");
      document.getElementById("quiz-button").toggleAttribute("disabled");
    }
  }

  let currentlyVisibleState = null;

  if (quizControlVisible) {
    currentlyVisibleState = <QuizControl/>;
  } else {
    currentlyVisibleState = <AccountControl/>;
  }

  return (
    <React.Fragment>
      <Header handleQuizCtrlClicked={handleQuizCtrlClicked} handleAcctCtrlClicked={handleAcctCtrlClicked}/>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default App;