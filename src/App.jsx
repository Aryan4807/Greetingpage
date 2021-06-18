import React, { useState } from 'react';

const App =() => {
const [name, setname]=useState("");
const [passwor,setpass]=useState("");
const [fullName,setfullName]=useState();
const [lastName,setlastName]=useState("");
    const inputEvent=(event)=>{
        //console.log(event.target.value);
            setname(event.target.value)
    }
    const inputEventTwo=(event)=>{
        setpass(event.target.value)
    }
  const onSubmit=(event)=>{
      event.preventDefault();
      setfullName(name);
        setlastName(passwor);
  }
    return(  
    <>
    <form onSubmit={onSubmit}>
        <div>
        <h1>HI! {fullName} {lastName}</h1>
        <input type="text" 
        placeholder="enter your name" 
        onChange={inputEvent} 
        value={name}>
         </input>

        <input type="text" 
        placeholder="enter your password" 
        onChange={inputEventTwo} 
             value={passwor}>
             </input>

        <button type='submit' >click me</button>
        </div>
        </form>  </>
    );
    }



export default App;
