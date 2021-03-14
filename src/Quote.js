import React from "react";
import Buttons from "./Buttons";

function Quote({ quotes, index, getRandomValue }) {
  const { text, author } = quotes[index];

  return (
    <section className="section">
      <h2 className="title">Quotes</h2>

      {<h4>{author || "unknown"} </h4>}
      <p>{text}</p>

      <Buttons author={author} text={text} getRandomValue={getRandomValue} />
    </section>
  );
}

export default Quote;
