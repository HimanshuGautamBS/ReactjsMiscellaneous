import React from 'react';

const User=(props)=>{
return (<h1>my name is {props.name}</h1>)
}

const uno=()=>{
    return "I am One"
}


const dos=()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve ("I am Two");
    }, 3000);
  })    
}


const tres=()=>{
    return "I am Three"
}

const callMe = async() =>{
    let valOne= uno();
    console.log (valOne)

    let valTwo= await dos();
    console.log (valTwo)

    let valThree= tres();
   console.log (valThree);

    
}

export default User;
export {uno,dos,tres,callMe};