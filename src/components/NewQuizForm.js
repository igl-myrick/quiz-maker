import React, { useState } from "react";
import { auth } from "../firebase";

function NewQuizForm(props) {
  const [setupDivVisible, setSetupDivVisible] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [title, setTitle] = useState("");
  const [questionList, setQuestionList] = useState({});
  const [answerList, setAnswerList] = useState({});

  const handleSetupSubmission = (event) => {
    event.preventDefault();
    setQuestionCount(event.target.number.value);
    setTitle(event.target.title.value);
    setSetupDivVisible(false);
  }

  const handleQuizSubmission = (event) => {
    event.preventDefault();
    props.onQuizCreation({
      title: title,
      questionList: questionList,
      answerList: answerList,
      creatorId: auth.currentUser.uid
    });
  }

  const getQuestions = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setQuestionList({...questionList, [key]: val});
  }

  const getAnswers = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setAnswerList({...answerList, [key]: val});
  }

  const populateForm = () => {
    let inputList = [];
    for (let i = 0; i < questionCount; i++) {
      inputList.push(
        <div key={i}>
          <p>Question #{i+1}</p>
          <input
            name={`question${i+1}`}
            type="text"
            onChange={getQuestions}
            maxLength={60}
            required/>
          <p>Answer #{i+1}</p>
          <input
            name={`answer${i+1}`}
            type="text"
            onChange={getAnswers}
            maxLength={60}
            required/>
        </div>
      )
    }
    return inputList;
  }

  let currentlyVisibleState = null;

  if (setupDivVisible) {
    currentlyVisibleState = 
      <form onSubmit={handleSetupSubmission}>
        <p>Before we get started, how many questions should your quiz have?</p>
        <input id="number" type="number" max={15} required/>
        <p>Next, what should the title of your quiz be?</p>
        <input id="title" type="text" maxLength={60} required/><br/>
        <button type="submit">Submit</button>
      </form>
  } else {
    const elems = populateForm();
    currentlyVisibleState =
      <div>
        <h5>{title}</h5>
        <form onSubmit={handleQuizSubmission}>
          {elems}
          <button type="submit">Submit</button>
        </form>
      </div>
  }

  return (
    <React.Fragment>
      <h4>Create a New Quiz</h4>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default NewQuizForm;