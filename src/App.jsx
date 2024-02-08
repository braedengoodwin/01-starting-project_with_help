import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

import { useState } from "react";

function App() {
  // this useState object was orginally in the UserInput.jsx file but we "lifted it up (lifted the state)"
  // and moved it to this file
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

   // this function orginally in the UserInput.jsx file but we "lifted it up (lifted the state)"
  // and moved it to this file
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        //the "+" here forces the string value to convert to a number 
        //because when getting input in JS they always return as strings rather than ints
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
     <Header/>
     <UserInput userInput={userInput} onChange={handleChange}/>
     {!inputIsValid && <p className="center">Please enter a duration greater than zero </p>}
     {inputIsValid && <Results input={userInput}/>}
    </>
   
  )
}

export default App
