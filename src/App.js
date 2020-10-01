import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dogImage, setDogImage] = useState("");

  // run this useEffect when the component mounts
  useEffect(() => {
    const goFetch = async () => {
      const dogResp = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogImage(dogResp.data.message);
    };
    goFetch();
  }, []);

  // useEffect(cbfunction, dependencyArray)
  useEffect(() => {
    // if count is 10
    if (count === 10) {
      // make the API call
      const goFetch = async () => {
        const dogResp = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImage(dogResp.data.message);
      };
      goFetch();
    } else {
      setDogImage("");
    }
    // no matter what we want to change the document title
    document.title = `${count} times clicked.`;
  }, [count]);

  return (
    <div className="App">
      {/* condition ? (trueOutcome) : (falseOutcome) */}
      {dogImage === "" ? (
        <h3>You are not ready.</h3>
      ) : (
        <img src={dogImage} alt="doggo" />
      )}
      <button onClick={() => setCount(count + 1)}>CLICK ME</button>
    </div>
  );
}

export default App;
