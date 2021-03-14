import React from "react";
import Buttons from "./Buttons";

function Quote({ quotes, index, getRandomValue }) {
  const { text, author } = quotes[index];

  return (
    <section id="quote-box" className="container">
      <h2 className="title">Quotes</h2>

      <div className="quote">
        <p id="text">{text}</p>
        {<h3 id="author">{author || "unknown"} </h3>}
      </div>

      <Buttons author={author} text={text} getRandomValue={getRandomValue} />
    </section>
  );
}

export default Quote;
