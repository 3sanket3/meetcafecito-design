import React from "react";
import logo from "./logo.png";

import "./App.css";
import styled from "styled-components";
import { FaVolumeUp, FaShareSquare, FaVideo } from "react-icons/fa";

const Layout = styled.div`
  padding: 0 5%;
`;
const Header = styled.div`
  text-align: center;
  padding: 15px;
  margin-bottom: 15px;
`;

const NavigationContainer = styled.div`
  margin-bottom: 15px;
`;

const CallContainer = styled.div`
  display: grid;
  grid-template-columns: auto 20%;
  border: 8px solid #f8f5f5;
  box-sizing: border-box;
  border-radius: 5px;
`;

const VideoScreensContainer = styled.div``;
const VideoTileContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  grid-gap: 10px;
  justify-content: center;
  margin: 15px;
`;

const AgendaContainer = styled.div`
  border-left: 8px solid #f8f5f5;
`;

const Video = styled.div`
  padding-top: 56%;

  position: relative;
  background: #ccc;
`;

const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  background: #000;
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  padding: 10px;
  margin: 5px;
  color: #fff;
  border-radius: 5px;
  :hover {
    background: #ccc;
  }
`;

function App() {
  return (
    <Layout>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <NavigationContainer>
        <a href="#"> Go back to home</a>
      </NavigationContainer>

      <CallContainer>
        <VideoScreensContainer>
          <VideoTileContainer>
            <Video></Video>
            <Video></Video>
            <Video></Video>
          </VideoTileContainer>
          <ControlWrapper>
            <Control>
              <FaVolumeUp />{" "}
            </Control>
            <Control>
              <FaVideo />
            </Control>
            <Control>
              <FaShareSquare />
            </Control>
          </ControlWrapper>
        </VideoScreensContainer>
        <AgendaContainer></AgendaContainer>
      </CallContainer>
    </Layout>
  );
}

export default App;
