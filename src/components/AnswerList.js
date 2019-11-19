import React from "react";
import AnswerDetails from "./AnswerDetails";

export function AnswerList(props) {
  const { answers } = props; // const answers = props.answers;
  return (
    <ul>
      {answers.map(answer => (
        <li key={answer.id}>
          {/* <AnswerDetails
            body={answer.body}
            author={answer.author}
            created_at={answer.created_at}
          /> */}
          {/* In JSX, you use spread operator
                to pass properties of an object as props to the react element
             */}
          <AnswerDetails
            {...answer}
            onDeleteClick={props.onAnswerDeleteClick}
          />
        </li>
      ))}
    </ul>
  );
}
