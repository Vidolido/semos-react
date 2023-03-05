import { useState } from "react";

export const StateTutorial = () => {

    const [inputValue, setInputValue] = useState();

    let handleChange = event => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

  return (
    <div>
        <h1>State!</h1>
        <input onChange={handleChange} placeholder="enter your name" />
        <h2 id="show">{inputValue}</h2>
    </div>
  )
}
