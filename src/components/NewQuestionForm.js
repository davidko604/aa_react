import React from "react";

import FormErrors from "./FormErrors/FormErrors";

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
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div className="field">
        <label>Body</label>
        <textarea name="body" rows="2" id="body" />
        <FormErrors forField="body" errors={props.errors} />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewQuestionForm;
