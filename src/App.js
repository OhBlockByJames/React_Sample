import React from 'react';
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <button onClick={props.handleClick}>{props.name}</button>
    </React.Fragment>
  );
}

export default App;
