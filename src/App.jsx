import React from "react";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/step-one",
    element: <StepOne />
  },
  {
    path: "/step-two",
    element: <StepTwo />
  },
  {
    path: "/step-three",
    element: <StepThree />
  },
  {
    path: "/step-four",
    element: <StepFour />
  },
  {
    path: "/thanks",
    element: <Thanks />
  }
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
