import React, { useState } from "react";

function EditQuizForm(props) {
  const { quiz, handleQuizEdit } = props;

  const [title, setTitle] = useState("");
  const [questionList, setQuestionList] = useState({});
  const [answerList, setAnswerList] = useState({});

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    handleQuizEdit({
      title: title,
      questionList: questionList,
      answerList: answerList,
      id: quiz.id
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
    for (let i = 0; i < quiz.questionList.length; i++) {
      inputList.push(
        <div key={i}>
          <p>Question #{i+1}</p>
          <input
            name={`question${i+1}`}
            type="text"
            onChange={getQuestions}
            maxLength={60}
            placeholder={`${Object.values(quiz.questionList)[i]}`}/>
          <input
            name={`answer${i+1}`}
            type="text"
            onChange={getAnswers}
            maxLength={60}
            placeholder={`${Object.values(quiz.answerList)[i]}`}/>
        </div>
      );
    }
  }

  const questionInputs = populateForm();

  return (
    <React.Fragment>
      <div id="title-form-wrapper">
        <form id="title-form">
          <h4>Title</h4>
          <input
            name="title"
            type="text"
            onChange={getTitle}
            maxLength={20}
            placeholder={title}/><br/>

            {questionInputs}
        </form>
      </div>
    </React.Fragment>
  );
}

export default EditQuizForm;