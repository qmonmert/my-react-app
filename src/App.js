import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: palevioletred;
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title>Title</Title>
        <TomatoButton>TomatoButton</TomatoButton>
      </div>
    );
  }

}

export default App;
