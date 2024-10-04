import React from "react";
import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration"
import StepOne from "./pages/StepOne"
import StepTwo from "./pages/StepTwo"

import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      <StepOne />
    </div>
  );
};

export default App;
