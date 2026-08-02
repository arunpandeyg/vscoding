import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer>
        <h1>Simple Application</h1>
        <Button color="warning" online>Hello</Button>
      </ToastContainer>
    </div>
  );
}

export default App;
