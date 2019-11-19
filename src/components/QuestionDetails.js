import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function QuestionDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.author && props.author.full_name}
      </p>
      <p>
        <small>Seen {props.view_count} time(s)</small>
        <CreatedAtShow created_at={props.created_at} />
      </p>
    </div>
  );
}

export default QuestionDetails;
