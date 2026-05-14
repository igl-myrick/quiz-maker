import React, { useState } from "react";
import { v4 } from "uuid";
import { auth } from "../firebase";

function QuizView(props) {
  const [userAnswers, setUserAnswers] = useState({});

  const getAnswers = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setUserAnswers({...userAnswers, [key]: val});
  }

  const handleResultsSubmission = (event) => {
    event.preventDefault();
    props.onResultsSubmitted({
      userAnswers: userAnswers,
      resultsId: v4(),
      takerId: auth.currentUser.uid
    });
  }

  const populateForm = () => {
    const questionValues = Object.values(props.quiz.questionList);
    let formArr = [];

    for (let i = 0; i < questionValues.length; i++) {
      const formElem =
        <div key={i}>
          <label htmlFor={`question${i+1}`}>{questionValues[i]}</label>
          <br/>
          <input
            name={`question${i+1}`}
            type="text"
            onChange={getAnswers}
            maxLength={60}/>
        </div>
      formArr.push(formElem);
    }
    
    return formArr;
  }

  const elems = populateForm();

  return (
    <React.Fragment>
      <h4>{props.quiz.title}</h4>
      <form onSubmit={handleResultsSubmission}>
        {elems}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default QuizView;