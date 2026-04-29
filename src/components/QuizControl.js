import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import QuizView from "./QuizView";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleClick = () => {
    if (selectedQuiz !== null) {
      setNewFormVisible(false);
      setSelectedQuiz(null);
    } else {
      setNewFormVisible(!newFormVisible);
    }
  }

  const getQuizData = (newQuiz) => {
    const newMainQuizList = mainQuizList.concat(newQuiz);
    setMainQuizList(newMainQuizList);
    setNewFormVisible(false);
  }

  const handleChangingSelectedQuiz = (id) => {
    const selection = mainQuizList.find(quiz => quiz.id === id);
    setSelectedQuiz(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (selectedQuiz !== null) {
    currentlyVisibleState = <QuizView quiz={selectedQuiz}/>
    buttonText = "Back to Quiz List";
  } else if (newFormVisible) {
    currentlyVisibleState = <NewQuizForm getQuizData={getQuizData}/>
    buttonText = "Back to Quiz List";
  } else {
    currentlyVisibleState = <QuizList quizList={mainQuizList} onPreviewClicked={handleChangingSelectedQuiz}/>
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