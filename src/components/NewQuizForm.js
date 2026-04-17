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
    currentlyVisibleState =
      <div>
        {title}
        <br/>
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