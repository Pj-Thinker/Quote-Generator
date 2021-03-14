import React, { useState, useEffect } from "react";
import Quote from "./Quote";

const url = "https://type.fit/api/quotes";

function App() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const newQuotes = await response.json();

      setQuotes(newQuotes);
      setLoading(false);
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        setIndex(Math.floor(Math.random() * quotes.length));
      }
    } catch (error) {
      console.log("Could not get the data");
    }
  };

  const getRandomValue = () => {
    let randomValue = Math.floor(Math.random() * quotes.length);
    if (randomValue === index) {
      getRandomValue();
    }
    setIndex(randomValue);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <>
      <Quote quotes={quotes} index={index} getRandomValue={getRandomValue} />
    </>
  );
}

export default App;
