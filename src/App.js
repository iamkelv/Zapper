import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import LeftBar from "./components/Nav/LeftBar";
import Home from "./components/Home/Home";
import RightBar from "./components/RightBar/RightBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
    color: "white!im",
    fontWeight: "bold",
  },
});
const Container = styled.div`
  margin: 0;
  padding: 0 200px;
  top: 0;
  background-color: #141a1e;
  width: 100vw;
  position: fixed;
  background-color: #141a1e;
  height: 100vh;
  display: flex;
  color: white;
  background-color: inherit;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;
function App() {
  const classes = useStyles();
  return (
    <Container>
      <LeftBar />
      <Home />
      <RightBar />
    </Container>
  );
}

export default App;
