import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from './store';
import CryptoTable from './components/CryptoTable';
import WebSocketSimulator from './services/WebSocketSimulator';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #f9fafb;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #0b1426;
  font-size: 28px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #616e85;
  font-size: 16px;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header>
          <Title>Crypto Price Tracker</Title>
          <Subtitle>Real-time cryptocurrency prices and stats</Subtitle>
        </Header>
        <CryptoTable />
        <WebSocketSimulator />
      </AppContainer>
    </Provider>
  );
}

export default App;
