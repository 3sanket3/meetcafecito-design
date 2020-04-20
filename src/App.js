import React, { useState } from "react";
import logo from "./logo.png";

import "./App.css";
import styled from "styled-components";
import { FaVolumeUp, FaShareSquare, FaVideo, FaCommentDots } from "react-icons/fa";

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

const VideoScreensContainer = styled.div`
  position: relative;
`;
const VideoTileContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  grid-gap: 10px;
  justify-content: center;
  margin: 15px;
`;

const AgendaContainer = styled.div`
  border-left: 8px solid #f8f5f5;
  text-align: center;
  position: relative;
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
  background: #000000bd;
  border-radius: 5px;
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
  cursor: pointer;
  :hover {
    background: #ccc;
  }
`;

const EndMeetingButton = styled.div`
  height: 60px;
  background: #382093;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const ChatButton = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border-radius: 50%;
  color: #fff;
  background: #382093;
  cursor: pointer;
`;
function App() {
  const [isChatEnabled, setChatEnabled] = useState();
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
          <ChatButton onClick={() => setChatEnabled(!isChatEnabled)}>
            <FaCommentDots></FaCommentDots>
          </ChatButton>
        </VideoScreensContainer>
        <AgendaContainer>
          {isChatEnabled ? (
            <h3> Chatbox will open here</h3>
          ) : (
            <>
              <h3>Cafecito break 4/16</h3>
              <h3>Agenda</h3>
              <EndMeetingButton>
                <span>End meeting and leave feedback</span>
              </EndMeetingButton>
            </>
          )}
        </AgendaContainer>
      </CallContainer>
    </Layout>
  );
}

export default App;
