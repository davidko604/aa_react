import React, { Component } from "react";

class CurrentDateTime extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    // This method is called whenever the component is rendered
    // in the dom
    // There many different ways we might want to use this method,

    // - fetching data from an API
    // - adding event listeners
    // - starting timers
    // - etc

    // To share values between methods, we need to add
    // instance properties to 'this' object

    // Here we gonna store the id of the interval that
    // is gonna start withing ComponentDidMount method

    // So that we can use that id to clear the interval
    // when the component unmounts. i.e. when componentWillUnmount
    // is called
    this.intervalId = setInterval(() => {
      // update time every second
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // This method is called before the component is
    // removed from the DOM
    // Use it to clean up setIntervals, setTimeouts,
    // event listeners, etc

    console.log("this.intervalId: ", this.intervalId);

    // 'clearInterval' is a method built in to the browser
    // API that allows to stop the interval with the given
    // iterval id
    clearInterval(this.intervalId);
  }
  render() {
    // console.log("render");
    return <div className="">{this.state.dateTime.toLocaleString()}</div>;
  }
}

export default CurrentDateTime;
