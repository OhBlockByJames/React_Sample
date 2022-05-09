import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Progress(props){
  const barWidth=40+parseInt(props.Num);
  return(
      <div>
      <h5>{props.Num} {props.barName}</h5>
      <div className="progress-back" style={{backgroundColor:"#8E8E8E",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#EA0000",width:barWidth+"%",height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}

var number = 10;
const addNumber=()=>{
  number = number + 10;
  document.getElementById("text").innerHTML=number;
  if (number>100){
    number = 0;
    document.getElementById("text").innerHTML=number;
  }
}

const drop=()=>{
  number = number - 10;
  document.getElementById("text").innerHTML=number;
  if (number<0){
    number = 0;
    document.getElementById("text").innerHTML=number;
  }
}

root.render(
  <React.Fragment>
    <App name="+" handleClick={addNumber}/>
    <App name="-" handleClick={drop}/>
    <div id="text">{number}</div>
    <Progress barName="bar1" Num="50"/>
  </React.Fragment>
);

reportWebVitals();
