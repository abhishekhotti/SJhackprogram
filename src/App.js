import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App" style={{ background: "black" }}>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand style={{ margin: "auto" }} href="./">
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
      <header className="App-header">
        <Button
          style={{ padding: "30px", width: "75%" }}
          size="lg"
          block="true"
          type="button"
          variant="outline-info"
          href="./housing"
        >
          Housing
        </Button>
        <Button
          style={{ padding: "30px", width: "75%", marginTop: "25px" }}
          size="lg"
          block="true"
          type="button"
          variant="outline-info"
          href="./jobs"
        >
          Jobs
        </Button>
        <Button
          style={{ padding: "30px", width: "75%", marginTop: "25px" }}
          size="lg"
          block="true"
          type="button"
          variant="outline-info"
          href="./therapy"
        >
          Counseling
        </Button>
      </header>
    </div>
  );
}

export default App;
