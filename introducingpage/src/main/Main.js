import React, { Component } from 'react';
import Title from './Title';
import Content from './Content';

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <Content />
      </div>
    );
  }
}

export default Main;
