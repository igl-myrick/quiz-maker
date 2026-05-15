import React, { useEffect, useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import QuizView from "./QuizView";
import QuizResults from "./QuizResults";
import EditQuizForm from "./EditQuizForm";
import { db, auth } from "./../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "quizzes"),
      (collectionSnapshot) => {
        const quizzes = [];
        collectionSnapshot.forEach((doc) => {
          quizzes.push({
            title: doc.data().title,
            questionList: doc.data().questionList,
            answerList: doc.data().answerList,
            creatorId: doc.data().creatorId,
            quizId: doc.id
          });
        });
        setMainQuizList(quizzes);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unsub();
  }, []);

  const handleClick = () => {
    if (selectedQuiz !== null) {
      setNewFormVisible(false);
      setSelectedQuiz(null);
      setIsEditing(false);
    } else if (resultsVisible) {
      setResultsVisible(false);
    } else {
      setNewFormVisible(!newFormVisible);
    }
  }

  const handleQuizCreation = async (newQuiz) => {
    await addDoc(collection(db, "quizzes"), newQuiz);
    setNewFormVisible(false);
  }

  const handleChangingSelectedQuiz = (id) => {
    const selection = mainQuizList.find(quiz => quiz.quizId === id);
    setSelectedQuiz(selection);
  }

  const handleResultsSubmission = (results) => {
    const { title, questionList, answerList } = selectedQuiz;
    const { userAnswers, resultsId, takerId } = results;

    const currentResults = { title, questionList, answerList, userAnswers, resultsId, takerId };
    setResultsData(currentResults);

    setSelectedQuiz(null);
    setResultsVisible(true);
  }

  const handleEditClick = (id) => {
    handleChangingSelectedQuiz(id);
    setIsEditing(true);
  }

  const handleQuizEdit = (quizToEdit) => {
    const editedQuizList = mainQuizList.map(quiz =>
      quiz.quizId === selectedQuiz.quizId ? quizToEdit : quiz
    );

    setMainQuizList(editedQuizList);
    setIsEditing(false);
    setSelectedQuiz(null);
  }

  if (!auth.currentUser) {
    return (
      <React.Fragment>
        <p>You must be signed in to view quizzes!</p>
      </React.Fragment>
    );
  } else if (auth.currentUser) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (isEditing) {
      currentlyVisibleState = <EditQuizForm quiz={selectedQuiz} onQuizEdit={handleQuizEdit}/>
      buttonText = "Back to Quiz List";
    } else if (resultsVisible) {
      currentlyVisibleState = <QuizResults resultsData={resultsData}/>
      buttonText = "Back to Quiz List";
    } else if (selectedQuiz !== null) {
      currentlyVisibleState = <QuizView quiz={selectedQuiz} onResultsSubmitted={handleResultsSubmission}/>
      buttonText = "Back to Quiz List";
    } else if (newFormVisible) {
      currentlyVisibleState = <NewQuizForm onQuizCreation={handleQuizCreation}/>
      buttonText = "Back to Quiz List";
    } else {
      currentlyVisibleState = <QuizList quizList={mainQuizList} onPreviewClicked={handleChangingSelectedQuiz} onEditClicked={handleEditClick}/>
      buttonText = "Add a Quiz";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br/>
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }  
}

export default QuizControl;