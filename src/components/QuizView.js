import React, { useState } from "react";
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
      takerId: auth.currentUser.uid
    });
  }

  const sortObj = (obj) => {
    const sortedObj = Object.entries(obj).sort(([keyA], [keyB]) => 
      keyA.localeCompare(keyB)
    );
    const output = [];
    for (let i = 0; i < sortedObj.length; i++) {
      output.push(sortedObj[i][1]);
    }
    return output;
  }

  const sortedQuestionList = sortObj(props.quiz.questionList);

  const populateForm = () => {
    const questionValues = sortedQuestionList;
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
            maxLength={60}
            required/>
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