import React, { useState } from "react";

function EditQuizForm(props) {
  const { quiz, onQuizEdit } = props;

  const [title, setTitle] = useState("");
  const [questionList, setQuestionList] = useState({});
  const [answerList, setAnswerList] = useState({});

  function handleFormSubmission(event) {
    event.preventDefault();
    onQuizEdit({
      title: title,
      questionList: questionList,
      answerList: answerList,
      quizId: quiz.quizId,
      creatorId: quiz.creatorId
    });
  }

  const getTitle = (event) => {
    setTitle(event.target.value);
  }

  const getQuestions = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setQuestionList({...questionList, [key]: val});
  }

  const getAnswers = (event) => {
    let key = event.target.name;
    let val = event.target.value;

    setAnswerList({...answerList, [key]: val});
  }

  const populateForm = () => {
    let inputList = [];
    for (let i = 0; i < Object.values(quiz.questionList).length; i++) {
      inputList.push(
        <div key={i}>
          <p>Question #{i+1}</p>
          <input
            name={`question${i+1}`}
            type="text"
            onChange={getQuestions}
            maxLength={60}
            placeholder={`${Object.values(quiz.questionList)[i]}`}
            required/>
          <input
            name={`answer${i+1}`}
            type="text"
            onChange={getAnswers}
            maxLength={60}
            placeholder={`${Object.values(quiz.answerList)[i]}`}
            required/>
        </div>
      );
    }
    return inputList;
  }

  const questionInputs = populateForm();

  return (
    <React.Fragment>
      <div id="title-form-wrapper">
        <form id="title-form" onSubmit={handleFormSubmission}>
          <h4>Title</h4>
          <input
            name="title"
            type="text"
            onChange={getTitle}
            maxLength={20}
            placeholder={quiz.title}
            required/><br/>

            {questionInputs}

            <button type="submit">Edit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default EditQuizForm;