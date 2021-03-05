import axios from 'axios';
import React, {useState,useEffect} from 'react';

const User=()=>{
    const [num, setNum] = useState()
    const arr=[1,2,3,4,5]

    useEffect(() => {
       
      async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res.data.name)
      }
      getData();
    },)
  return (
    <> 
      <h1>You selected {num}</h1>
      <select
        value={num}
         onChange={(event)=>{
             setNum(event.target.value)
         }}>
          {arr.map((i)=>
        <option value={i}>{i}</option>
        )} 
      </select>
    </>  
)
}

export default User;

// const uno=()=>{
//     return "I am One"
// }


// const dos=()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve ("I am Two");
//     }, 3000);
//   })    
// }


// const tres=()=>{
//     return "I am Three"
// }

// const callMe = async() =>{
//     let valOne= uno();
//     console.log (valOne)

//     let valTwo= await dos();
//     console.log (valTwo)

//     let valThree= tres();
//    console.log (valThree);

    
// }
// export {uno,dos,tres,callMe};