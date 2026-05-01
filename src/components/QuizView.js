import React from "react";

function QuizView(props) {
  const { quiz } = props;

  const populateForm = () => {
    const questionValues = Object.values(quiz.questionList);
    let formArr = [];

    for (let i = 0; i < questionValues.length; i++) {
      const formElem =
        <div key={i}>
          <label htmlFor={`question${i}`}>{questionValues[i]}</label>
          <br/>
          <input
            id={`question${i}`}
            type="text"
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
      <form>
        {elems}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default QuizView;