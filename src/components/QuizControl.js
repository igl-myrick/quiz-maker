import React, { useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import QuizView from "./QuizView";
import QuizResults from "./QuizResults";
import EditQuizForm from "./EditQuizForm";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    if (selectedQuiz !== null) {
      setNewFormVisible(false);
      setSelectedQuiz(null);
      setIsEditing(false);
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

  const getQuizResults = (results) => {
    const { title, questionList, answerList } = selectedQuiz;
    const { userAnswers, resultsId } = results;

    const currentResults = { title, questionList, answerList, userAnswers, resultsId };
    setResultsData(currentResults);

    setSelectedQuiz(null);
    setResultsVisible(true);
  }

  const handleQuizEdit = (quizToEdit) => {
    const editedQuizList = mainQuizList.map(quiz =>
      quiz.id === selectedQuiz.id ? quizToEdit : quiz
    );

    setMainQuizList(editedQuizList);
    setIsEditing(false);
    setSelectedQuiz(null);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (isEditing) {
    currentlyVisibleState = <EditQuizForm quiz={selectedQuiz} onQuizEdit={handleQuizEdit}/>
    buttonText = "Back to Quiz List";
  } else if (resultsVisible) {
    currentlyVisibleState = <QuizResults resultsData={resultsData}/>
    buttonText = "Back to Quiz List";
  } else if (selectedQuiz !== null) {
    currentlyVisibleState = <QuizView quiz={selectedQuiz} getQuizResults={getQuizResults}/>
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