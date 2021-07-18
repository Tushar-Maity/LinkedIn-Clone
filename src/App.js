import React from 'react';
import styled from "styled-components"
import Header from './Header';
import Sidebar from "./Sidebar"

function App() {
  return (
    <AppContainer>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppBody = styled.div`
  display: flex;
`;

export default App;
