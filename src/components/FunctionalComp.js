import { useState } from "react";

const FunctionalComp = ()=>{
 let [count,setCount] = useState(5); //useState is a hook that allows us to add some state to our functional component. It returns
 const update = ()=>{
    setCount(count+1)
 }
 console.log("rerender");
    return(
        <div>
        <button className="btn" onClick={update}>Click me!</button>
        <h3>{count}</h3>
        </div>
    )
}
export default FunctionalComp;