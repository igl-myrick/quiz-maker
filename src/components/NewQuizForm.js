import React from "react";

function NewQuizForm() {
  const [setupDivVisible, setSetupDivVisible] = useState(true);

  let currentlyVisibleState = null;

  if (setupDivVisible) {
    currentlyVisibleState = 
      <div id="select-quantity">
          <p>Before we get started, how many questions should your quiz have?</p>
          <form onSubmit={populateForm}>
            <input id="number" type="number" max={15}/>
            <button type="submit">Submit</button>
          </form>
        </div>
  } else {
    currentlyVisibleState = <div id="questions"></div>
  }

  const populateForm = (amountOfQuestions) => {
    const formWrapper = document.getElementById("questions");
    const form = document.createElement("form");
    for (i = 1; i < amountOfQuestions + 1; i++) {
      const question =
        <div>
          <label htmlFor={`question${i}`}>Question {i}</label><br/>
          <input type="text" name={`question${i}`}/>
        </div>
      form.append(question);
    }
    const submitBtn = <button type="submit">Create Quiz</button>
    form.append(submitBtn);
    formWrapper.append(form);
    setSetupDivVisible(false);
  }

  return (
    <React.Fragment>
      <h4>Create a New Quiz</h4>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default NewQuizForm;