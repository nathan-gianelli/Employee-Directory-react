import React from 'react';
import Nav from "./components/nav"
import Container from "./components/container"
import Table from "./components/tables"
import './App.css';
// import searchbar from "./components/"

function App() {
  return (
    <Container>
    <Nav/>
    <Table/>
    </Container>
  );
}

export default App;
