import { useState,useContext } from "react";
import { AppContext } from "./App";

function Home(){

  const value=useContext(AppContext)


    console.log(value,'value');


    const increment=()=>value.increment()
    const decrement=()=>value.decrement()
    const reset=()=>value.reset()
    // const changeColor=()=>value.changeColor()
    const input=(e)=>{
    value.input(e. target.value)
    }
    return(
      <div style={{background:value.bgColor,width:'100%',height:'100vh'}}>
      <div className="divs" style={{background: value.bgColor}}>
      <button onClick={increment}>+</button>
      <h1>{value.state}</h1>
      {value.state===0 ?
      <button disabled onClick={decrement}>-</button> :
      <button onClick={decrement}>-</button>
      }
      <button onClick={reset}>reset</button>
      {/* <button onClick={changeColor}>Change Color</button> */}
      <input onChange={input} type="text" />
      </div>
        </div>
    )
} 
export default Home