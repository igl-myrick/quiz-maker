import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);

  const handleClick = () => {
    setNewFormVisible(!newFormVisible);
  }

  const getQuizData = (newQuiz) => {
    const newMainQuizList = mainQuizList.concat(newQuiz);
    setMainQuizList(newMainQuizList);
    setNewFormVisible(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (newFormVisible) {
    currentlyVisibleState = <NewQuizForm getQuizData={getQuizData}/>
    buttonText = "Back to Quiz List";
  } else {
    currentlyVisibleState = <QuizList quizList={mainQuizList}/>
    buttonText = "Add a Quiz";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <br/>
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default QuizControl;