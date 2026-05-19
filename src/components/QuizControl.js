import React, { useEffect, useState } from "react";
import NewQuizForm from "./NewQuizForm";
import QuizList from "./QuizList";
import QuizView from "./QuizView";
import QuizResults from "./QuizResults";
import EditQuizForm from "./EditQuizForm";
import { db, auth } from "./../firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function QuizControl() {
  const [newFormVisible, setNewFormVisible] = useState(false);
  const [mainQuizList, setMainQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedResults, setSelectedResults] = useState(null);
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
            id: doc.id
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
    if (selectedQuiz !== null || selectedResults !== null) {
      setNewFormVisible(false);
      setSelectedQuiz(null);
      setSelectedResults(null);
      setIsEditing(false);
    } else {
      setNewFormVisible(!newFormVisible);
    }
  }

  const handleQuizCreation = async (newQuiz) => {
    await addDoc(collection(db, "quizzes"), newQuiz);
    setNewFormVisible(false);
  }

  const handleChangingSelectedQuiz = (id) => {
    const selection = mainQuizList.find(quiz => quiz.id === id);
    setSelectedQuiz(selection);
  }

  const handleResultsSubmission = async (results) => {
    const { title, questionList, answerList } = selectedQuiz;
    const { userAnswers, takerId } = results;
    const currentResults = { title, questionList, answerList, userAnswers, takerId };

    await addDoc(collection(db, "results"), currentResults);
    setSelectedQuiz(null);
    setSelectedResults(currentResults);
  }

  const handleEditClick = (id) => {
    handleChangingSelectedQuiz(id);
    setIsEditing(true);
  }

  const handleQuizEdit = async (quizToEdit) => {
    await updateDoc(doc(db, "quizzes", quizToEdit.id), quizToEdit);
    setIsEditing(false);
    setSelectedQuiz(null);
  }

  const handleQuizDeletion = async (id) => {
    await deleteDoc(doc(db, "quizzes", id));
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
      currentlyVisibleState = 
        <EditQuizForm 
          quiz={selectedQuiz}
          onQuizEdit={handleQuizEdit}/>
      buttonText = "Back to Quiz List";
    } else if (selectedResults !== null) {
      currentlyVisibleState =
         <QuizResults
           results={selectedResults}/>
      buttonText = "Back to Quiz List";
    } else if (selectedQuiz !== null) {
      currentlyVisibleState =
        <QuizView
          quiz={selectedQuiz}
          onResultsSubmitted={handleResultsSubmission}/>
      buttonText = "Back to Quiz List";
    } else if (newFormVisible) {
      currentlyVisibleState =
        <NewQuizForm
          onQuizCreation={handleQuizCreation}/>
      buttonText = "Back to Quiz List";
    } else {
      currentlyVisibleState =
        <QuizList
          quizList={mainQuizList}
          onPreviewClicked={handleChangingSelectedQuiz}
          onEditClicked={handleEditClick}
          onDeleteClicked={handleQuizDeletion}/>
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