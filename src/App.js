// import './App.css';
import React, {useState , useEffect} from 'react'
import * as user from "./User";
function App() {

const [count, setCount]  = useState(1)

useEffect(()=>{
  // alert("clicked")
},[])

function incrementCount(){
  setCount(prev=>prev+2)
 }
  return (
    <div className="App">
      <button onClick={incrementCount}>+</button>
     <span>{count}</span> 
     <user.default name="herry"/>
     <div style={{padding:"20px"}}>
       {/* {user.uno()} */}
     {/* {user.dos()}
     {user.tres()}</div>
     {user.callMe()} */}
</div>
    </div>
  );
}

export default App;
