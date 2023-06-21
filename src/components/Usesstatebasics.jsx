//respond to user imteraction - event listener, event handler
//btn.addeventlistener(click, eventHandler)


// const User = () => {
//     const handleClick = () => {
//         console.log("user clicked");
//     };
//     const handleClick2 = (name) => {
        
//     }
// }
import React from 'react'
import { useState } from 'react'
//name = user
// John
// state management -- useState
// import useState
const Usesstatebasics = () => {
   // (console.log(useState());
    const [name, setName] = useState("User");
    const [num, setNum] = useState(0);
        
    const handleClick = () => {
        setName("John");
    };
    const increase = () => {
        setNum(num + 1);
    };
    const decrease = () => {
        setNum(num - 1);
    };
    const reset = () => {
        setNum(0);
        setName ("user")
    };
    return (
        <div>
            <h1>Use State Basics</h1>
            <b>Welcome {name}</b>
            <h1>{num}</h1>
            <button onClick={increase}>Increase</button>
                        <button onClick={increase}>Increase</button>

    </div>
)
}

export default Usesstatebasics