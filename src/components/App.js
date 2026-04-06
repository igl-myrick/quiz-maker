import React, { useState } from "react";
import QuizControl from "./QuizControl";
import AccountControl from "./AccountControl";
import Header from "./Header";

function App() {
  const [quizControlVisible, setQuizControlVisible] = useState(false);

  const toggleControlState = () => {
    setQuizControlVisible(!quizControlVisible)
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (quizControlVisible) {
    currentlyVisibleState = <QuizControl/>;
    buttonText = "Manage Accounts"
  } else {
    currentlyVisibleState = <AccountControl/>;
    buttonText = "View Quizzes"
  }

  return (
    <React.Fragment>
      <Header buttonText={buttonText} toggleControlState={toggleControlState}/>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default App;