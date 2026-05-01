import React, { useState } from "react";

function QuizView(props) {
  const { quiz } = props;

  const [userAnswers, setUserAnswers] = useState({});

  const getAnswers = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setUserAnswers({...userAnswers, [key]: val});
  }

  const handleQuizSubmission = (event) => {
    event.preventDefault();
    console.log(userAnswers);
  }

  const populateForm = () => {
    const questionValues = Object.values(quiz.questionList);
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
      <h4>{quiz.title}</h4>
      <form onSubmit={handleQuizSubmission}>
        {elems}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default QuizView;