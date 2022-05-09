import React from 'react';
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <button onClick={props.handleClick}>{props.children}</button>
    </React.Fragment>
  );
}

export default App;
