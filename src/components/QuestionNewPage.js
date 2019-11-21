import React, { Component } from "react";

import { Question } from "../requests";
import NewQuestionForm from "./NewQuestionForm";

export default class QuestionNewPage extends Component {
  state = {
    errors: []
  };
  createQuestion = params => {
    Question.create(params).then(question => {
      if (question.errors) {
        this.setState({ errors: question.errors });
      } else {
        this.props.history.push(`/questions/${question.id}`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="header">Ask A Question</div>
        <NewQuestionForm
          key={this.state.id}
          onSubmit={this.createQuestion}
          errors={this.state.errors}
        />
      </main>
    );
  }
}
