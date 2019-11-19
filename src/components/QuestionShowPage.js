import React, { Component } from "react";

import QuestionDetails from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../requests";
import Spinner from "./Spinner";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it props
    super(props);

    this.state = {
      question: null,
      isLoading: true
    };
  }

  componentDidMount() {
    // Curreny 33 is hard-coded, but we are legitimately
    // fetching a real question with id 33 from the server
    // Question.one(33).then(question => {
    //   this.setState({
    //     question: question,
    //     isLoading: false
    //   });
    // });
    // All components that are rendered by a Route (Like this one)
    // will be given props that Route component
    // One of these props, called match, which contains
    // information related to the pattern matched path defined in App.js
    // <Route path='/questions/:id/:test/:blog' component={QuestionShowPage} />
    // match: {
    // params: {
    // id: <whatever-id-is>,
    // test: <whatever-is-the-test>,
    // blog: <whatever-is-the-blog>
    // }
    // }

    // Because the Route looked like the one above, the Route
    // component pattern matched on the ':id', and will give us a param called
    // 'id' within a property of 'match' called 'params'

    Question.one(this.props.match.params.id).then(question => {
      this.setState({
        question: question,
        isLoading: false
      });
    });
  }

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  deleteAnswer(id) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    });
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { answers = [] } = this.state.question;
    return (
      <main>
        <QuestionDetails {...this.state.question} />
        <button
          className="ui right floated red small button"
          onClick={() => this.deleteQuestion()}
        >
          Delete
        </button>
        <h2>Answers</h2>
        <AnswerList
          answers={answers}
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
        />
      </main>
    );
  }
}

export default QuestionShowPage;
