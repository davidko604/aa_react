import React from "react";

function NewQuestionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      title: fd.get("title"),
      body: fd.get("body")
    });

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="field">
        <label>Body</label>
        <textarea name="body" rows="2" id="body" />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewQuestionForm;
