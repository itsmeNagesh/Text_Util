
import React,{useState} from 'react';


export default function Textform(props) {
  const upperCaseCon=()=>{
    console.log('UperCappercase Button was clicked'+ text);
    setText('you have clicked  on handlerUp');
    let newContext=text.toUpperCase();
    setText(newContext);
    
  }
  const lowerCaseCon=()=>{
    console.log('UperCappercase Button was clicked'+ text);
    setText('you have clicked  on handlerUp');
    let newContext=text.toLowerCase();
    setText(newContext);
  }
  const changeHandler=(event)=>{
    console.log('onchange');
    setText(event.target.value);

  }
  const clearhandler=()=>{
        let newt='';
    setText(newt);

  }
  const handlecopy=()=>{
    console.log("Copy Now");
    var newtext=document.getElementById("ex");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  }
  const handlespaces=()=>{
    var newt=text.split(/[ ]+/);
    setText(newt.join(' '));
  }
  const[text, setText] = useState('Enter the text...');
  //settext(text);
  return (
    <>
  <div className="container">
    <h1>{props.define}</h1>

    <div className="form-group">
    <textarea className="form-control"  value={text}  onChange={changeHandler} id="ex" rows="8"></textarea>
  </div>

  <button className="btn1"  onClick={upperCaseCon}> UpperCase</button>
  <button className="btn2"  onClick={lowerCaseCon}>LowerCase</button>
  <button className="btn2"  onClick={clearhandler}>Clear</button>
  <button className="btn2"  onClick={handlecopy}>Copy Text</button>
  <button className="btn2"  onClick={handlespaces}>RemoveExtraSpaces</button>
  </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length } Words   And  {text.length} Are Character</p>
       <p>{0.008*text.split(" ").length}  Read in minutes</p>
    </div>
</>
  )
  //<div className="body"><Textform define='Text Converter'/></div>
}
