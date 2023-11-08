import { useState } from "react";
function Home(props){

    const increment=()=>props.increment()
    const decrement=()=>props.decrement()
    const reset=()=>props.reset()
    // const changeColor=()=>props.changeColor()
    const input=(e)=>{
    props.input(e. target.value)
    }
    return(
      <>
      <div className="divs" style={{background: props.bgColor}}>
      <button onClick={increment}>+</button>
      <h1>{props.state}</h1>
      {props.state===0 ?
      <button disabled onClick={decrement}>-</button> :
      <button onClick={decrement}>-</button>
      }
      <button onClick={reset}>reset</button>
      {/* <button onClick={changeColor}>Change Color</button> */}
      <input onChange={input} type="text" />
      </div>
        </>
    )
} 
export default Home