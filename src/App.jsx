import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
  
  const[state,setState]=useState(68);
 const myfun=(e)=>{
  console.log('function calling');
  setState(e);
 }

  return (
    <>
    <Home data={'data'} fun={myfun} shi={state}/>
    </>
  )
}

export default App
