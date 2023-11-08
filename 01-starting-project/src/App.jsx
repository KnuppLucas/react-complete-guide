import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration grater than zero</p>}
      {inputIsValid && <Table input={userInput}/>}
    </>
  )
}

export default App
