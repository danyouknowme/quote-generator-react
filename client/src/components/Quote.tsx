import { useState } from "react";
import axios from "axios";
import "./quote.css";

const Quote = () => {

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [isGenerated, setGenerate] = useState(false);

  const getQuote = () => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        setText(response.data['text']);
        setAuthor(response.data['author']);
        setGenerate(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={getQuote}>Generate Quote</button>
        <h1>{text}</h1>
        <h3><span className={!isGenerated ? "hide" : ""}>- </span>{author}</h3>
    </div>
  );
};

export default Quote;
