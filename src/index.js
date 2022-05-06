import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styleArgument = { fontSize: '100px', color: 'blue' };
const showOne = false;
const userName = "Jackson";
const tester =(userName)=> {
  return( 
      <div>
          <button> who? </button>
          <h1> {userName} </h1>
      </div>
  );
}
root.render(
  <div>
  <h1 className = "title" style = { styleArgument }> Hello world!</h1>
  <h1> { (showOne===true) ? 1 : 0 } </h1>
  <h3>{tester(userName)}</h3>
  </div>
);

reportWebVitals();
