import React, { useState } from "react";

function NewQuizForm() {
  const [setupDivVisible, setSetupDivVisible] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [title, setTitle] = useState("");

  const handleSetupSubmission = (event) => {
    event.preventDefault();
    setQuestionCount(event.target.number.value);
    setTitle(event.target.title.value);
    setSetupDivVisible(false);
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
            maxLength={60}/>
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
        <input id="title" type="text" maxLength={60} required/>
        <button type="submit">Submit</button>
      </form>
  } else {
    const elems = populateForm();
    currentlyVisibleState =
      <div>
        <h5>{title}</h5>
        <form>
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
  )
}

export default NewQuizForm;