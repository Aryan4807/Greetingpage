import React, { useState } from 'react';
import SlotM from './Slotmach';


const App =()=>{

    const purple="purple";
   const [bg,setBg]=useState(purple);
  const [name,setName]=useState("click me");

   const bgChange=()=>{
//console.log("clicked");
            let newcolor="#34954e";
            setBg(newcolor);
            setName("ph yes 🥇");
    };
const bgBack=()=>{
    let newcolo="purple";
    setBg(newcolo);
    setName("aodos 🥈");

}
    return(
    <>
    <div style={ {backgroundColor: bg} }>
           <button onMouseEnter={bgChange}  onMouseLeave={ bgBack }> {name} </button>
           </div>
    </>
    );
}

export default App;
