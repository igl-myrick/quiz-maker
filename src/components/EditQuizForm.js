import React, { useState } from "react";
import PropTypes from "prop-types";

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
      creatorId: quiz.creatorId,
      id: quiz.id
    });
  }

  const getValues = (event, state, setState) => {
    let key = event.target.name;
    let val = event.target.value;

    setState({...state, [key]: val});
  }

  const getTitle = (event) => {
    setTitle(event.target.value);
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

  const sortedQuestionList = sortObj(quiz.questionList);
  const sortedAnswerList = sortObj(quiz.answerList);

  const populateForm = () => {
    let inputList = [];
    for (let i = 0; i < Object.values(quiz.questionList).length; i++) {
      inputList.push(
        <div key={i}>
          <p>Question #{i+1}</p>
          <input
            name={`question${i+1}`}
            type="text"
            onChange={(event) => getValues(event, questionList, setQuestionList)}
            maxLength={60}
            placeholder={`${Object.values(sortedQuestionList)[i]}`}
            required/>
          <input
            name={`answer${i+1}`}
            type="text"
            onChange={(event) => getValues(event, answerList, setAnswerList)}
            maxLength={60}
            placeholder={`${Object.values(sortedAnswerList)[i]}`}
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

EditQuizForm.propTypes = {
  quiz: PropTypes.object,
  onQuizEdit: PropTypes.func
}

export default EditQuizForm;