import React from 'react';
import SlotM from './Slotmach';


const App =()=>{
    return(
    <>
            <h1 className="heading_style"> π°Welcome to <span style={  {fontWeight:"bold"} }>Slot machine  game</span> π°  </h1>
           <div>
           <SlotM  x= 'π' y= 'π₯'  z= 'π' /> 
           <SlotM x= 'π'  y= 'π'  z= 'π'/> 
           <SlotM  x= 'π'  y= 'π' z= 'π' /> 
           </div>
    </>
    );
}

export default App;
