import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("gray");

  const analyzeSentiment = () => {
    const randomValue = Math.random();

    if (text.trim() === "") {
      setResult("Please enter some text first.");
      setColor("gray");
      return;
    }

    if (randomValue < 0.33) {
      setResult("Positive sentiment");
      setColor("green");
    } else if (randomValue < 0.66) {
      setResult("Neutral sentiment");
      setColor("orange");
    } else {
      setResult("Negative sentiment");
      setColor("red");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Sentiment Analysis App</h1>
        <p className="subtitle">
          Enter a sentence and get a sentiment result.
        </p>

        <textarea
          placeholder="Write your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={analyzeSentiment}>Analyze Sentiment</button>

        {result && (
          <div className="result-box">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: color,
                margin: "0 auto 10px auto"
              }}
            ></div>

            <h2>{result}</h2>

            <p>Your text:</p>

            <div className="user-text">{text}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;