import React from "react";

function NewQuizForm() {
  const populateForm = (amountOfQuestions) => {
    const formWrapper = document.getElementById("questions");
    for (i = 0; i < amountOfQuestions; i++) {
      const question =
        <div>
          
        </div>
    }
  }

  return (
    <React.Fragment>
      <h4>Create a New Quiz</h4>
      <div id="select-quantity">
        <p>Before we get started, how many questions should your quiz have?</p>
        <form onSubmit={populateForm}>
          <input id="number" type="number" max={15}/>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="questions"></div>
    </React.Fragment>
  )
}