import React, { useState } from 'react';

const App =() => {
const [Fullname, setFullname]=useState({
    fName:"",
    lName:"",
    email:"",
    Number:"",
    qua:""
});

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
     
           // setFullname(event.target.value)
    // const value=event.target.value;
    // const name=event.target.name;
const {value,name}=event.target;
    setFullname((prevalue)=>{
    console.log(prevalue);
    return{
        ...prevalue,
        [name]:value,
    }    
//             if(name==="fName")
//             {
//                 return{
//                     fName: value,
//                     lName : prevalue.lName,
//                     email:prevalue.email,
//                     Number:prevalue.Number,
//             }
//             }
//             else  if(name==="lName")
//             {
//                 return{
//                     fName: prevalue.fName,
//                     lName : value,
//                     email:prevalue.email,
//                     Number:prevalue.Number,
//             }
//             }
//             else  if(name==="email")
//             {
//                 return{
//                     fName: prevalue.fName,
//                     lName :prevalue.lName ,
//                     email:value,
//                     Number:prevalue.Number,

//             }
//             }
//             else  if(name==="Number")
//             {
//                 return{
//                     fName: prevalue.fName,
//                     lName : prevalue.lName,
//                     email:prevalue.email,
//                     Number:value,
//             }
//             }
})
        }
  
  const onSubmit=(event)=>{
      event.preventDefault();
      alert("form submitted");
  }
    return(  
    <>
    <form onSubmit={onSubmit}>
        <div>
        <h1>HI! {Fullname.fName} {Fullname.lName}</h1>
        <p>{Fullname.Number} {Fullname.email}</p>
        <input type="text" 
        placeholder="enter your name" 
       name="fName"
        onChange={inputEvent} 
       value={Fullname.fName}
        >
         </input>

        <input type="text" 
        placeholder="enter your password" 
       name="lName"
        onChange={inputEvent} 
             value={Fullname.lName}
            >
             </input>

             <input type="email" 
             placeholder="enter your email" 
            name="email"
             onChange={inputEvent} 
                  value={Fullname.email}
                 >
                  </input>
                  
        <input type="number" 
        placeholder="enter your phone no" 
       name="Number"
        onChange={inputEvent} 
             value={Fullname.Number}
            >
             </input>
             <input type="text" 
             placeholder="enter your qualification" 
            name="qua"
             onChange={inputEvent} 
                  value={Fullname.qua}
                 >
                  </input>
        <button type='submit' >click me</button>
        </div>
        </form>  </>
    );
    }



export default App;
