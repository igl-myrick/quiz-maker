import React, { useState } from "react";
import { auth } from "../firebase";
import PropTypes from "prop-types";

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

  const getValues = (event, state, setState) => {
    let key = event.target.name;
    let val = event.target.value;

    setState({...state, [key]: val});
  }

  const populateForm = () => {
    let inputList = [];
    for (let i = 0; i < questionCount; i++) {
      inputList.push(
        <div key={i}>
          <input
            placeholder={`Question ${i+1}`}
            name={`question${i+1}`}
            type="text"
            onChange={(event) => {getValues(event, questionList, setQuestionList)}}
            maxLength={60}
            required/>
          <input
            placeholder={`Answer ${i+1}`}
            name={`answer${i+1}`}
            type="text"
            onChange={(event) => {getValues(event, answerList, setAnswerList)}}
            maxLength={60}
            required/>
        </div>
      );
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

NewQuizForm.propTypes = {
  onQuizCreation: PropTypes.func
}

export default NewQuizForm;