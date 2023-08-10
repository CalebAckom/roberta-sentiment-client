import React, { useState } from "react";
import axios from "axios";
import './App.css'

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {
    const [tweet, setTweet] = useState("");
    const [sentiment, setSentiment] = useState("");

    const handleChange = (e) => {
        setTweet(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${apiUrl}/classify?text=${tweet}`);
            setSentiment(res.data.label);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h1>Sentiment Analysis</h1>
            <input
                type="text"
                placeholder="Enter a tweet"
                value={tweet}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p className={`sentiment ${sentiment}`}>Sentiment: {sentiment}</p>
        </div>
    );
};

export default App;
