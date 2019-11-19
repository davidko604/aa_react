import React, { Component } from "react";

import { Question } from "../requests";
import NewQuestionForm from "./NewQuestionForm";

export default class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
  }
  createQuestion = params => {
    Question.create(params).then(question => {
      this.props.history.push(`/questions/${question.id}`);
    });
  };

  render() {
    return (
      <main>
        <div className="header">Ask A Question</div>
        <NewQuestionForm onSubmit={this.createQuestion} />
      </main>
    );
  }
}
