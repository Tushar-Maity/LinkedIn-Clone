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

const AppContainer = styled.div``;

const AppBody = styled.div``;

export default App;
