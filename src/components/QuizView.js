import React from "react";

function QuizView(props) {
  const { quiz } = props;

  const populateForm = () => {
    let formArr = [];
    for (let i = 0; i < Object.values(quiz.questionList).length; i++) {
      const elem =
        <div key={i}>
          <label htmlFor={`question${i}`}>{Object.values(quiz.questionList)[i]}</label>
          <br/>
          <input
            id={`question${i}`}
            type="text"
            maxLength={60}/>
        </div>
      formArr.push(elem);
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