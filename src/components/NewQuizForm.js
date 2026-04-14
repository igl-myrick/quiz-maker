import React, { useState } from "react";

function NewQuizForm() {
  const [setupDivVisible, setSetupDivVisible] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const [title, setTitle] = useState("");
  // const [quizData, setQuizData] = useState([]);

  const handleSetup = (quizAmt, title) => {
    setQuestionCount(quizAmt);
    setTitle(title);
    setSetupDivVisible(false);
  }

  const handleFormDataCreation = () => {
    const inputsArray = document.getElementsByClassName("question-input");
    console.log(inputsArray);
  }

  let currentlyVisibleState = null;

  if (setupDivVisible) {
    currentlyVisibleState =
      <form onSubmit={handleSetup}>
        <p>Before we get started, how many questions should your quiz have?</p>
        <input id="number" type="number" max={15}/>
        <p>Next, what should the title of your quiz be?</p>
        <input id="title" type="text" maxLength={60}/>
        <button type="submit">Submit</button>
      </form>
  } else {
    const form = document.createElement("form");
    form.setAttribute("onSubmit", handleFormDataCreation);
    const titleP = document.createElement("p");
    titleP.innerText = title;

    for (let i = 1; i < questionCount + 1; i++) {
      const question =
        <div>
          <label htmlFor={`question${i}`}>Question {i}</label><br/>
          <input className="question-input" type="text" name={`question${i}`}/>
        </div>
      form.append(question);
    }

    const submitBtn = <button type="submit">Submit</button>
    form.append(submitBtn);

    currentlyVisibleState = form;
  }

  return (
    <React.Fragment>
      <h4>Create a New Quiz</h4>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default NewQuizForm;