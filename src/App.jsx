import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DisplayCounter from "./displaycounter";
import Header from "./component/header";
import Container from "./container";
import Controls from "./controls";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}

export default App;
