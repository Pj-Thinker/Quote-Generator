import React from "react";

const Buttons = ({ author, text, getRandomValue }) => {
  let link = `https://twitter.com/intent/tweet?text=${text + " - " + author}`;

  const downloadToFile = () => {
    const a = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });

    a.href = URL.createObjectURL(file);
    a.download = author;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  return (
    <>
      <button onClick={() => getRandomValue()}>srprise me!</button>

      <button>
        <a
          id="tweet"
          className="twitter-share-button"
          href={link}
          rel="noreferrer"
          target="_blank"
        >
          Tweet
        </a>
      </button>

      <button id="btnSave" onClick={() => downloadToFile()}>
        save
      </button>
    </>
  );
};

export default Buttons;
