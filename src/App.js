import React, { useState } from "react";
import axios from "axios";
import './App.css'

const App = () => {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8185/classify?text=${tweet}`, {
      // text: tweet,
    }).then((res)=>{
        setSentiment(res.data.label);
        setScores(res.data.scores);
    }).catch((err)=>{
        console.error(err)
    });
  };

  return (
      <div>
        <h1>Sentiment Analysis</h1>
        <input
            type="text"
            placeholder="Enter a tweet"
            value={tweet}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>Sentiment: {sentiment}</p>
      </div>
  );
};

export default App;