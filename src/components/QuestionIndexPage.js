import React from "react";
import { Link } from "react-router-dom";

import QuestionNewPage from "./QuestionNewPage";
import { Question } from "../requests";
import Spinner from "./Spinner";

export class QuestionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initially the list of the questions is empty until
      // we fetch them from server
      questions: [],
      // Initially, before we have fetched the questions
      // from the server, we will display some loading
      // indicator to the user.
      // but, once we have fetched the questions, we will change
      // the i  sLoading property to 'false'
      // and display the regular list of questions
      isLoading: true
    };
  }

  componentDidMount() {
    // When the QuestionIndexPage component is mounted,
    // we will fetch all of the questions from the server
    Question.all().then(questions => {
      // console.log(questions);
      this.setState({
        questions: questions,
        isLoading: false
      });
    });
  }

  deleteQuestion(id) {
    // To change state in a React component, you must use the
    // 'setState()' method on 'this'. It takes an object that
    // gets merged in the current state at React's convenience.
    // The properties in 'setState()'  replace the same name properties
    // in the current state
    // This happens asynchronously and will eventually trigger an update
    // to the DOM if there's any change

    //modify the below to add a true delete request
    Question.destroy(id).then(() => {
      this.setState({
        questions: this.state.questions.filter(q => q.id !== id)
      });
    });
    // this.setState({
    //   questions: this.state.questions.filter(q => q.id !== id)
    // });
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    // const showAll = this.props.showAll || true;
    const filteredQuestion = this.state.questions.filter((q, index) => {
      if (showAll || index < 5) {
        return true;
      }
      return false;
    });
    return (
      <main className="QuestionIndexPage">
        {/* <QuestionNewPage /> */}
        <h2>Questions</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredQuestion.map(question => (
            <li className="ui segment" key={question.id}>
              <Link to={`/questions/${question.id}`} className="item" href="">
                {question.title}
              </Link>
              <button
                className="ui right floated red small button"
                onClick={() => this.deleteQuestion(question.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </main>
    );
  }
}
